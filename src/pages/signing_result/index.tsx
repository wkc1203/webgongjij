
import React, { useState, useEffect, useRef } from 'react';
import { History } from 'history';
import { Navigationt ,AntdResult} from '@components/public';
import { sendMessageToNative, routing } from '@util/index';

type Result = {
  history: History
}


export default ({ history }: Result) => {
    const {
        state:{
            data:{
                resulttype
            }
        }
    }=history.location

     // 下一步
   const next_step = ()=>{
    sendMessageToNative({ type: 'push' })
    history.push({
        pathname: 'signing',
        state: {
          data: {
            resulttype: 'success',
          }
        }
      })
    routing('signing')
  } 

    const Resutl = (resulttype:any)=>(
        <div>
            {(()=>{
                 switch (resulttype.resulttype) {
                    case 'success':
                        return <AntdResult fn={() =>next_step()} resulttype={'success'} title='恭喜您，签约成功' messageFist='贷款将直接发放到开发商对公账户' messageSecord='对公账户：610 *** *** 022' btnShow={true} btnText='我的贷款'/>
                    case 'audit':
                        return <AntdResult  resulttype='audit' title='签约信息银行审核中' messageFist='签约结果请等待银行短信通知'/>
                    case 'wrong':
                        return <AntdResult  resulttype='wrong' messageFist='签约失败'/>
                    }
            })()}
        </div>
    )
    return (
        <div>
        <Navigationt title='申请流程' history={history} />
        <Resutl resulttype={resulttype}/>
        </div>
  )
}
