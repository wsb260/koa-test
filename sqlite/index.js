const EASY_SQLITE3 = require('easy-sqlite3');

// 使用默认库表字段配置
// const EASY_SQLITE3_DEMO = new EASY_SQLITE3();

// 自定义库表字段配置
const EASY_SQLITE3_DEMO = new EASY_SQLITE3({
    // 数据文件存放路径,相对于运行根目录
    path: 'db',
    // 数据库名称
    database: 'iyuxy',
    // 表名称
    table: 'comments',
    // select字段，支持使用[]配置多个字段进行查询
    key: ['pageId'],
    // 表结构示例
    column: {
        _id: 'TEXT',
        title: 'TEXT',
        url: 'TEXT',
        pageId: 'INTEGER',
        email: 'TEXT',
        nickname: 'TEXT',
        comment: 'TEXT',
        website: 'TEXT',
        parentId: 'TEXT',
        time: 'INTEGER'
    }
});
module.exports = EASY_SQLITE3_DEMO;
