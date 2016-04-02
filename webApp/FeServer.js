var express = require('express');
var app = express();

// 设定静态资源文件
app.use(express.static('App'));

var server = app.listen(9911, function() {
	console.log('listening ...');
});

