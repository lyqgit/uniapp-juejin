import Vue from 'vue'
import Vuex from 'vuex'
import tag from './tag'
import header from './header'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		tag,
		header,
		user,
	}
})