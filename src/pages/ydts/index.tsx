
import React from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt, Center, Cutoff, Btus } from '@components/public';

const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))

type Ydts = {
  history: History
}
const Prompt = ({title,img}:any) => (
  <div className = { style['prompt'] }>
    <img src = { pImgs[img] } />
    { title }
  </div>
)
export default ({history}:Ydts) => {
  return(
    <div className={style['ydts']}>
      <img className = { style['bbg'] } src = { pImgs['yindaotishi_bg'] } />
      <Navigationt title='引导提示' history = { history }/>
      <div className = { style['box'] }>
        <div className = { style['top'] }>
          <img src = { pImgs['yindaotishi'] } />
          { '请先完成个人信息认证再尝试登录' }
        </div>
        <Cutoff hg='20' />
        <Center>
          <img className = { style['ew'] } src = { pImgs[''] } />
        </Center>
        <Cutoff hg='29' />
        <Btus text='点击保存二维码并打开支付宝' />
        <Cutoff hg='29' />
        <Btus text='已完成支付宝认证' k/>
        <Cutoff hg='35' />
        <Prompt title='点击扫一扫' img='tishi1' />
        <Prompt title='进入相册选择保存的二维码图片' img='tishi2' />
        <Prompt title='扫描进行认证' img='tishi3' />
      </div>
    </div>
  )
}
