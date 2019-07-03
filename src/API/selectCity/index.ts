import { res, code } from '../basis';

/** 
 * @url /product/pro/queryBuildings
 * @name 查询产品支持城市列表
 */
export interface selectCity {
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