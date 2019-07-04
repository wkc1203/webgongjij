import { res, code } from '../basis';

/** 
 * @url /loanApply/loan/queryById
 * @name 贷款申请查询
 */
export interface loanApply {
  method: 'get',
  request: false | {
    loanApplyId: string,
  },
  response: {
    data: {
        name: string,
        issuingAgency:string,
        number:string
    },
  } & res,
}