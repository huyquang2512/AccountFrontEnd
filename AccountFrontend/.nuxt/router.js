import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _324ad937 = () => interopDefault(import('..\\pages\\Account\\List.vue' /* webpackChunkName: "pages/Account/List" */))
const _c2ff19d2 = () => interopDefault(import('..\\pages\\Account\\New.vue' /* webpackChunkName: "pages/Account/New" */))
const _6c5885fe = () => interopDefault(import('..\\pages\\Account\\Search.vue' /* webpackChunkName: "pages/Account/Search" */))
const _27920651 = () => interopDefault(import('..\\pages\\Account\\_id.vue' /* webpackChunkName: "pages/Account/_id" */))
const _46f945fe = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Account/List",
    component: _324ad937,
    name: "Account-List"
  }, {
    path: "/Account/New",
    component: _c2ff19d2,
    name: "Account-New"
  }, {
    path: "/Account/Search",
    component: _6c5885fe,
    name: "Account-Search"
  }, {
    path: "/Account/:id?",
    component: _27920651,
    name: "Account-id"
  }, {
    path: "/",
    component: _46f945fe,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
