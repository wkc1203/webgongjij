import { res, code } from '../basis';

/** 
 * @url /dictionarySubitem/queryUser
 * @name 家庭月收入
 */
export interface familyIncomes {
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