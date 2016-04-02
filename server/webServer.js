var express = require('express');
var app = express();

// 设定静态资源文件
// app.use(express.static(''));

var server = app.listen(9311, function() {
	console.log('listening ...');
});

