
import { res, code } from '../basis';

/** 
 * @url /consultation/hotNewsPage
 * @name 热门资讯【发现】
 */
export interface consultation {
  method: 'get',
  request: false | {
    classifiedId: string,
    page: string | number,
    size: string | number
  },
  response: {
    data: {
      total: string,
      size: string,
      pages: string,
      current: string,
      records: {
        id: string,
        rawAddTime: string,
        title: string,
        surfacePlotUrl: string,
        content: string,
        classifiedName: string
      }[]
    }
  } & res
}
