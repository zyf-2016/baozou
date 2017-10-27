import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home.vue'
import User from 'components/user/user.vue'
import BVideo from 'components/video/video.vue'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		redirect: '/home'
  	},
    {
      path: '/home',
      component: Home
    },
    {
    	path: '/user',
    	component: User
    },
    {
    	path: '/video',
    	component: BVideo
    }
  ]
})
