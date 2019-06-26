
import React, { useState, useEffect, useRef } from 'react';
import { History } from 'history';
import { Navigationt ,AntdResult} from '@components/public';

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
    // const Resutl = (resulttype:any)=>(
    //     <div>
    //         {
    //             resulttype===''
    //         }
    //         <AntdResult fn={() => {
    //             console.log(111)
    //         }} resulttype={'success'} title='恭喜您，贷款审批通过' messageFist='请点击立即用款完成后续流程' messageSecord='您的审批额度为￥100,000' btnShow={true} btnText='开始签约'/>
    //         <AntdResult  resulttype='audit' title='审核中' messageFist='您的资料正在银行审核中'/>
    //         <AntdResult  resulttype='tips' messageFist='由于您提交的资料有误或缺失 请您点击补件按钮检查并补全资料' btnShow={true} btnText='去补件'/>
    //         <AntdResult  resulttype='wrong' messageFist='抱歉，您未通过贷款审批'/> 
    //     </div>
    // )
    const Resutl = (resulttype:any)=>(
        <div>
            <div>2</div>
            {(()=>{
                 switch (resulttype) {
                    case 'success':
                        return <AntdResult fn={() => {
                            console.log(111)
                        }} resulttype={'success'} title='恭喜您，贷款审批通过' messageFist='请点击立即用款完成后续流程' messageSecord='您的审批额度为￥100,000' btnShow={true} btnText='开始签约'/>
                    case 'audit':
                        <AntdResult  resulttype='audit' title='审核中' messageFist='您的资料正在银行审核中'/>
                        break;
                    case 'tips':
                        <AntdResult  resulttype='tips' messageFist='由于您提交的资料有误或缺失 请您点击补件按钮检查并补全资料' btnShow={true} btnText='去补件'/>
                        break;
                    case 'wrong':
                        <AntdResult  resulttype='wrong' messageFist='抱歉，您未通过贷款审批'/>
                        break;
                    default:return <div>23</div>;
                    }
            })()}
        </div>
    )
    return (
        <div>
        <Navigationt title='申请流程' history={history} />
        <Resutl resulttype='success'/>
        </div>
  )
}
