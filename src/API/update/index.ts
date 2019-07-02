
import { res } from '../basis';

/** 
 * @url 10.0.10.159:50000/signIn
 * @name 贷款申请[请求参数采用json格式]
 */
export interface loanSignupdate {
  method: 'post',
  request: false | {
    id: string,
    loanId: string,
    loanProjectName: string,
    state: string,
    serialNo: string,
    dealAmount: string,
    purpose: string,
    amount: string,
    preAmount: string,
    periods: string,
    calculate: string,
    rate: string,
    buildingName: string,
    city: string,
    totalInterest: string,
    serviceChargeNo: string,
    serviceFee: string,
    repaymentWay: string,
    repayBankCardId: string,
    repaymentAccount: string,
    commissionedPart: string,
    phone: string,
    sms	: string,
  },
  response: {
    data: {
      msg: string,
      success: boolean
    },
  } & res,
}