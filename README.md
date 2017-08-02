## 使用node redis模块连接redis数据库
```bash
npm install redis
```

```javascript
    //其中createClient可以指定端口和IP
    // var client = Redis.createClient('6379', 'localhost', {});
    var Redis = require("redis");
    var client = Redis.createClient();
```