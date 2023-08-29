import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // router import

// 위 createApp 코드 아래처럼 변경
const app = createApp(App)
app.use(router)  // router 추가
app.mount('#app')