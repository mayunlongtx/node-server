import Router from "koa-router"; // 引入依赖
import userController from "../controller/user.controller";

// 设置接口前缀
const userRouter = new Router({
  prefix: "/user",
});

const { create } = userController;
userRouter.get("/", create); // 设置接口路径，以及中间件

export { userRouter };
module.exports = userRouter;
