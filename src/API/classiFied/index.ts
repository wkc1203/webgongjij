import { res, code } from '../basis';

/** 
 * @url /classiFied/appClassiFied
 * @name 【发现】分类查询
 */
export interface classiFied {
  method: 'get',
  request: false,
  response: {
    data: {
      id: string,
      rawAddTime: string,
      name: string
    }[],
  } & res,
}