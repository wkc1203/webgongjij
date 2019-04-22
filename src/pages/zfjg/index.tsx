
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt, Cutoff, Center, Titem, Btus, Modal, Load } from '@components/public';
import { xieyi } from './xieyi';
import { useAxios } from '@hooks/useAxios';
import { code } from '@api/basis';
import { getGlobalData } from '@util/index';
const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))

type Zfjg = {
  history: History
}

export default ({ history }: Zfjg) => {
  console.log(history)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  const [xy, setXy] = useState(false)
  const [on, setOn] = useState(false)
  const {
    serialnumber,
    name,
    businessnumber,
    idcard,
    address
  } = history.location.state || {
    serialnumber: '',
    name: '',
    businessnumber: '',
    idcard: '',
    address: ''
  }
  const [netSign, getNetSign] = useAxios({
    url: '/netSign/save',
    method: 'post',
    request: {
      name: name,
      address: address,
      serialnumber: serialnumber,
      //signtime:signtime,
      businessnumber: businessnumber,
      //projectname:projectname,
      idcard: idcard,
      //buildingarea:buildingarea,
    },
    execute: on
  })
  useEffect(() => {
    if (netSign.code === code.success) {
      setShow3(true)
    } else if (netSign.code === code.error) {
      setShow4(true)
    }
  }, [netSign.code])
  return (
    <div className={style['zfjg']}>
      <Navigationt title='查询结果' history={history} tbg='Gjjchaxunjieguo_bg' />
      <Cutoff hg='20' />
      <Center>
        <div className={style['box']}>
          <div className={style['top']}>
            <img className={style['']} src={pImgs['zhufangchaxin']} />
            <div className={style['title']}>
              住房查询结果
            </div>
            <img className={style['']} src={pImgs['zhufangchaxin']} />
          </div>
          <Titem title='合同编号' content={serialnumber} />
          <Titem title='房屋所属人' content={name} />
          <Titem title='业务编号' content={businessnumber} />
          <Titem title='证件号码' content={idcard} />
          <Titem title='房屋地址' content={address} />
          <Cutoff hg='115' />
          <Btus text='保存房屋信息' fn={() => setShow1(true)} />
          <Cutoff hg='40' />
        </div>
      </Center>
      <Modal
        show={show1}
        setShow={setShow1}
        title='查看协议内容'
        titles='授权壹米金融保存您的房屋信息'
        textDetermine='同意并授权'
        onCancel={() => setShow2(true)}
        onDetermine={() => {
          setOn(true)
          getNetSign()
        }}
        titleFn={() => setXy(true)}
      />
      <Modal
        show={show2}
        setShow={setShow2}
        title='温馨提示'
        titles='点击取消将无法进行贷款申请'
        textDetermine='授权保存'
        textCancel='知道了'
        onDetermine={() => {
          setOn(true)
          getNetSign()
        }}
      />
      <Modal
        show={show3}
        setShow={setShow3}
        title='保存成功'
        btuText='确定'
        box={true}
        onDetermine={() => {
          setShow3(false)
          history.replace('home?token='+getGlobalData('token'))
        }}
      />
      <Modal
        title='保存失败'
        show={show4}
        setShow={setShow4}
      />
      <Load show={on && netSign.code === code.init} />
      <div className={style['boxt']} style={{ display: xy ? 'block' : 'none' }}>
        <div className={style['call']} onClick={() => { setXy(false) }}>
          {'关闭'}
        </div>
        <div className={style['xieyi']} dangerouslySetInnerHTML={{ __html: xieyi }} />
      </div>
    </div>
  )
}