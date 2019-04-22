
import { res } from '../basis';

/** 
 * @url http://10.0.11.166:8000/sendYZM
 * @name 发送验证码
 */
export interface sendYZM {
  method: 'post',
  request: {
    username: string
  },
  response: {
    object: {
      
    },
  } & res,
}