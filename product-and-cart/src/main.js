import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import all styles by importing style.scss
import './assets/styles/style.scss'


createApp(App).use(router).mount('#app')
