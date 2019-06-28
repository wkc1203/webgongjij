import { res, code } from '../basis';

/** 
 * @url /dictionarySubitem/queryUser?parentCode=aaaa
 * @name 根据父项code查询子项
 */
export interface queryUser {
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