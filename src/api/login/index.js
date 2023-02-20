import axios from '../request'

export const login = param => {
  return axios.request({
    url: '/api/login',
    method: 'post',
    data: param
  })
}
