import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import { Navigationt, Inputs, Cutoff, Title, Btus, Center, Modal, Load, Check } from '@components/public';
import { History } from 'history';
import { validate, sendMessageToNative } from '@util/index';
import { storage_evt } from '@util/index';
import { useListener } from '@hooks/useListener';
import { code } from '@api/basis';
const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))


type Gjjc = {
  history: History
}

export default ({ history }: Gjjc) => {
  const [zh, setZh] = useState({ val: '', pla: '请输入身份证号／手机号／用户名' })
  const [mm, setMm] = useState({ val: '', pla: '请输入密码' })
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [shows, setShows] = useState(false)
  const [pla, setPla] = useState('')
  const [check, setCheck] = useState()
  useListener('storage_evt', (storage)=>{
    if (storage) {
      const data = storage.detail
      if (data.code === code.error) {
        setShow1(true)
        setShow(false)
      }
    }
  })
  return (
    <div className={style['gjjc']}>
      <Navigationt history={history} title='公积金查询' tbg='Chaxun_bg' second />
      <div className = { style['tip'] }>
        { '请注册后再查询，点击查看帮助' }
      </div>
      <Cutoff hg='49' />
      <Title title='重庆市住房公积金查询' />
      <Cutoff hg='70' />
      <Inputs img={pImgs['zhanghao']} placeholder={zh.pla} getState={setZh} />
      <Cutoff hg='20' />
      <Inputs img={pImgs['mima']} placeholder={mm.pla} getState={setMm} />
      <Cutoff hg='20' />
      <Check agree='勾选即代表您同意' title='《解析住房网签数据协议》' setState = { setCheck } />
      <Cutoff hg='70' />
      <Btus fn={() => {
        const yanz = validate([zh, mm], (vals) => {
          setPla(vals.pla)
          setShow(true)
        })
        if (yanz) {
          storage_evt({ zh: zh.val, mm: mm.val })
          setShows(true)
          setTimeout(() => {
            setShows(false)
            history.push({
              pathname: 'gjjcy',
              state: {
                username: zh.val
              }
            })
          }, 3000)
        }
      }} text='登录' />
      <Cutoff hg='20' />
      <Center>
        <div className={style['zc']} >
          还没有账号，
          <span onClick={() => {
            sendMessageToNative({ type: 'login' })
          }} style={{ color: '#FF4400' }}>立即注册</span>
        </div>
      </Center>
      <Modal
        title={pla}
        show={show}
        setShow={setShow}
      />
      <Modal
        title={'系统错误请重试'}
        show={show1}
        setShow={setShow1}
      />
      <Load show={shows} />
    </div>
  )
}
