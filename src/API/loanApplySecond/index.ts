
import { res } from '../basis';

/** 
 * @url 10.0.10.159:50000/signIn
 * @name 贷款申请[请求参数采用json格式]
 */
export interface loanApplySecond {
  method: 'post',
  request: false | {
    id: string,
    serialNo: string,
    dealAmount: string,
    purpose: string,
    amount: string,
    preAmount: string,
    periods: string,
    calculate: string,
    rate: string,
  },
  response: {
    data: {
      msg: string,
      success: boolean
    },
  } & res,
}