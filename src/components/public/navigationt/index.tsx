
import React from 'react';
import style from './index.module.scss';
import { History } from 'history';
import cs from 'classnames'
import { sendMessageToNative } from '@util/sendMessageToNative';

const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))

export type Navigationt = {
  title: string,
  history: History,
  top?: number | string,
  tbg?: undefined | 'Chaxun_bg' | 'Gjjchaxunjieguo_bg',
  lev?: boolean,
  second?: boolean
}

const Chaxun_bg = () => (
  <img className={style['chaxun_bg']} src={pImgs['chaxun_bg']} />
)

const Gjjchaxunjieguo_bg = () => (
  <img className={style['gjjchaxunjieguo_bg']} src={pImgs['gjjchaxunjieguo_bg']} />
)

const fhBtn = {
  Gjjchaxunjieguo_bg: 'fanhui_h',
  Chaxun_bg: 'fanhui'
}

const backImg = {
  Chaxun_bg: <Chaxun_bg />,
  Gjjchaxunjieguo_bg: <Gjjchaxunjieguo_bg />
}

export const Navigationt = ({ title, history, top = 20, tbg = undefined, lev = false, second = false }: Navigationt) => {
  const back = () => {
    history.goBack()
    second && sendMessageToNative({ type: 'pop' });
    //window.routing.pop()
  }

  return (
    <div className={cs([style['navigationt'], tbg && style[tbg]])} style={{ marginTop: top + 'px' }}>
      <div className={style['left']} >
        <img onClick={back} src={pImgs[tbg ? fhBtn[tbg] : 'fanhui']} className={style['fanhui']} style={{ display: lev ? 'none' : 'block' }} />
      </div>
      <div className={style['center']}>
        {title}
      </div>
      <div className={style['right']} />
      {tbg && backImg[tbg]}
    </div>
  )
}