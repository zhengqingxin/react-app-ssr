import axios from 'axios'
import qs from 'qs'
import { baseURL } from './config'
import { message } from 'antd'
import pathToRegexp from 'path-to-regexp'

axios.defaults.baseURL = baseURL

const fetch = (options) => {
  const {
    method = 'get',
    data,
  } = options
  let { url } = options

  // const cloneData = lodash.cloneDeep(data) || {}
  const cloneData = data
  const toPath = pathToRegexp.compile(url)
  url = toPath(cloneData)

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData,
      })
    case 'delete':
      return axios.delete(url, {
        data: cloneData,
      })
    case 'post':
      return axios.post(url, qs.stringify(cloneData))
    case 'put':
      return axios.put(url, cloneData)
    case 'patch':
      return axios.patch(url, cloneData)
    default:
      return axios(options)
  }
}

export default function request(options) {
  return fetch(options).then((response) => {
    if (response.status !== 200) {
      throw new Error()
    }
    const data = response.data
    return data
  }).catch((error) => {
    // eslint-disable-next-line
    console.error(error)
    message.error('系统开小差了,一会儿再试吧~')
    return null
  })
}
