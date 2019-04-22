
import React from 'react';
import style from './index.module.scss';

export type ZxItem = {
  content: string,
  tip: string,
  //num: string | number,
  img: string,
  fn?: (...rest: any) => void
}

export const ZxItem = ({ content, tip, img, fn }: ZxItem) => (
  <div onClick={fn} className={style['zxItem']}>
    <div className={style['left']}>
      <div className={style['content']}>
        {content}
      </div>
      <div className={style['bot']}>
        <div className={style['tip']}>
          {tip}
        </div>
        {/* <div className={style['num']}>
          {num + '阅读'}
        </div> */}
      </div>
    </div>
    <img className={style['img']} src={img} />
  </div>
)
