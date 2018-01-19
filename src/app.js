const koa = require('koa');
const hbs = require('koa-hbs');

const app = koa();

app.use(hbs.middleware({
    viewPath: __dirname + '/views',
    partialsPath: __dirname + '/partials',
    layoutsPath: __dirname + '/views/layout',
    defaultLayout: 'layout'
}));

app.use(function *() {
    console.log(this.request.url);
    yield this.render('main');
})

app.listen(9000);
