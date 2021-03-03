import axios from 'axios'

var backendService = axios.create({
  headers: { 'Content-Type': 'application/x-www-form-urlencoded',
             'Referrer-Policy': 'no-referrer-when-downgrade' },
  baseURL: 'https://ilapiheroku.herokuapp.com',
  timeout: 20000,
})

export function getUsers(id) {
    return backendService({
      url: `/users`, 
      method: 'get',
      params: ''
    })
  }