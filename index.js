var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('服务启动成功!');
});

app.use(express.static('public'));

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
