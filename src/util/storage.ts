import axios from 'axios';
import qs from 'qs';
import { useAxios } from '@hooks/useAxios';
axios.defaults.timeout =  10000000;


export function storage({ zh, mm }: any) {
  axios.post('http://10.0.11.166:8000/storage',
    qs.stringify({
      username: zh,
      password: mm
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    .then(v => {
      document.dispatchEvent(new CustomEvent('storage_evt', { detail: v.data }))
    })
    .catch(() => {
      document.dispatchEvent(new CustomEvent('storage_evt', {
        detail: {
          code: '-1'
        }
      }))
    })
}