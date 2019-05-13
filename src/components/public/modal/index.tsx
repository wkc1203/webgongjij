import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import { createPortal } from 'react-dom';
import { Btus, Cutoff, Center } from '@components/public';
import { xieyi } from './xieyi';
const modalRoot: any = document.getElementById('modal');
const el: any = document.createElement('div');
modalRoot.appendChild(el)
type fn = (...rest: any) => any

const Titles = ({ titles }: any) => (
  <div className={style['titles']}>
    {titles}
  </div>
)

export type Modal = {
  title?: string,
  titles?: string,
  textDetermine?: string,
  textCancel?: string,
  onDetermine?: fn,
  onCancel?: fn,
  show: boolean,
  setShow: fn,
  box?: 't' | 'm' | 'y' | 'g',
  btuText?: string,
  titleFn?: (...rest: any) => any,
  fnzhuce?: (...rest: any) => any,
  fnmima?: (...rest: any) => any,
}

export const Modal = ({ show, setShow, title = '', onDetermine, onCancel, textDetermine = '确定', textCancel = '取消', box = 'm', titles, btuText = '确定', titleFn, fnzhuce, fnmima }: Modal) => {
  let child = <div />
  switch (box) {
    case 'm':
      child = (
        <div className={style['modal']}>
          <div className={style['box']} >
            <div className={style['top']}>
              {
                titles && <Titles titles={titles} />
              }
              <div className={style['']} onClick={titleFn} >
                {title}
              </div>
            </div>
            <div className={style['bot']}>
              <div onClick={() => {
                onCancel && onCancel()
                setShow(false)
              }} className={style['left']}>
                {textCancel}
              </div>
              <div onClick={() => {
                onDetermine && onDetermine()
                setShow(false)
              }} className={style['right']}>
                {textDetermine}
              </div>
            </div>
          </div>
        </div>
      )
      break;
    case 't':
      child = (
        <div className={style['modal']}>
          <div className={style['box1']}>
            <img onClick={() => {
              onCancel && onCancel()
              setShow(false)
            }} className={style['guanbi']} src={require('./img/guanbi.png')} />
            <img className={style['zhuche']} src={require('./img/zhuchechenggong.png')} />
            <div className={style['title']}>
              {title}
            </div>
            <Btus fn={onDetermine} text={btuText} />
          </div>
        </div>
      )
      break;
    case 'y':
      child = (
        <div className={style['modal']}>
          <div className={style['box2']}>
            <div className={style['tbox']}>
              <Cutoff hg='26' />
              <div className={style['title']}>
                {'未注册或者未升级账号？'}
              </div>
              <Cutoff hg='12' />
              <div className={style['tip']}>
                {'重庆市住房公积金与2018年8月改版升级，若您未曾注册最新版本公积金账号，请先前往电脑官网进行注册'}
              </div>
              <Cutoff hg='14' />
              <Center>
                <div onClick={fnzhuce} className={style['btncx']}>
                  {'去注册'}
                </div>
              </Center>
              <Cutoff hg='42' />
                <div className={style['title']}>
                  {'忘记密码？'}
                </div>
              <Cutoff hg='12' />
              <div className={style['tip']}>
                {'如果您忘记了密码，请前往公积金官网重新设置密码'}
              </div>
              <Cutoff hg='14' />
              <Center>
                <div onClick={fnmima} className={style['btncx']}>
                  {'去找回密码'}
                </div>
              </Center>
            </div>
            <Center>
              <div onClick={()=>{
                setShow(false)
              }} className = { style['bbox'] }>
                <img className = { style['img'] } src={require('./img/cha.png')} />
              </div>
            </Center>
          </div>
        </div>
      )
      break;
    case 'g':
      child=(
        <div className={style['modal']}>
          <div className={style['box3']}>
            <div className={style['tbox']} >
              <div className = { style['title'] }>
                { '壹米金融用户协议' }
              </div>
              <div className = { style['cbox'] } dangerouslySetInnerHTML={{ __html: xieyi }}>
                {  }
              </div>
            </div>
            <Center>
              <div onClick={()=>{
                setShow(false)
              }} className = { style['bbox'] }>
                关闭
              </div>
            </Center>
          </div>
        </div>
      )
      break;
    default:
      break;
  }
  return show ?
    createPortal(
      child,
      el,
    ) :
    null
}