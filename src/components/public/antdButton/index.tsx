
import React from 'react';
import style from './index.module.scss';
import { Center } from '@components/public';
import cs from 'classnames'
import { Button,WingBlank } from 'antd-mobile';

export type AntdButton = {
  text?: string,
  fn?: (...rest: any) => any,
  disabled?:boolean,
  distype?:boolean,
}

export const AntdButton = ({ text="提交", fn,disabled=false,distype }: AntdButton) => (
    <WingBlank>
        <Button
            className = {cs(style['btus'], { [style['btn-disabled']]: distype})}
            onClick = { fn }
            disabled={disabled}
        >
            {text}
            {/* <div onClick={fn} className={cs(style['btus'], k && style['k'])}>
            
            </div> */}
        </Button>
    </WingBlank>

)
