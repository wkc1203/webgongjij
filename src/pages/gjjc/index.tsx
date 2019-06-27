import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import { Navigationt, Inputs, Cutoff, Title, Btus, Center, Modal, Load, Check, Clipboard } from '@components/public';
import { History } from 'history';
import { validate, sendMessageToNative } from '@util/index';
import { routing } from '@util/index';
import { useListener } from '@hooks/useListener';
import { code } from '@api/basis';
import { useAxios } from '@hooks/useAxios';
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
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [pla, setPla] = useState('')
  const [, setCheck] = useState()
  const [on, toggle] = useState(false)
  const [wangqian, getwangqian] = useAxios({
    url: '/signIn',
    method: 'post',
    request: {
      userNmae: zh.val,
      password: mm.val,
    },
    execute: on,
    api3: false
  })
  // useEffect(() => {
  //   if (wangqian.code != code.init) {
  //     setShow2(false)
  //     if (wangqian.success) {
  //       history.push({
  //         pathname: 'gjjcy',
  //         state: {
  //           username: zh.val
  //         }
  //       })
  //       routing('gjjcy')
  //     } else {
  //       setPla(wangqian.msg || '系统错误')
  //       setShow(true)
  //     }
  //   }
  // }, [wangqian.success])
  return (
    <div className={style['gjjc']}>
      <Navigationt history={history} title='公积金查询' tbg='Chaxun_bg' second />
      <div onClick={() => {
        setShow3(true)
      }} className={style['tip']}>
        {'请注册后再查询，点击查看帮助'}
      </div>
      <Cutoff hg='49' />
      <Title title='重庆市住房公积金查询' />
      <Cutoff hg='70' />
      <Inputs img={pImgs['zhanghao']} placeholder={zh.pla} getState={setZh} />
      <Cutoff hg='20' />
      <Inputs img={pImgs['mima']} placeholder={mm.pla} getState={setMm} />
      <Cutoff hg='20' />
      <Check agree='勾选即代表您同意' title='《解析住房网签数据协议》' setState={setCheck} />
      <Cutoff hg='70' />
      <Btus fn={() => {
        console.log(zh)
        const yanz = validate([zh, mm], (vals) => {
          console.log(vals)
          setPla(vals.pla)
          setShow(true)
        })
        if (yanz) {
          toggle(true)
          setShow2(true)
          getwangqian()
        }
        getwangqian()
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
      <Modal
        show={show3}
        setShow={setShow3}
        box='y'
        fnzhuce={() => {
          // window.clipboardData.setData('text','2345678')
          setPla('注册链接已复制到剪贴板')
          setShow(true)
        }}
        fnmima={() => {
          setPla('找回密码链接已复制到剪贴板')
          setShow(true)
        }}
      />
      <Load show={show2} />
    </div>
  )
}
