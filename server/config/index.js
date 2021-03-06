const config = {
    // '配置项' : '配置值'
    DB_TYPE: 'mysqli', // 数据库类型
    DB_HOST: '127.0.0.1', // 服务器地址
    DB_NAME: 'blog', // 数据库名
    DB_USER: 'root', // 用户名
    DB_PWD: '', // 密码
    DB_PORT: '3306', // 端口
    DB_PREFIX: 'blog_', // 数据库表前缀
    SHOW_PAGE_TRACE: false, //
    SHOW_ERROR_MSG: false,
    ERROR_MESSAGE: '发生错误！', //
    ERROR_PAGE: 'http://www.94dreamer.com',

    // 启动端口
    port: 3301,
    // 数据库配置
    database: {
        DATABASE: 'dreamer_blog',
        USERNAME: 'root',
        PASSWORD: '',
        PORT: '3306',
        HOST: '127.0.0.1',
    },
};

module.exports = config;
