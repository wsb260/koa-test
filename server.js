const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const EASY_SQLITE3_DEMO = require('./sqlite');
let app = new Koa();
let router = new Router();

app.use(bodyParser());

router.get('/', (ctx, next) => {
    let id = ctx.request.query.id;
    console.log(id);
    ctx.body = 'test...';
});
router.get('/get/:id', (ctx, next) => {
    let id = ctx.request;
    console.log(id);
    ctx.body = 'test...';
});

router.post('/post', async ctx => {
    ctx.set('Access-Control-Allow-Origin', '*');
    let datas;
    // 插入是字段需要与表结构名称一致
    await EASY_SQLITE3_DEMO.insertData({
        _id: '1015125415027768785934',
        title: 'About me',
        url: 'https://www.iyuxy.com/aboutme/',
        pageId: 10,
        email: '985207224@qq.com',
        nickname: '我有一万个名字',
        comment: 'UI推荐好评！',
        website: '',
        parentId: '0',
        time: 1512541502780
    });
    // 查询关键字需要在conf中配置
    await EASY_SQLITE3_DEMO.selectData({ pageId: 10 }, async data => {
        datas = data;
    });
    ctx.body = datas;

});
// app.use(async ctx => {
//     ctx.body = 'Hello molong';
// });
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('success');
});
