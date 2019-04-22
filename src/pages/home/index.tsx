import React, { useEffect, useState, useCallback, Fragment } from 'react';
import style from './index.module.scss';
import { Swipers, Icons, JxBox, SliderEntry } from '@components/home';
import { Tips, Center, Cutoff, ZxItem } from '@components/public';
import { useAxios } from '@hooks/useAxios';
import { code } from '@api/basis';
import { History } from 'history';
import { setGlobalData, orLogin, getGlobalData } from '@util/index';

const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))
const Ckgd = ({ history }: any) => {
  return (
    <div onClick={() => history.push('find')} className={style['ckgd']}>
      {'查看更多'}
    </div>
  )
}

const colors = ['#404E73', '#945B40', '#407B65']
const colors2 = ['rgb(179,193,231)', 'rgb(233,203,191)', 'rgb(184,233,214)']

type Home = {
  history: History
}
const Home = ({ history }: Home) => {
  const [search] = useAxios({
    url: '/search/result',
    method: 'get'
  })
  const [hotRes] = useAxios({
    url: '/consultation/hotNewsPage',
    method: 'get',
    request: {
      classifiedId: '',
      size: 10,
      page: 1
    },
  })
  const [product] = useAxios({
    url: '/product/pro/queryChoicenessProduct',
    method: 'get',
    request: {
      isRecommend: '0',
      size: 10,
      page: 1
    }
  })
  //const [token, setToken] = useState('')
  const [iconsData]: [Icons[], any] = useState([{
    src: 'zhufangchaxun',
    title: '住房查询',
    fn: () => {
      orLogin() && history.push('wqcx')
    }
  }, {
    src: 'chagongjijin',
    title: '查公积金',
    fn: () => {
      orLogin() && history.push('gjjc')
    }
  }, {
    src: 'xinuongdaikuan',
    title: '信用贷款',
    fn: () => {
      history.push('loan')
    }
  }, {
    src: 'xinyongka',
    title: '信用卡',
    fn: () => {
      history.push('xyk')
    }
  }])
  useEffect(() => {
    const tokens = history.location.search.slice(1).split('=')
    if (tokens.length === 2 && tokens[0] === 'token') {
      //setToken(tokens[1])
      setGlobalData('token', tokens[1])
      console.log(getGlobalData('token'))
    }
  }, [])
  return (
    <div className={style['page']} >
      <img className={style['tbg']} src={pImgs['shouye_bg']} />
      <div className={style['title']}>
        {'壹米金融'}
      </div>
      <Swipers>
        <SliderEntry fn={() => {
          orLogin() && history.push('gjjc')
        }} title='重庆公积金快速查询' num={search.code === code.success ? search.data.GJJ : '0'} />
        <SliderEntry fn={() => {
          orLogin() && history.push('wqcx')
        }} title='重庆网签快速查询' num={search.code === code.success ? search.data.ZFXX : '0'} />
      </Swipers>
      <div className={style['icons']}>
        {
          iconsData.map(({ src, title, fn }, key) =>
            <Icons fn={fn} key={key} src={pImgs[src]} title={title} />
          )
        }
      </div>
      {
        product.code === code.success && product.data.records.length > 0 &&
        <Fragment>
          <Tips title='精选贷款' />
          <Cutoff hg='20' />
        </Fragment>
      }
      <Center>
        {
          product.code === code.success &&
          product.data.records.map(({ name, money, label }, i) =>
            <JxBox
              key={i}
              bg={pImgs[i % 3 + 'bg']}
              title={name}
              num={money}
              tips={label ? label.split(',') : ['111', '222', '333']}
              icon={pImgs[i % 3 + 'gou']}
              color={colors[i % 3]}
              color2={colors2[i % 3]}
            />
          )
        }
      </Center>
      {
        hotRes.code === code.success && hotRes.data.records.length > 0 &&
        <Fragment>
          <Cutoff hg='40' />
          <Tips title='热门资讯' />
        </Fragment>
      }
      <Center>
        {
          hotRes.code === code.success &&
          hotRes.data.records.map(({ content, surfacePlotUrl, title, classifiedName }, i) =>
            <ZxItem
              fn={() => {
                history.push({
                  pathname: 'zxxq',
                  state: {
                    content: content,
                    title: title,
                    data: {
                      name: classifiedName
                    }
                  }
                })
              }}
              key={i}
              content={title}
              tip={classifiedName}
              img={surfacePlotUrl}
            />)
        }
      </Center>
      <Ckgd history={history} />
    </div>
  )
}

export default Home

const myWindow = window as any
myWindow.aa = () => {
  console.log('object')
}