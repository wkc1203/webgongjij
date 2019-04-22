
import { res } from '../basis';

/** 
 * @url http://10.0.11.166:8000/codeLogin
 * @name 公积金登陆
 */
export interface codeLogin {
  method: 'post',
  request: {
    username: string,
    yzm: string
  },
  response: {
    object: {

    },
  } & res,
}