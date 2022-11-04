const fs = require("fs");
const bodyParser = require('koa-bodyparser')

module.exports = (app: any) => {
  app.use(bodyParser())
  fs.readdirSync(__dirname).forEach((file: string) => {
    if (file === "index.ts") return;
    const router = require(`./${file}`);
    app.use(router.routes()).use(router.allowedMethods());
  });
};
