# micro-fe-qiankun-demo
微前端小试牛刀-杂糅了vue2 / vue3 / react 结合 qiankun的demo应用场景

## 参考学习

### [微前端框架 qiankun 项目实战（一）--本地开发篇](https://mp.weixin.qq.com/s/X95qV8zrB-XgG_IlaILvAQ)

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

### [微前端框架qiankun项目实战（二）--踩坑与部署篇](https://mp.weixin.qq.com/s/zBBpZNOU_ewd2U_szE5OBA)

* icon样式冲突问题

按照文章改造后，遇到 iconfont 样式冲突问题，按照作者中提供给的方法解决了，通过给字体或icon指定不同的font-famliy样式名称，这样就不会出现样式冲突了。注意：iconfont 现在支持彩色字体，但勾选了彩色后，icon图标未正常渲染出来，所以此处需要注意。

* 部署微前端

    - 构建打包，线上/下环境动态切换
    - 跨域问题，通过 koa2-cors 包解决，其实不止3种解决方式，还可以通过 chrome plugin 方式实现
    - 实战（二）文章中提到的 坑2：页面无法跳转问题 未遇到，可能新版本qiankun 已修复此问题
    - 实战（二）子应用中 onGlobalStateChange 报错问题，我实现时没有遇到，作为子应用启动时

### 小结

* 部署后最终效果图：
![640](https://cdn.jsdelivr.net/gh/whf605319646/image_store/assets/blog/640.gif)

DONE:
- [x] micro-fe-qiankun-demo 实践及部署
- [x] 了解微前端基本应用场景

TODO:

- [ ] micro fe 实现基本原理
- [ ] 项目整合element-ui/ts/vite
- [ ] 重构登录页及系统主页
- [ ] 微前端是技术栈无关的，考虑整合react/h5/小程序(wechat,支付宝)
- [ ] 微前端下构建部署脚本实现



