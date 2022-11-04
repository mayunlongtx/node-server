// main.js
import app from './app'
import {APP_PORT} from './app/config'

console.log(APP_PORT);

app.listen(APP_PORT, () => {
  console.log(`服务器在${APP_PORT}启动成功~`)
  console.log(`打开：http://localhost:${APP_PORT}/`);
})