
import { res } from '../basis';

/** 
 * @url /search/result
 * @name 查询住房信息/公积金总量
 */
export interface searchHome {
  method: 'get',
  request: false,
  response: {
    data: {
      ZFXX: string,
      GJJ: string,
    },
  } & res,
}