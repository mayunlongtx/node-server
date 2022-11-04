import mysql from "../mysql/index"

class ProjectController {
  // 创建类
  async queryClass(ctx: any, next: any) {
    let ctx_query = ctx.request.query;
    // 中间件
    console.log("请求成功");
    const data = await mysql.queryClass(ctx_query);
    ctx.body = {
      code: 200,
      data,
    }; // 请求响应
  } // 创建类
  async queryNoun(ctx: { body: { code: number; data: any } }, next: any) {
    // 中间件
    console.log("请求成功");
    const data = await mysql.queryNoun();
    ctx.body = {
      code: 200,
      data,
    }; // 请求响应
  }
  async addNoun(ctx: any, next: any) {
    // 中间件
    console.log("请求成功");
    const body_data = ctx.request.body;
    const data:any = await mysql.addNoun(body_data);
    ctx.body = {
      ...data
    }; // 请求响应
  }
}
const projectRouter = new ProjectController();
export default projectRouter;
