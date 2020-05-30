import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pointec.dev'
})

export default api
