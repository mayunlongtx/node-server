class UserController {
  // 创建类
  async create(ctx: { body: string; }, next: any) {
    // 中间件
    console.log("请求成功");
    ctx.body = "你成功了"; // 请求响应
  }
}
const userController = new UserController()
export default userController
