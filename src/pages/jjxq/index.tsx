
import React from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt, Cutoff, Center, Ttitle, Titem, Crossbar, Btus } from '@components/public';

const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))

type Jjxq = {
  history: History
}

export default ({history}:Jjxq) => {
  return(
    <div className={style['jjxq']}>
      <Navigationt title='账户信息' history = { history } tbg='Gjjchaxunjieguo_bg' />
      <Cutoff hg='20' />
      <Center>
        <div className = { style['bj'] }>
          <div className = { style['bjs'] }>
            <div className = { style['top'] }>
              <img className = { style['img'] } src = { pImgs['yue'] } />
              { '账户余额（元）' }
            </div>
            <div className = { style['bot'] }>
              { '8981,17' }
            </div>
          </div>
          <div className = { style['bt'] }>
            {  }
          </div>
          <div className = { style['bjs'] }>
            <div className = { style['top'] }>
              <img className = { style['img'] } src = { pImgs['jiaocun'] } />
              { '月缴存额（元）' }
            </div>
            <div className = { style['bot'] }>
              { '416.12' }
            </div>
          </div>
        </div>
      </Center>
      <Cutoff hg='30' />
      <Ttitle title='基本信息' />
      <Titem title='身份证号' content='5002************8x' />
      <Titem title='手机号码' content='150****5980' />
      <Titem title='单位名称' content='等额本金' />
      <Titem title='合同期限' content='重庆一二三科技有限公司' />
      <Titem title='开户时间' content='2018年05月11日' />
      <Crossbar/>
      <Ttitle title='缴存信息' />
      <Titem title='缴存基数' content='3,429.00元' />
      <Titem title='单位存缴额' content='240.00元' />
      <Titem title='个人存缴额' content='240.00元' />
      <Titem title='单位存缴比例' content='7.00%' />
      <Titem title='个人存缴比例' content='7.00%' />
      <Titem title='缴至月份' content='2018年03月' />
    </div>
  )
}
