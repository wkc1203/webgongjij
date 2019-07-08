import { res, code } from '../basis';

/** 
 * @url /dictionarySubitem/queryUser?parentCode=aaaa
 * @name 根据父项code查询子项
 */
export interface queryParkingLotMsg {
  method: 'get',
  request: false | {
    buildingId: string,
  },
  response: {
    data: {
      buildingId: [],
    }[],
  } & res,
}