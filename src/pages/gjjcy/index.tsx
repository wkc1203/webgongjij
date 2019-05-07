
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
  useListener('storage_evt', (storage) => {
    console.log(storage)
    if (storage) {
      const data = storage.detail
      if (data.code === code.success) {
        history.push({
          pathname: 'cxjg',
          state: data.object
        })
      } else if (data.code === code.error) {
        setError(data.msg || '系统错误请重试')
        setShows1(true)
      }
      setShow(false)
    }
  })
  const [zh, setZh] = useState({ val: '', pla: '请输入绑定手机' })
  const [z, setz] = useState('')
  const [mm, setMm] = useState({ val: '', pla: '请输入短信验证码' })
  const [show, setShow] = useState(true)
  const [shows, setShows] = useState(false)
  const [shows1, setShows1] = useState(false)
  const [pla, setPla] = useState('')
  const [on, setOn] = useState(false)
  const [error, setError] = useState('')
  const [phone] = useAxios({
    url: '/bindPhone',
    method: 'post',
    request: {
      username: history.location.state.username
    },
    apiSwitch: true,
    form: true,
  })
  const [codeLogin, getcodeLogin] = useAxios({
    url: '/codeLogin',
    method: 'post',
    request: {
      username: history.location.state.username,
      yzm: mm.val
    },
    apiSwitch: true,
    form: true,
    execute: on
  })
  useEffect(() => {
    if (phone.code === code.success) {
      setz(phone.object.phone)
      zz = phone.object.phone
      setShow(false)
    } else if (phone.code === code.error) {
      setError(phone.msg || '系统错误请重试')
      setShows1(true)
    }
  }, [phone.code])
  return (
    <div className={style['gjjcy']}>
      <Navigationt history={history} title='公积金查询' tbg='Chaxun_bg' second />
      <Cutoff hg='49' />
      <Title title='重庆市住房公积金查询' />
      <Cutoff hg='70' />
      <Inputs img={pImgs['shouji']} placeholder={zh.pla} getState={setZh} val={z} disabled={true} />
      <Cutoff hg='20' />
      <Inputs img={pImgs['yanzhengma']} placeholder={mm.pla} getState={setMm} Child={<Yzm username={z} disabled={phone.code !== code.success} />} />
      <Cutoff hg='70' />
      <Btus fn={() => {
        const yanz = validate([zh, mm], (vals) => {
          setPla(vals.pla)
          setShows(true)
        })
        if (yanz) {
          setShow(true)
          setOn(true)
          getcodeLogin()
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
