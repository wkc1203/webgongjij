import { res, code } from '../basis';

/** 
 * @url /building/queryBuildingMsg
 * @name 查询楼盘信息
 */
export interface queryBuildingMsg {
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