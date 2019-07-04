
import { res } from '../basis';

/** 
 * @url /bankCard/page
 * @name 分页查询自己银行卡列表
 */
export interface bankCard {
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