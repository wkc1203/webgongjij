
import { res } from '../basis';

/** 
 * @url http://10.0.11.166:8000/bindPhone
 * @name 获取绑定电话
 */
export interface bindPhone {
  method: 'post',
  request: {
    username: string
  },
  response: {
    object: {
      phone: string
    },
  } & res,
}