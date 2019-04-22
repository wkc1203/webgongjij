
import React from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt } from '@components/public';

type UnLogged = {
  history: History
}

export default ({history}:UnLogged) => {
  return(
    <div className={style['unLogged']}>
      <Navigationt title='未登陆' history = { history }/>
    </div>
  )
}
