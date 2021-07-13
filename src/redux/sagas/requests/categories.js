import axios from 'axios';

export function requestGetCategories() {
  const API = 'https://api.thecatapi.com'
  return axios.request({
    method: 'get',
    url: `${API}/v1/categories`,
  })
}