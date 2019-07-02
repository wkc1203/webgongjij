import { res, code } from '../basis';

/** 
 * @url /userAccessory/queryUserAccessory
 * @name 查询用户身份证信息
 */
export interface queryUserAccessory {
  method: 'get',
  request: false | {
    parentCode: string,
  },
  response: {
    data: {
        name: string,
        issuingAgency:string,
        number:string
    },
  } & res,
}