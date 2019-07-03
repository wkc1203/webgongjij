import { res } from '../basis';

type records = {

}

/** 
 * @url /loanSign/querySign
 * @name 签约时查询贷款（申请）签约信息
 */
export interface querySign {
  method: 'get',
  request: false | {
    signId: string,
  },
  response: {
    data: {
      signId: [],
    }[],
  } & res,
}