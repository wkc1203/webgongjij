
import { res } from '../basis';

/** 
 * @url /storage
 * @name 公积金登陆
 */
export interface storage {
  method: 'post',
  request: {
    username: string,
    password: string
  },
  response: {
    msg: string,
    object: {
      username: string,
      phone: string,
      idcard: string,
      company: string,
      opentime: string,
    },
  } & res,
}