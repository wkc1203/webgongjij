
import React from 'react';
import style from './index.module.scss';

export type SliderEntry = {
  title: string,
  num: string,
  fn?: (...rest: any) => any
}

export const SliderEntry = ({ title, num = '0', fn }: SliderEntry) => {
  return (
    <div className={style['sliderEntry']}>
      <div className={style['title']}>
        {title}
      </div>
      <div className={style['tips']}>
        {num + '人查询成功'}
      </div>
      <div onClick={fn} className={style['btncx']}>
        {'开始查询'}
      </div>
    </div>
  );
}
