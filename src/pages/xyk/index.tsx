
import React from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt, Center, Cutoff, Tips, Load, Error, Modal } from '@components/public';
import { useAxios } from '@hooks/useAxios';
import { code } from '@api/basis';
import { getGlobalData, orLogin } from '@util/index';

const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))

type XykItem = {
  name: string,
  imgUrl: string,
  content: string
}

const XykItem = ({ name, imgUrl, content }: XykItem) => (
  <div className={style['xykItem']}>
    <img className={style['img']} src={imgUrl} />
    <div className={style['right']}>
      <div className={style['title']}>
        {name}
      </div>
      <div className={style['tips']}>
        {content&&content.split(',').join('|')}
      </div>
      <div className={style['btn']}>
        {'我要办理'}
      </div>
    </div>
  </div>
)

type Xyk = {
  history: History
}

export default ({ history }: Xyk) => {
  const [creditCard] = useAxios({
    url: '/creditCard/cre/queryChoicenessCreditCard',
    method: 'get',
    token: true
  })
  return (
    <div className={style['xyk']}>
      <Navigationt title='信用卡' history={history} second />
      <Cutoff hg='30' />
      <Center>
        <img className={style['tietu']} src={pImgs['xinyongka']} />
      </Center>
      <Cutoff hg='50' />
      <Tips title='信用卡申请' />
      <Center>
        {
          creditCard.code === code.success &&
          creditCard.data.records.map(({ name, imgUrl, content }, i) => <XykItem key={i} name={name} imgUrl={imgUrl} content={content} />)
        }
      </Center>
      <Load show={creditCard.code === code.init} />

    </div>
  )
}
