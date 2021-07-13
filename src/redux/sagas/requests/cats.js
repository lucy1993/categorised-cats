import axios from 'axios';

export function requestGetCats(cred) {
  const API = 'https://api.thecatapi.com';

  return axios.request({
    method: 'get',
    url: `${API}/v1/images/search?limit=${cred.limit}&page=1&${cred.id ? `category_ids=${cred.id}` : ''}`,
  })
}