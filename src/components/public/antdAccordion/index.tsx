
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { Accordion, List,WingBlank,Checkbox } from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';
import { Center,AntdButton } from '@components/public';
import cs from 'classnames'
export type AntdAccordion = {
  resulttype?: string,
}
const listItem = [1,2,3,4]
const AgreeItem = Checkbox.AgreeItem;
export const AntdAccordion = ({  resulttype}: AntdAccordion) => {
  const [srcType, setsrcType] = useState({value:''})
  
  useEffect(() => {
    
  })
  const onChange=(value:any)=>{
    console.log(value)
  }
  return (
    <Accordion  className="my-accordion">
    <Accordion.Panel header={ 
      <AgreeItem key={1} onChange={() => onChange(1)}>
        个人消费性借款合同
     </AgreeItem>
   }>
       
       <List className="my-list">
         {
           listItem.map((v,i)=>(
             <List.Item>{v}</List.Item>
           ))
         }
       </List>
     </Accordion.Panel>
     <Accordion.Panel header={ 
     <AgreeItem key={1} onChange={() => onChange(1)}>
       签约协议2
     </AgreeItem>
   } className="pad">this is panel content2 or other</Accordion.Panel>
     
     <Accordion.Panel header={ 
     <AgreeItem key={1} onChange={() => onChange(1)}>
       签约协议3
     </AgreeItem>
   } className="pad">
         text text text text text text text text text text text text text text text
     </Accordion.Panel>
     
     
   </Accordion>
  )
}
