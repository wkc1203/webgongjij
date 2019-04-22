
import React from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt, Cutoff, Center, Tips } from '@components/public';

const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))

type Cxjg = {
  history: History
}

export default ({history}:Cxjg) => {
  const {
    username,
    phone,
    idcard,
    company,
    opentime,
    paybasics,
    companypay,
    personagepay,
    companypayratio,
    personagepayratio,
    lasttime,
    personshengyu,
  } = history.location.state.object
  return(
    <div className={style['cxjg']}>
      <img className = { style['tbg'] } src = { pImgs['gjjchaxunjieguo_bg'] } />
      <Navigationt title='查询结果' history = { history } tbg='Gjjchaxunjieguo_bg' />
      <Cutoff hg='20' />
      <Center>
        <div className = { style['box'] }>
          <div className = { style['top'] }>
            <img className = { style['t1'] } src = { pImgs['geren'] } >
              {  }
            </img>
            <div className = { style['t2'] }>
              { username }
            </div>
            <div className = { style['t3'] }>
              { phone }
            </div>
          </div>
          <div className = { style['bot'] }>
            <div className = { style['left'] }>
              <div className = { style['t1'] }>
                { personshengyu }
              </div>
              <div className = { style['t2'] }>
                { '账户余额（元）' }
              </div>
            </div>
            <div className = { style['right'] }>
              { '查看账户信息' }
            </div>
          </div>
        </div>
      </Center>
      <Cutoff hg='20' />
      <div className = { style['t'] }>
        <div className = { style['boxs'] }>
          <img className = { style['t0'] } src = { pImgs['jiaocun'] } />
          <div className = { style['t1'] }>
            { '我的缴存' }
          </div>
          <div className = { style['t2'] }>
            { personagepay }
          </div>
          <div className = { style['t3'] }>
            { '最近缴存' + lasttime }
          </div>
        </div>
        <div className = { style['boxs'] }>
        <img className = { style['t0'] } src = { pImgs['tiqu'] } />
          <div className = { style['t1'] }>
            { '提取' }
          </div>
          <div className = { style['t2'] }>
            { '暂无' }
          </div>
          <div className = { style['t3'] }>
            { '最近提取' }
          </div>
        </div>
      </div>
      <Cutoff hg='50' />
      {/* <Tips title='使用公积金贷款' />
      <Cutoff hg='20' />
      <Center>
        <img className = { style['kd'] } src = { pImgs['gjjdaikuan'] } />
      </Center> */}
    </div>
  )
}
