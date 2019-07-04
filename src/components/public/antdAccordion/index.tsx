
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { Accordion, List,WingBlank,Checkbox } from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';
import { Center,AntdButton } from '@components/public';
import {xieyi} from './xieyi'
import {xieyi1} from './xieyi'
import cs from 'classnames'
export type AntdAccordion = {
  resulttype?: string,
  getState: (...rest: any) => void,
}
const listItem = [1,2,3,4]
const AgreeItem = Checkbox.AgreeItem;
export const AntdAccordion = ({  resulttype,getState}: AntdAccordion) => {
  const [srcType, setsrcType] = useState({value:''})
  
  useEffect(() => {
    
  })
  const onChange=(value:any)=>{
    console.log(value)
    console.log(value.target.checked)
  }
  return (
    <Accordion  className="my-accordion">
    <Accordion.Panel header={ 
      <AgreeItem key={1} onChange={(e:any) => getState(e,1)}>
        壹米金融服务费用协议
     </AgreeItem>
   }>
       
       <List className="my-list">
       <div className = { style['cbox'] } dangerouslySetInnerHTML={{ __html: xieyi }}>
                {  }
              </div>
       </List>
     </Accordion.Panel>
     <Accordion.Panel header={ 
     <AgreeItem key={1} onChange={(e:any) => getState(e)}>
       一麻袋协议支付服务协议
     </AgreeItem>
   } className="pad"><div className = { style['cbox'] } dangerouslySetInnerHTML={{ __html: xieyi1 }}>
   {  }
 </div></Accordion.Panel>
   </Accordion>
  )
}
