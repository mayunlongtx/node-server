import Router from "koa-router"; // 引入依赖
import projectController from "../controller/project.route";

// 设置接口前缀
const projectRouter = new Router({
  prefix: "/project",
});

const { queryClass, queryNoun,addNoun } = projectController;
projectRouter.get("/", queryClass); // 设置接口路径，以及中间件
projectRouter.get("/noun", queryNoun); // 设置接口路径，以及中间件
projectRouter.post("/addNoun", addNoun); // 设置接口路径，以及中间件

export { projectRouter };
module.exports = projectRouter;
