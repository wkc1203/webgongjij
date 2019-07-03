
import { res } from '../basis';

/** 
 * @url http://10.0.11.166:8000/sendYZM
 * @name 发送验证码
 */
export interface senSms {
  method: 'get',
  request: {
    phone: string
  },
  response: {
    object: {
      
    },
  } & res,
}