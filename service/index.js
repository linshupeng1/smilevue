/**
 * Created by lin on 2018/7/23.
 */
const Koa = require('koa');
const app = new Koa();
//引入connect
const {connect,initSchemas} = require('./database/init.js');
const mongoose = require('mongoose');
const Router = require('koa-router');
const cors = require('koa2-cors');
let user = require('./appApi/User');
let router = new Router();
// 装载所有子路由
router.use('/user',user.routes())
// 加载路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

// 注册和引入中间件
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

app.use(cors());

//立即执行函数
;(async()=>{
  await connect();
  initSchemas();
  const User = mongoose.model('User');
  let oneUser = new User({userName: 'jspang',password: '123456'});
  oneUser.save().then(()=>{
    console.log('插入成功')
  });
  let users = await User.findOne({}).exec();
  console.log('------------------');
  console.log(users);
  console.log('------------------');
})();

app.use(async(ctx)=>{
  ctx.body='<h1>hello Koa2</h1>'
});
app.listen(3000,()=>{
  console.log('[Server] starting at port 3000')
})
