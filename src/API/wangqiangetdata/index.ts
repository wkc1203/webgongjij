
import { res } from '../basis';

/** 
 * @url /wangqiangetdata
 * @name 网签数据请求
 */
export interface wangqiangetdata {
  method: 'post',
  request: {
    contract: string,
    name: string,
    idCardNo: string
  },
  response: {
    msg:string,
    object: {
      address: string,
      businessnumber: string,
      idcard: string,
      name: string,
      projectname: string,
      serialnumber: string,
      signtime: string,
      buildingarea: string,
    },
  } & res,
}