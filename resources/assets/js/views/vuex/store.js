import Vue from 'vue'

import Vuex from 'vuex';
Vue.use(Vuex);



const store = new Vuex.Store({
    state: {
        menus: [],
        socket_uid:'',
    },
    mutations: {
        changeMenus (state,menus) {
            state.menus = menus
        },
        getUid(state,uid){

            state.socket_uid = uid;
        }

    },
    actions: {
        setMenus (context,menus) {
            context.commit('changeMenus',menus)
        },
        setUid(context,uid){

            context.commit('getUid',uid)
        }
    }
})

export default store