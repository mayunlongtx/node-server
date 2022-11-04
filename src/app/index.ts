// 入口文件
import Koa from 'koa'
const useRoutes = require('../router/index')

const app = new Koa()

useRoutes(app)
export default app
