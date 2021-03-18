import Vue from 'vue'

const components = {
  Header: () => import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c),
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  Menu: () => import('../..\\components\\Menu.vue' /* webpackChunkName: "components/menu" */).then(c => c.default || c),
  Search: () => import('../..\\components\\Search.vue' /* webpackChunkName: "components/search" */).then(c => c.default || c),
  AccountCreateEdit: () => import('../..\\components\\Account\\CreateEdit.vue' /* webpackChunkName: "components/account-create-edit" */).then(c => c.default || c),
  AccountSearchAccount: () => import('../..\\components\\Account\\SearchAccount.vue' /* webpackChunkName: "components/account-search-account" */).then(c => c.default || c),
  AccountTable: () => import('../..\\components\\Account\\Table.vue' /* webpackChunkName: "components/account-table" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
