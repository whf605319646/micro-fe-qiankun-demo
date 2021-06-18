import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/main.css";

Vue.config.productionTip = false;

// 新增：用于保存vue实例
let instance = null;

// 新增：动态设置 webpack publicPath，防止资源加载出错
if (window.__POWERED_BY_QIANKUN__) {
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

/** * 新增： * 渲染函数 * 两种情况：主应用生命周期钩子中运行 / 微应用单独启动时运行 */
function render(props) {

    props.onGlobalStateChange((state, prevState) => {    
        // state: 变更后的状态; prev 变更前的状态    
        console.log("通信状态发生改变：", state, prevState);    
        // 这里监听到globalToken变化再更新store
        store.commit('setToken', '123456')
    }, true);

    // 挂载应用
    instance = new Vue({
        router,
        store,
        render: (h) => h(App),
    }).$mount("#micro-app");
}

/** 
* 新增： 
* bootstrap 只会在微应用初始化的时候调用一次，
下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。 
* 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。 
*/
export async function bootstrap() {
    console.log("VueMicroApp bootstraped");
}

/**
 * 新增：
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
    console.log("VueMicroApp mount", props);
    render(props);
}
/**
 * 新增：
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
    console.log("VueMicroApp unmount");
    instance.$destroy();
    instance = null;
}

// 新增：独立运行时，直接挂载应用
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

// 这是原本启动的代码
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
