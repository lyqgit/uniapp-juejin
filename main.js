import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import division from './common/components/division.vue'
import iconfont from './common/components/iconfont'

Vue.component('division',division)
Vue.component('iconfont',iconfont)

Vue.config.productionTip = false
Vue.use(uView)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
