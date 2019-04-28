
import React, { useState } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt, Cutoff, Center, Inputs, Btus, Title, Modal, Yzm, Check } from '@components/public';
import cs from 'classnames';

const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))


type Gjjz = {
  history: History
}

export default ({ history }: Gjjz) => {
  const [xm, setXm] = useState('')
  const [sfz, setSfz] = useState('')
  const [yzm, setYzm] = useState('')
  const [show, setShow] = useState(false)
  const [gou, setGou] = useState(false)
  const [check, setCheck] = useState(false)
  return (
    <div className={style['gjjz']}>
      <Navigationt title='公积金注册' history={history} tbg='Chaxun_bg' />
      <Cutoff hg='49' />
      <Title title='身份信息' />
      <Cutoff hg='70' />
      <Inputs img={pImgs['zhanghao']} placeholder='请输入姓名' getState={setXm} />
      <Cutoff hg='20' />
      <Inputs img={pImgs['shenfenzheng']} placeholder='请输入身份证号' getState={setSfz} />
      <Cutoff hg='20' />
      {/* <Inputs img={pImgs['yanzhengma']} placeholder='请输入验证码' getState={setYzm} Child={<Yzm/>} /> */}
      <Cutoff hg='20' />
      <Check title={ '《网上业务大厅服务协议》' } setState = { setCheck } />
      <Cutoff hg='70' />
      <Btus text='登录' fn={()=>{setShow(true)}}/>
      <Cutoff hg='20' />
      <Center>
        <div onClick={()=>{history.push('wsxx')}} className = { style['qzc'] } >
          <div className = { style['t1'] }>
            { '已注册，' }
          </div>
          <div className = { style['t2'] }>
            { '去登陆' }
          </div>
        </div>
      </Center>
      <Modal
        show={show}
        setShow={setShow}
        title='您的账号已注册，请登录'
        textDetermine='登录'
      />
    </div>
  )
}
