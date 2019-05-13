
import { res } from '../basis';

/** 
 * @url 10.0.10.159:50000/obtain
 * @name 获取数据
 */
export interface gjjObtain {
  method: 'post',
  request: false | {
    userNmae: string,
    code: string
  },
  response: {
    data: {
      msg: string,
      success: boolean,
      fieldData: any
    },
  } & res,
}