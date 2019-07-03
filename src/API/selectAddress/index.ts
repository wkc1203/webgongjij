import { res, code } from '../basis';

/** 
 * @url /product/pro/queryBuildings
 * @name 查询产品支持省市区
 */
export interface selectAddress {
  method: 'get',
  request: false | {
    productId: string,
  },
  response: {
    data: {
      parentCode: [],
    }[],
  } & res,
}