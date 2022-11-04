import mysql from "mysql";
import Config from "./default";

export const pool = mysql.createPool({
  host: Config.database.HOST,
  user: Config.database.USERNAME,
  password: Config.database.PASSWORD,
  database: Config.database.DATABASE,
});

export function query(sql: string, values?: any) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err);
        //console.log(err, "数据库连接失败");
        resolve({
          status: 500,
        });
      } else {
        handleSuccess(sql, values, connection, resolve, reject);
      }
    });

    pool.query(sql, function (error: any, results: any, fields: any) {
      if (error) {
        reject(error);
        resolve({
          status: 400,
        });
      } else {
        resolve(results);
      }
    });
  });
}

function handleSuccess(
  sql: string,
  values: any,
  connection: mysql.PoolConnection,
  resolve: any,
  reject: any
) {
  connection.query(sql, values, (err: any, results: any) => {
    if (err) {
      reject(err);
      resolve({
        status: 400,
      });
    } else {
      connection.release();
      resolve({
        status: 200,
        results,
      });
    }
  });
}
