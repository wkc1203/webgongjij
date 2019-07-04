
import { res } from '../basis';

/** 
 * @url 10.0.10.159:50000/signIn
 * @name 贷款申请[请求参数采用json格式]
 */
export interface loanApplication {
  method: 'post',
  request: false | {
    marriageState: string,
    education: string,
    job: string,
    company: string,
    address: string,
    addressDetail: string,
    personIncome: string,
    familyIncome: string,
    kinsfolk: string,
    kinsRelation: string,
    kinsPhone: string,
    buildingId: string,
    loanId: string,
    city: string,
  },
  response: {
    data: {
      msg: string,
      success: boolean
    },
  } & res,
}