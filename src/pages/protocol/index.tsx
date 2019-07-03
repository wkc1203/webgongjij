import React, { useEffect, useState } from 'react';
import {WhiteSpace} from 'antd-mobile'
import { AntdAccordion,Navigationt,AntdButton,Cutoff, Center} from '@components/public';
import { History } from 'history';

type Protocol = {
  history: History
}
export default ({ history }: Protocol) => {
    return (
        <div>
            <Navigationt title='签约流程' history={history} />
            <Cutoff hg='20' />
            <p style = {{paddingLeft:'8%',color:'rgba(193, 193, 193, 1)'}}>请仔细阅读并勾选相关协议</p>
            <Cutoff hg='20' />
            <AntdAccordion/>
            <Cutoff hg='30' />
            <AntdButton text='确认' fn={() => {}} ></AntdButton>
        </div>
    )
}
