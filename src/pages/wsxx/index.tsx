
import React, { useState } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt, Cutoff, Title, Inputs, Btus, Modal, Yzm } from '@components/public';

const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))

type Wsxx = {
  history: History
}

export default ({ history }: Wsxx) => {
  const [zh, setzh] = useState('')
  const [mm, setmm] = useState('')
  const [mmc, setmmc] = useState('')
  const [sj, setsj] = useState('')
  const [yz, setyz] = useState('')
  const [show, setShow] = useState(false)
  return (
    <div className={style['wsxx']}>
      <Navigationt title='完善信息' history={history} tbg='Chaxun_bg' />
      <Cutoff hg='49' />
      <Title title='必录信息' />
      <Cutoff hg='70' />
      <Inputs img={pImgs['zhanghao']} placeholder='20字以内数字，字母组成，无特殊符号' getState={setzh} />
      <Cutoff hg='20' />
      <Inputs img={pImgs['mima']} placeholder='请输入8位数登录密码' getState={setmm} Child={<img className={style['mima']} src={pImgs['xianshi']} />} />
      <Cutoff hg='20' />
      <Inputs img={pImgs['mima']} placeholder='登录密码确认' getState={setmmc} Child={<img className={style['mima']} src={pImgs['yincang']} />} type='password' />
      <Cutoff hg='20' />
      <Inputs img={pImgs['shouji']} placeholder='请输入绑定手机' getState={setsj} />
      <Cutoff hg='20' />
      {/* <Inputs img={pImgs['yanzhengma']} placeholder='请输入短信验证码' getState={setyz} Child={<Yzm />} /> */}
      <Cutoff hg='70' />
      <Btus fn={() => { setShow(true) }} text='提交' />
      <Modal
        show={show}
        setShow={setShow}
        title='注册成功'
        box='m'
        btuText='查询公积金'
        onDetermine={() => { history.push('jjxq') }}
      />
    </div>
  )
}
