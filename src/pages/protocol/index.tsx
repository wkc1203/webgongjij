import React, { useEffect, useState } from 'react';
import {WhiteSpace} from 'antd-mobile'
import { AntdAccordion,Navigationt,AntdButton,Cutoff, Center} from '@components/public';
import { History } from 'history';

type Protocol = {
  history: History
}
export default ({ history }: Protocol) => {
    const [Accordion, AccordionOnchange] = useState()
    const [btn, btndisabled] = useState(true)

    useEffect(() => {
        console.log(Accordion!==undefined?Accordion.target.checked:'',Accordion!==undefined?Accordion.target.children:'')
        if(Accordion!==undefined){
            if(Accordion.target.checked===true){
                if(Accordion.target.children==="壹米金融服务费用协议"||Accordion.target.children==="一麻袋协议支付服务协议"){
                    btndisabled(false)
                }else{
                    btndisabled(true)
                }
            }else{
                btndisabled(true)
                console.log(btn,2222)
            }
        }
    })
    return (
        <div>
            <Navigationt title='签约流程' history={history} />
            <Cutoff hg='20' />
            <p style = {{paddingLeft:'8%',color:'rgba(193, 193, 193, 1)'}}>请仔细阅读并勾选相关协议</p>
            <Cutoff hg='20' />
            <AntdAccordion getState={AccordionOnchange}/>
            <Cutoff hg='30' />
            <AntdButton disabled={btn} distype={btn} text='确认' fn={() => {}} ></AntdButton>
            <Cutoff hg='30' />
        </div>
    )
}
