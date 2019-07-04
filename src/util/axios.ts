import axios, { AxiosResponse } from 'axios';
import { getGlobalData } from '@util/index';
import  {config}  from '@util/config';
import qs from 'qs';
export function apiAxios (method:any, url:any, params:any) {
    console.log(config)
    
    let httpDefault = {
      method: method,
    //   baseURL: baseURL,
      url: config.server+url,
      // `params` 是即将与请求一起发送的 URL 参数
      // `data` 是作为请求主体被发送的数据
      params: method === 'GET' || method === 'DELETE' ? params : null,
      data: params ,
      timeout: 10000,
      headers: {
            'Content-Type': "application/json; charset=utf-8",
            'Authorization':getGlobalData('token')
        }
    }
  
    // 注意**Promise**使用(Promise首字母大写)
    return new Promise((resolve, reject) => {
      axios(httpDefault)
        // 此处的.then属于axios
        .then((res) => {
          resolve(res)
        }).catch((response) => {
          reject(response)
        })
    })
  }