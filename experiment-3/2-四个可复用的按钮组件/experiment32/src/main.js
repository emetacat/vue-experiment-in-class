import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// 导入需要使用的具体图标（按需导入，减少体积）
import {
  faPlus,
  faTrash,
  faPen,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
// 将图标添加到库中
library.add(faPlus, faTrash, faPen, faSearch)
const app = createApp(App)
// 全局注册 FontAwesomeIcon 组件
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
