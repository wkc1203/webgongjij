
import { res } from '../basis';

/** 
 * @url /product/pro/queryChoicenessProduct
 * @name 分页查询（精选）贷款产品列表
 */
export interface queryChoicenessProduct {
  method: 'get',
  request: false | {
    page?: number,
    size?: number,
    isRecommend?: '0'
  },
  response: {
    data: {
      total: string,
      size: string,
      pages: string,
      current: string,
      records: {
        rawAddTime: string,
        name: string,
        cooperationType: string,
        introduceUrl: string,
        state: string,
        isRecommend: string,
        isPrecondition: string,
        money: string,
        content: string,
        label: string,
        icoUrl: string,
        loansInSum: string,
        loansFailSum: string,
        loansSucSum: string,
      }[]
    },
  } & res,
}