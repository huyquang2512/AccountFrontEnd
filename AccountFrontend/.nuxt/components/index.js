export { default as Header } from '../..\\components\\Header.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as Menu } from '../..\\components\\Menu.vue'
export { default as Search } from '../..\\components\\Search.vue'
export { default as AccountCreateEdit } from '../..\\components\\Account\\CreateEdit.vue'
export { default as AccountSearchAccount } from '../..\\components\\Account\\SearchAccount.vue'
export { default as AccountTable } from '../..\\components\\Account\\Table.vue'

export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components/header" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyMenu = import('../..\\components\\Menu.vue' /* webpackChunkName: "components/menu" */).then(c => c.default || c)
export const LazySearch = import('../..\\components\\Search.vue' /* webpackChunkName: "components/search" */).then(c => c.default || c)
export const LazyAccountCreateEdit = import('../..\\components\\Account\\CreateEdit.vue' /* webpackChunkName: "components/account-create-edit" */).then(c => c.default || c)
export const LazyAccountSearchAccount = import('../..\\components\\Account\\SearchAccount.vue' /* webpackChunkName: "components/account-search-account" */).then(c => c.default || c)
export const LazyAccountTable = import('../..\\components\\Account\\Table.vue' /* webpackChunkName: "components/account-table" */).then(c => c.default || c)
