var express = require("express");
var localIpV4Address = require("local-ipv4-address");
const expressip = require('express-ip');
var app = express();
var port = process.env.PORT || 3000;
app.use(expressip().getIpInfoMiddleware);
app.set("view engine","ejs");
app.set("views","./views");

app.get("/",function(req,res){
  res.render("index1");
  localIpV4Address().then(function(ipAddress){
    console.log("My IP address is " + ipAddress);
    // My IP address is 10.4.4.137
    console.log(req.ipInfo);
});
});


app.listen(port, function(){
  console.log("Connect Done: ",port);
});