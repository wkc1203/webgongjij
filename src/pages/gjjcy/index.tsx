
import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import { Navigationt, Inputs, Cutoff, Title, Btus, Center, Modal, Yzm, Load } from '@components/public';
import { History } from 'history';
import { validate, sendMessageToNative } from '@util/index';
import { useListener } from '@hooks/useListener';
import { useAxios } from '@hooks/useAxios';
import { code } from '@api/basis';
const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))


type Gjjcy = {
  history: History
}
let zz = ''
export default ({ history }: Gjjcy) => {
  const [zh, setZh] = useState({ val: 'dutian'||history.location.state.username, pla: '请输入账号' })
  const [mm, setMm] = useState({ val: '', pla: '请输入短信验证码' })
  const [show, setShow] = useState(false)
  const [shows, setShows] = useState(false)
  const [shows1, setShows1] = useState(false)
  const [pla, setPla] = useState('')
  const [on, setOn] = useState(false)
  const [error, setError] = useState('')
  const [obtain, getObtain] = useAxios({
    url: '/obtain',
    method: 'post',
    request: {
      userNmae: zh.val,
      code: mm.val,
    },
    execute: on,
    api3: true
  })
  useEffect(()=>{
    if(obtain.code !=code.init){
      setShow(false)
      
    }
  },[obtain.code])
  return (
    <div className={style['gjjcy']}>
      <Navigationt history={history} title='公积金查询' tbg='Chaxun_bg' second />
      <Cutoff hg='49' />
      <Title title='重庆市住房公积金查询1' />
      <Cutoff hg='70' />
      <Inputs img={pImgs['shouji']} placeholder={zh.pla} getState={setZh} val={zh.val} disabled={false} />
      <Cutoff hg='20' />
      <Inputs img={pImgs['yanzhengma']} placeholder={mm.pla} getState={setMm} />
      <Cutoff hg='70' />
      <Btus fn={() => {
        console.log(zh,mm)
        const yanz = validate([zh, mm], (vals) => {
          
          setPla(vals.pla)
          setShows(true)
        })
        if (yanz) {
          setShow(true)
          setOn(true)
        }
      }} text='提交' />
      <Modal
        title={pla}
        show={shows}
        setShow={setShows}
      />
      <Modal
        title={error}
        show={shows1}
        setShow={setShows1}
        onDetermine={() => {
          history.goBack()
        }}
      />
      <Load show={show} />
    </div>
  )
}
