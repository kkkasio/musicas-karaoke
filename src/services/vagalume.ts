import axios from 'axios'

export const vagalumeAPI = axios.create({
  baseURL: 'https://api.vagalume.com.br'
});

axios.defaults.params['apiKey'] = process.env.VAGALUME_API_KEY;