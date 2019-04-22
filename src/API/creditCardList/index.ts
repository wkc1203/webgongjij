
import { res } from '../basis';

/** 
 * @url /creditCard/cre/queryChoicenessCreditCard
 * @name 查询信用卡列表信息
 */
export interface creditCardList {
  method: 'get',
  request: false | {
    page: number,
    size: number
  },
  response: {
    data: {
      total: string,
      size: string,
      pages: string,
      current: string,
      records: {
        id: string,
        deleted: string,
        rawAddTime: string,
        rawUpdateTime: string,
        name: string,
        introduceUrl: string,
        state: string,
        imgUrl: string,
        content: string
      }[]
    },
  } & res,
}