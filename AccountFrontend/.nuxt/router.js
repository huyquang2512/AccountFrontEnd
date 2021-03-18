import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4fcdf39d = () => interopDefault(import('..\\pages\\Account\\List.vue' /* webpackChunkName: "pages/Account/List" */))
const _449d73f1 = () => interopDefault(import('..\\pages\\Account\\New.vue' /* webpackChunkName: "pages/Account/New" */))
const _da0c5432 = () => interopDefault(import('..\\pages\\Account\\Search.vue' /* webpackChunkName: "pages/Account/Search" */))
const _64a1f1aa = () => interopDefault(import('..\\pages\\Account\\_id.vue' /* webpackChunkName: "pages/Account/_id" */))
const _6e182664 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _4fcdf39d,
    name: "Account-List"
  }, {
    path: "/Account/New",
    component: _449d73f1,
    name: "Account-New"
  }, {
    path: "/Account/Search",
    component: _da0c5432,
    name: "Account-Search"
  }, {
    path: "/Account/:id?",
    component: _64a1f1aa,
    name: "Account-id"
  }, {
    path: "/",
    component: _6e182664,
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
