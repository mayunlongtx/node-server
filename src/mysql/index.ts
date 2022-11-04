import { format } from "../common/date";
import mysql from "mysql";
import { humpToLineObject, lineToHumpObject } from "../common/util";
import { addNoun, delNoun, queryClass, queryNoun } from "./spl";
import { pool, query } from "./pool";

class Mysql {
  constructor() {}
  // 查询分类
  queryClass(data: any) {
    let sql = queryClass;
    if (data && data.id) {
      sql = `${queryClass} where id = ${data.id}`;
    }
    return new Promise(async (resolve, reject) => {
      pool.query(sql, function (error: any, results: any, fields: any) {
        if (error) {
          throw error;
        }
        resolve(results);
      });
    });
  }
  //   查询名片
  queryNoun(data?: any) {
    let spl:any = queryNoun;
    if (data.name) {
      spl = `${queryNoun} where name = ${data.name}`;
    }
    return new Promise(async (resolve, reject) => {
      pool.query(spl, async (error: any, results: any, fields: any) => {
        if (error) {
          throw error;
        }
        const dataList: any = [];
        let index = 0;
        if (!results.length) {
          // resolve([]);
        } else {
          do {
            const classData: any = await this.queryClass({
              id: results[index].class_id,
            });
            const data = Object.assign(results[index], {
              class_name: classData.length ? classData[0].name : "",
            });
            dataList.push(lineToHumpObject(data));
            index++;
            if (index === results.length) {
              resolve(dataList);
            }
          } while (index < results.length);
        }
      });
    });
  }
  // 新增名片
  addNoun(data: any) {
    const {
      name,
      english_name,
      alias_name,
      description,
      class_id,
      operate_user,
      remark,
    } = humpToLineObject(data);
    const create_time = format(new Date());
    const update_time = create_time;
    return new Promise(async (resolve, reject) => {
      const nounSql = await mysql.format(addNoun, [
        name,
        english_name || "",
        alias_name || "",
        description || "",
        class_id,
        operate_user || "",
        remark || "",
        create_time,
        update_time,
      ]);
      // const nowNoun: any = await this.queryNoun({
      //   name,
      // });
      const nowNoun:any = []
      console.log(nowNoun);
      if (nowNoun.length) {
        resolve({
          code: 201,
          message: "已经存在",
          data: false
        });
      } else {
        pool.query(nounSql, function (error: any, results: any, fields: any) {
          if (error) {
            reject(error);
            // throw error;
          } else {
            resolve({
              code: 200,
              message: '新增成功',
              data: true
            });
          }
        });
      }
    });
  }
  // 删除名片
 delNoun(data:any) {
  let sql = delNoun;
    if (data && data.id) {
      sql = `${delNoun} where id = ${data.id}`;
    }

    return new Promise(async (resolve, reject) => {
      pool.query(sql, function (error: any, results: any, fields: any) {
        if (error) {
          reject(error);
          // throw error;
        } else {
          resolve({
            code: 200,
            message: '删除成功',
            data: true
          });
        }
      });
    })
 }
}

export default new Mysql();
