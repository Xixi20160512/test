---
title: JS-Syntax-Demo
date: 2016-10-06 19:19:21
tags: js
categories: art
---
旨在通过实例记录遇到的js语法，会持续记录；基础弱不要紧，就怕不去钻研。

<!-- more -->

### for..in..
这个方法用于遍历对象的属性，每个不同属性，语句都会被执行一次。
```javascript
var arr = [12,23,34,45];
for(var i in arr){
    console.log(arr[i])
}
```
此处的***i***为arr数组的角标，即0，1，2，3；通过arr[i]来访问数组中的元素，即12，23，34，45
```javascript
var obj = {a:12,b:'dj',c:'kk',d:'ff'};
for(var i in obj){
    console.log(obj[i])
}
```
此处***i***为obj中的属性名，即a,b,c,d;通过obj[i]来访问对象中的元素，即12,dj,kk,ff

### addEventListener()
HTML DOM方法为元素添加事件侦听

为``<button>``按钮添加点击事件，当用户点击按钮时，在``id="demo"``的p元素上输出“hello world”
```javascript
document.getElementById('myButton').addEventListener('click',function(){
            document.getElementById('demo').innerHTML = "hello world"
    })
```
那么为什么在绝大多数事件中是直接调用的DOM元素的属性的情况下还要用这种方式绑定事件呢？
大概是像``change``事件不能通过属性的方式来访问？

### if的奥义
一般来说``if``条件语句的结构为
```javascript
if (true) {}
```
为什么要有花括号？意思是花括号所包围的代码块都受到``if``条件的约束。那么下面的代码
```javascript
if (this.domArr.length > 0)
    this.domArr[this.domArr.length - 1].setChildren(singleNode);
console.log(this.domArr)
```
怎么看？当***条件影响的语句只是一句时，可以省去花括号，但是切记该语句结束一定要有分号***，就是这么简单的理解。

### 避免重复码字prototype
在为构造器函数添加新的方法时，每次都要输入prototype是不是很麻烦？今天看到一个有趣的写法，可以避免重复。当然，是否有必要，那完全是根据不同情况来判断的。
```javascript
Object.prototype.method = function(name,func){
    if(!this.prototype[name]){
        this.prototype[name] =func;
    }
    return this;
}
```
调用的时候就这样
```javascript
//有一个构造器函数
var Test = function(){};
Test.method('showMe',function(){
    console.log(this.me);
    });
Test.method('me','lilei');
var showMe = new Test;
showMe.showMe(); //--> lilei
```
是不是挺有意思的~~

### 是用sublime的方法补全还是不用
在使用sublime写jq函数的时候会自动补全函数的参数，但是有些参数是并不需要的。需要改动，所以最好还是不要用那个自动补全的了。

### display:none不能隐藏inline元素