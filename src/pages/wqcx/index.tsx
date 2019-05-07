import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt, Cutoff, Title, Inputs, Yzm, Btus, Modal, Load } from '@components/public';
import { useAxios } from '@hooks/useAxios';
import { validate, routing } from '@util/index';
import { code } from '@api/basis';
import {useWindowScroll} from 'react-use';
const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))

type Wqcx = {
  history: History
}

export default ({ history }: Wqcx) => {
  const [ht, setHt] = useState({ val: '', pla: '请输入合同编号' })
  const [xm, setXm] = useState({ val: '', pla: '请输入买方姓名' })
  const [hm, setHm] = useState({ val: '', pla: '请输入证件号码' })
  const [on, toggle] = useState(false)
  const [show, setShow] = useState(false)
  const [pla, setPla] = useState('')
  const [wangqian, getwangqian] = useAxios({
    url: '/wangqiangetdata',
    method: 'post',
    request: {
      contract: ht.val,
      name: xm.val,
      idCardNo: hm.val,
    },
    execute: on,
    apiSwitch: true,
    form: true
  })
  useEffect(() => {
    if (wangqian.code === code.success) {
      history.push({
        pathname: 'zfjg',
        state: wangqian.object
      })
      routing('zfjg')
    } else if (wangqian.code === code.error) {
      setPla(wangqian.msg)
      setShow(true)
    }
  }, [wangqian.code])
  const [a,seta] = useState('11')
  useEffect(()=>{
    window.onresize = () =>{
      seta('22')
    }
  },[])
  return (
    <div className={style['wqcx']}>
      <Navigationt title='网签查询' history={history} tbg='Chaxun_bg' second />
      <Cutoff hg='49' />
      <Title title='重庆市住房信息查询' />
      <Cutoff hg='70' />
      <Inputs img={pImgs['ht']} placeholder={ht.pla} getState={setHt} />
      <Cutoff hg='20' />
      <Inputs img={pImgs['zhanghao']} placeholder={xm.pla} getState={setXm} />
      <Cutoff hg='20' />
      <Inputs img={pImgs['shenfenzheng']} placeholder={hm.pla} getState={setHm} />
      {/* <Cutoff hg='20' />
      <Inputs img={pImgs['yanzhengma']} placeholder='请输入验证码' getState={setYz} Child={<Yzm/>} /> */}
      <Cutoff hg='70' />
      <Btus text='提交' fn={() => {
        const yanz = validate([ht, xm, hm], (vals) => {
          setPla(vals.pla)
          setShow(true)
        })
        if (yanz) {
          getwangqian()
          toggle(true)
        }
      }} />
      <Modal
        title={pla||'系统错误'}
        show={show}
        setShow={setShow}
      />
      <Load
        show={on && wangqian.code === code.init}
      />
    </div>
  )
}
