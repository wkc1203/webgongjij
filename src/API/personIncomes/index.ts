import { res, code } from '../basis';

/** 
 * @url /dictionarySubitem/queryUser
 * @name 个人月收入
 */
export interface personIncomes {
    method: 'get',
    request: false | {
      parentCode: string,
    },
    response: {
      data: {
        parentCode: [],
      }[],
    } & res,
}