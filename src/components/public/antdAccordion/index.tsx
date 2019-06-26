
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { Accordion, List,WingBlank } from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';
import { Center,AntdButton } from '@components/public';
import cs from 'classnames'
export type AntdAccordion = {
  resulttype?: string,
}
const listItem = [1,2,3,4]
export const AntdAccordion = ({  resulttype}: AntdAccordion) => {
  const [srcType, setsrcType] = useState({value:''})
  
  useEffect(() => {
    
  })
  
  return (
    <div style={{ margin: '15px' }}>
      <WingBlank size="sm">
      <Accordion defaultActiveKey="0" className="my-accordion">
          <Accordion.Panel header="Title 1">
            <List className="my-list">
              {
                listItem.map((v,i)=>(
                  <List.Item>{v}</List.Item>
                ))
              }
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel header="Title 3" className="pad">
            text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion>
      </WingBlank>
    </div>
  )
}
