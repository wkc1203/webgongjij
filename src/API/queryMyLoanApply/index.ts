import { res } from '../basis';

type records = {

}

/** 
 * @url /loanApply/loan/queryMyLoanApply
 * @name 分页查询自己贷款申请记录
 */
export interface queryMyLoanApply {
  method: 'get',
  request: false,
  response: {
    data?: {
      data: {
        total: number,
        size: string,
        pages: string,
        current: string,
        records: records[]
      }
    } & res,
  }
}
