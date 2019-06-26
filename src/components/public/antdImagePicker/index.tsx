
import React, { useState, useEffect } from 'react';
import style from './index.module.scss';
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import { Center,AntdButton } from '@components/public';
import cs from 'classnames'
export type AntdImagePicker = {
  labeltext?: string,
  ImagePickeronChange?: (...rest: any) => any
}

export const AntdImagePicker = ({  labeltext,ImagePickeronChange}: AntdImagePicker) => {
  const [datalist, onChangeData] = useState()
  console.log(datalist)
  return (
    <div style={{ margin: '15px' }}>
      <WingBlank size="sm">
      <div className={style['labelinputs']}>
          <label className={style['labelinputs-label']}>{labeltext}</label>
      </div>
      <ImagePicker
          files={datalist}
          onChange={v => {
            onChangeData(v)
          }}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={true}
          multiple={true}
        />
      </WingBlank>
    </div>
  )
}
