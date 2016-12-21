---
title: PHP以及thinkPHP初接触
categories: art
date: 2016-10-16 19:15:23
tags: PHP
---
***摘要***
不要局限于一种技术或者一个安逸的环境
<!-- more -->

## thinkPHP踩坑
#### 打开网页404
不知道是什么原因，有一种情况是和网站根目录下缺失``.htaccess``文件，关于这个文件，可以看下面链接。
[.htaccess简介](http://www.cnblogs.com/xiaochaohuashengmi/archive/2010/05/24/1742539.html)
#### 根目录和thinkPHP文件夹底下的Public文件夹
根目录为应用的入口目录，而不是thinkPHP目录；Public文件夹底下的文件会在网页首次载入的时候被加载

#### 双层数据获取

#### 合理的css类名和

#### 后台数据获取以及提交表单
1、
2、表单提交
第一步将数据提交到PHP；
第二步将数据提交到Java后台；
第三步检查Json数据是否正确（用Postman调试）