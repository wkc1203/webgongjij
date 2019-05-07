import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { API, } from '../../API';
import { res, code } from '../../API/basis';
import { getGlobalData } from '@util/index';
import qs from 'qs';

const api1 = 'http://10.0.11.227:8891/apis'
const api2 = 'http://10.0.11.213:9000'

type fn = (rest?: any) => any

export function useAxios<
  URL extends keyof API,
  request extends API[URL]['request'],
  response extends API[URL]['response'],
  method extends API[URL]['method'],
  >({
    url, method, request, execute = true, callback, apiSwitch = false, form = false, token = false
  }: {
    url: URL,
    method: method,
    request?: request,
    execute?: boolean,
    callback?: () => void,
    apiSwitch?: boolean,
    form?: boolean,
    token?: boolean
  }): [API[URL]['response'], fn] {
  const [data, setData] = useState<res>({ code: code.init })
  const [res, setRes] = useState<boolean>(true)
  const api = apiSwitch ? api2 : api1
  const headers = {
    'Authorization': token && getGlobalData('token'),
    'Content-Type': form && 'application/x-www-form-urlencoded'
  }
  const thens = (res: AxiosResponse<response>) => {
    try {
      if (res.data.code === code.success) {
        setData({ ...res.data, code: code.success })
        callback && callback()
      } else {
        setData({ ...res.data, code: code.error })
      }
    } catch {
      setData({ ...res.data, code: code.success })
    }
  }
  const catchs = (res: AxiosResponse<response>) => {
    setData({ ...res.data, code: code.error })
  }
  useEffect(() => {
    if (execute) {
      if (method === 'get') {
        let s = ''
        if (request) {
          s = JSON.stringify(request)
          s = '?' + s.slice(2, s.length - 1).replace(/"/g, '').replace(/:/g, '=').replace(/,/g, '&')
        }
        axios.get<response>(api + url + s, { headers: { ...headers } })
          .then(res => thens(res))
          .catch(res => catchs(res))
      } else if (method === 'post') {
        axios.post<response>(api + url, form ? qs.stringify(request) : request, { headers: { ...headers } })
          .then(res => thens(res))
          .catch(res => catchs(res))
      }
    }
  }, [url, res, execute])
  const setreq = () => {
    if (data.code !== code.init) {
      setData({ code: code.init })
      setRes(!res)
    }
  }
  return [(<response>data), setreq]
}

// export function useAxiosAll<
//   URL extends keyof API,
//   response extends API[URL]['response'],
//   >(state: Array<response>, callback?: fn): [boolean, any] {
//   let aa = state.reduce((pre, cur) => pre && cur.data.code == code.success, true)
//   if (aa) {
//     callback && callback(state)
//   }
//   return [!aa, state[0]]
// }

// export function useAxiosRely<
//   URL extends keyof API,
//   response extends API[URL]['response'],
//   >(params: Array<response>, callback: fn) {
//   const state = params.reduce((pre, cur) => pre && cur.data.code == code.success, true)
//   if (state) {
//     return callback()
//   } else {
//     return false
//   }
// }
