var Redis = require("redis");
/**
 * 默认端口6379
 */
// var client = Redis.createClient('6379', 'localhost', {});
var client = Redis.createClient('6379', '106.14.123.79');
/**
 * 当redis服务器开启requirepass时，需要使用client.auth进行密码校验
 */
// client.auth('123456', function() {
//     console.log('auth success');
// });

client.on('ready', function() {
    console.log('redis is ready');
});
client.on('connect', function() {
    console.log('redis is connected');
});
client.on('error', function(error) {
    console.error(error);
});