// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VueResource from 'vue-resource'
import './assets/css/spectre.min.css'
import './assets/icons/css/font-awesome.min.css'
import Lists from './components/Lists'
import Test from './components/Test'
import Rock from './components/Rock'
import AddTodo from './components/AddTodo'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  basedir: __dirname,
  routes: [
    {path: '/', component: Test},
    {path: '/lists', component: Lists},
    {path: '/rock', component: Rock},
    {path: '/addtodo', component: AddTodo}
  ]
});

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
    <h3>Components</h3>
      <ul>
        <li><router-link to="/">My Lists</router-link></li>
        <li><router-link to="/lists">Create List</router-link></li>
        <li><router-link to="/rock">Rock</router-link></li>
        <li><router-link to="/addtodo">AddTodo</router-link></li>
      </ul>
      <hr>
      <router-view></router-view>
    </div>
  `
}).$mount('#app')
