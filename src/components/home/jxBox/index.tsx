
import React from 'react';
import style from './index.module.scss';

export type JxBox = {
  bg: string,
  title: string,
  num: string | number,
  tips: string[],
  icon: string,
  color: string,
  color2: string,
}

export const JxBox = ({ bg, title, num, tips, icon, color, color2 }: JxBox) => (
  <div className={style['jxBox']}>
    <img className={style['bg']} src={bg} />
    <div className={style['title']} style={{color:color}}>
      {title}
    </div>
    <div className={style['num']} style={{color:color}}>
      {num}
    </div>
    <div className={style['dai']} style={{color:color}}>
      {'最高可贷（元）'}
    </div>
    <div className={style['tip']} style={{backgroundColor: color2}}>
      {tips.map((s, i) => <div className={style['tips']} key={i}>
        <img src={icon} className={style['icon']} />
        <div style={{ color: color }}>{s}</div>
      </div>)}
    </div>
  </div>
)
