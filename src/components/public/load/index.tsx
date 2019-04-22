
import React from 'react';
import style from './index.module.scss';
import { createPortal } from 'react-dom';
import ReactLoading from 'react-loading';


const loadRoot: any = document.getElementById('load');
const el: any = document.createElement('div');
loadRoot.appendChild(el)


export type Load = {
  show: boolean,
  setShow?: (...rest: any) => void,
}

export const Load = ({ show, setShow }: Load) => {
  const load = (
    <div className={style['load']}>
      <ReactLoading type={'spin'} color={'rgb(255, 68, 0)'} height={50} width={50} />
    </div>
  )
  return show ?
    createPortal(
      load,
      el,
    ) : null
}
