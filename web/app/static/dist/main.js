import { createApp, reactive, h } from './vue.esm-browser.js'
const reactProps = reactive({
  users: [],
  student: '',
  created: null
})

fetch("/db")
  .then(resp => resp.json())
  .then(json => {
    Object.assign(reactProps, json)
  })

const app = createApp(() => h({
  props: ['users', 'student', 'created'],
  template: '#main',
}, reactProps))

app.component('dbTable', {
  props: ['users'],
  template: '#tbl-data',
})

app.component('userCard', {
  props: ['user'],
  template: '#user-card'
})
app.config.compilerOptions.delimiters = ['[[', ']]']
app.mount('#app')