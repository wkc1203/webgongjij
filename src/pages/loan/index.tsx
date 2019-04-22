
import React from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt, Cutoff, Center, Tips, Load, Ckgd } from '@components/public';
import { useAxios } from '@hooks/useAxios';
import { code } from '@api/basis';
import { useCounter, useList } from 'react-use';

const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))

const LoData = [{
  img: 'dkcwdaikuan',
  title: '公积金贷款',
  biqa: ['申请门槛低', '通过率高达70%'],
  text: '最长36期，最高额度 10万，最低日利率0.024%'
}, {
  img: 'dkgjjdaikuan',
  title: '车位贷款',
  biqa: ['银行放款', '快速办理'],
  text: '最长36期，最高额度 20万，最低日利率0.039%'
}, {
  img: 'dkgjjdaikuan',
  title: '富金贷',
  biqa: ['超大额度', '快速到账'],
  text: '最长36期，最高额度 20万，最低日利率0.05%'
}, {
  img: 'dkgjjdaikuan',
  title: '有钱花',
  biqa: ['周期超长', '随借随还'],
  text: '最长48期，最高额度 20万，最低日利率0.035%'
},]

const LoItem = ({ img, title, biqa, text }: any) => (
  <div className={style['loItem']}>
    <img className={style['img']} src={pImgs[img]} />
    <div className={style['right']}>
      <div className={style['top']}>
        <div className={style['title']}>
          {title}
        </div>
        {
          biqa.map((v: any, i: any) => <div key={i} className={style['biqa']}>
            {v}
          </div>)
        }
      </div>
      <div className={style['text']}>
        {text}
      </div>
    </div>
  </div>
)

type Loan = {
  history: History
}

export default ({ history }: Loan) => {
  const [page, { inc: incPage }] = useCounter(1)
  const [product, getProduct] = useAxios({
    url: '/product/pro/queryChoicenessProduct',
    method: 'get',
    request: {
      size: 10,
      page: page
    }
  })
  return (
    <div className={style['loan']}>
      <Navigationt title='贷款' history={history} lev />
      <Cutoff hg='30' />
      <Center>
        <img className={style['tietu']} src={pImgs['xinyongdaikuan']} />
      </Center>
      <Cutoff hg='50' />
      <Tips title='信用贷款' />
      <Cutoff hg='10' />
      <Center>
        {
          product.code === code.success && product.data.records.map(({ icoUrl, label, content, name }, i) => <LoItem key={i} img={icoUrl} title={name} biqa={label ? label.split(',') : []} text={content} />)
        }
        <Ckgd
          fn={() => {
            incPage()
            getProduct()
          }}
          display={() => {
            return product.code === code.success &&
              parseInt(product.data.total) > page * 10
          }}
        />
      </Center>
      <Load show={product.code === code.init} />
    </div>
  )
}