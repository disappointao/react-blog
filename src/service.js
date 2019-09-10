const express =require('express');
const service=express();
service.use('/public/',express.static('./public/'));
service.use('/src/static/',express.static('./src/static/'));
service.all('*', function (req, res, next) {
//响应头指定了该响应的资源是否被允许与给定的origin共享。*表示所有域都可以访问，同时可以将*改为指定的url，表示只有指定的url可以访问到资源
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //允许请求资源的方式
  res.header("Access-Control-Allow-Methods","*");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
service.get('/login',function(req,res){
  console.log(__dirname);
  console.log(req.query);
  res.send(req.query);
});
service.listen(5000,function() {
  console.log('服务已启动！');
});