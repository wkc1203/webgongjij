
import { res } from '../basis';

/** 
 * @url 10.0.10.159:50000/signIn
 * @name 用户账号登录[请求参数采用json格式]
 */
export interface gjjSignIn {
  method: 'post',
  request: false | {
    userNmae: string,
    password: string
  },
  response: {
    data: {
      msg: string,
      success: boolean
    },
  } & res,
}