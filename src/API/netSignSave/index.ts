
import { res } from '../basis';

/** 
 * @url /netSign/save
 * @name 新增网签记录信息
 */
export interface netSignSave {
  method: 'post',
  request: {
    name?:string
    address?:string
    serialnumber?:string
    signtime?:string
    businessnumber?:string
    projectname?:string
    idcard?:string
    buildingarea?:string
  },
  response: {
    data: {
      
    },
  } & res,
}