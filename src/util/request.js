import axios from 'axios';
export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'https://lyerp.yongshikj.com/langyi/public/index.php/api',
    // baseURL: '/api',
    timeout: 5000
  })
  return instance(config)
}