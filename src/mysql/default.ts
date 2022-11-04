// default.js
// 设置配置文件
export default class Config {
  // 数据库配置
  public static readonly database = {
    DATABASE: "",
    USERNAME: "",
    PASSWORD: "",
    PORT: "3306",
    HOST: "",
  }
   // 默认时间格式
   public static readonly DEFAULT_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss'
};

