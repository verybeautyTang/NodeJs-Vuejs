import axios from 'axios'
import Vue from 'vue'
import router from './router'
const http = axios.create({
  // 将名字改为不含主机名的localhost
  baseURL: process.env.VUE_APP_API_URL || '/admin/api'
  // baseURL: 'http://localhost:3000/admin/api'
})
// 拦截服务器发出的请求
http.interceptors.response.use(res => {
  console.log(res)
  return res
}, err => {
  console.log(err.response)
  if (err.response.data.message) {
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
    if (err.response.status === 401) {
      router.push('/login')
    }
  }
  return Promise.reject(err)
})
// 拦截客户端发出的响应
http.interceptors.request.use(config => {
  if (sessionStorage.token) {
    config.headers.Authorization = 'Bearer ' + sessionStorage.token
  }
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

export default http
