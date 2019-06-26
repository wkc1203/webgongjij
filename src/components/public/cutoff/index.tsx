
import React from 'react';
import style from './index.module.scss';

export type Cutoff = {
  hg:string|number
  colorValue?:string
}

export const Cutoff = ({ hg,colorValue='transparent' }: Cutoff) => (
  <div className={style['cutoff']} style={{height:hg+'px',backgroundColor:colorValue,opacity:0.5}}>
    
  </div>
)
