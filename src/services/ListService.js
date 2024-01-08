import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:4156',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getList() {
    return apiClient.get('/list')
  }
}
