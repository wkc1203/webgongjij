import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import { createPortal } from 'react-dom';
import { Btus } from '@components/public';

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
  title: string,
  titles?: string,
  textDetermine?: string,
  textCancel?: string,
  onDetermine?: fn,
  onCancel?: fn,
  show: boolean,
  setShow: fn,
  box?: boolean,
  btuText?: string,
  titleFn?: (...rest: any) => any
}

export const Modal = ({ show, setShow, title, onDetermine, onCancel, textDetermine = '确定', textCancel = '取消', box = false, titles, btuText = '确定', titleFn }: Modal) => {
  useEffect(() => {
    //console.log(show)
  }, [])
  const m = (
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
  const t = (
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
  return show ?
    createPortal(
      box ? t : m,
      el,
    ) :
    null
}