
import React from 'react';
import style from './index.module.scss';

export type Cutoff = {
  hg:string|number
}

export const Cutoff = ({ hg }: Cutoff) => (
  <div className={style['cutoff']} style={{height:hg+'px'}}>
    
  </div>
)
