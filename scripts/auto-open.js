//暂不清楚具体的写法
var exec = require('child_process').exec;

hexo.on('new', function(data){
    exec('start "E:/Program/Sublime Text 3/sublime_text.exe" ' + data.path);
});