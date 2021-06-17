# micro-fe-qiankun-demo
微前端小试牛刀-杂糅了vue2 / vue3 / react 结合 qiankun的demo应用场景

## 参考学习

[微前端框架 qiankun 项目实战（一）--本地开发篇](https://mp.weixin.qq.com/s/X95qV8zrB-XgG_IlaILvAQ)

* v1版-最终实现效果：

登录首页：
![login](https://cdn.jsdelivr.net/gh/whf605319646/image_store/assets/blog/login.png)

系统主页：
![micro-fe-qk-demo](https://cdn.jsdelivr.net/gh/whf605319646/image_store/assets/blog/micro-fe-qk-demo.gif)

* 遇到的问题：
    * 按照文章一步步实现，期间遇到 microPath 未定义问题，声明定义这个变量即可
    * 跨域问题，在改造子应用时，未加入 qiankun ，可能会遇到，改造完后通过路由访问即可
    * 按照文章一步步改造完后，最后会出现子应用的菜单和头部，这里根据作者提示，做下判断即可

DONE:
- [x] micro fe qiankun vue 学习及实践
- [x] 了解微前端基本应用场景

TODO:

- [ ] micro fe 实现基本原理
- [ ] 项目整合element-ui/ts/vite
- [ ] 重构登录页及系统主页
- [ ] 微前端是技术栈无关的，所以会将react整合进来

期望登录页样式：
![micro-fe-login](https://cdn.jsdelivr.net/gh/whf605319646/image_store/assets/blog/micro-fe-login.gif)

期望系统主页样式：

![20210617151254](https://cdn.jsdelivr.net/gh/whf605319646/image_store/assets/blog/20210617151254.png)



