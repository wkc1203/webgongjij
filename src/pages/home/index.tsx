import React, { useEffect, useState, useRef, Fragment } from 'react';
import style from './index.module.scss';
import { Swipers, Icons, JxBox, SliderEntry } from '@components/home';
import { Tips, Center, Cutoff, ZxItem } from '@components/public';
import { useAxios } from '@hooks/useAxios';
import { code } from '@api/basis';
import { History } from 'history';
import { setGlobalData, orLogin, getGlobalData, sendMessageToNative, routing, globalData } from '@util/index';
import { fromEvent } from 'rxjs';
import { pluck, startWith, throttleTime, tap } from 'rxjs/operators';
const requireContext = require.context("./img", true, /^\.\/.*\.png$/);
const pImgs: any = {}
requireContext.keys().forEach((key: any) => pImgs[key.slice(2, -4)] = requireContext(key))
const Ckgd = ({ history }: any) => {
  return (
    <div onClick={() => {
      sendMessageToNative({ type: 'jumpFind' })
      //routing('find')
    }} className={style['ckgd']}>
      {'查看更多'}
    </div>
  )
}

const colors = ['#404E73', '#945B40', '#407B75']
const colors2 = ['rgb(179,193,231)', 'rgb(233,203,191)', 'rgb(184,233,214)']
const refreshMsg = {
  0: '下拉刷新',
  1: '松开刷新数据',
  2: '数据刷新中'
}
type Home = {
  history: History
}
const Home = ({ history }: Home) => {
  const [search,getSearch] = useAxios({
    url: '/search/result',
    method: 'get'
  })
  const [hotRes,getHotRes] = useAxios({
    url: '/consultation/hotNewsPage',
    method: 'get',
    request: {
      classifiedId: '',
      size: 10,
      page: 1
    },
  })
  const [product,getProduct] = useAxios({
    url: '/product/pro/queryChoicenessProduct',
    method: 'get',
    request: {
      isRecommend: '0',
      size: 10,
      page: 1
    }
  })
  const [iconsData]: [Icons[], any] = useState([{
    src: 'zhufangchaxun',
    title: '住房查询',
    fn: () => {
      if (orLogin()) {
        sendMessageToNative({ type: 'push' })
        history.push('wqcx')
        routing('wqcx')
      }
    }
  }, {
    src: 'chagongjijin',
    title: '查公积金',
    fn: () => {
      if (orLogin()) {
        sendMessageToNative({ type: 'push' })
        history.push('gjjc')
        routing('gjjc')
      }
    }
  }, {
    src: 'xinuongdaikuan',
    title: '信用贷款',
    fn: () => {
      sendMessageToNative({ type: 'jumpLoan' })
      //routing('loan')
    }
  }, {
    src: 'xinyongka',
    title: '信用卡',
    fn: () => {
      history.push('xyk')
      sendMessageToNative({ type: 'push' })
      routing('xyk')
    }
  }])
  const [height, setHeight] = useState('20')
  const navigationtRef = useRef(null)
  const refreshRef = useRef(null)
  const homeRef = useRef(null)
  const [refresh, setRefresh]: [keyof typeof refreshMsg, any] = useState(0)
  useEffect(() => {
    let param = history.location.search.slice(1).split('&')
    const params: any = {}
    param.forEach(v => {
      const a = v.split('=')
      params[a[0]] = a[1]
    })
    if (!!params['height']) {
      setHeight(params['height'])
    }
    setGlobalData('token', params['token'])
    setGlobalData('height', params['height'])
    const navigationtDOM = navigationtRef.current as any
    const refreshDOM = refreshRef.current as any
    const homeDOM = homeRef.current as any
    const moveY = (y: number) => {
      refreshDOM.style.transform = 'translateY(' + (y - 76) + 'px)'
      homeDOM.style.transform = 'translateY(' + (y - 76) + 'px)'
    }
    let index = 0
    let diff = 0
    let diff2 = 0
    let ty = 0
    let timer: any = null
    const clear = () => {
      index = 0
      diff = 0
      diff2 = 0
      moveY(0)
      setRefresh(0)
      timer = null
      ty = 0
    }
    const scroll$ = fromEvent(window, 'scroll')
      .pipe(
        throttleTime(10),
        pluck('target', 'documentElement', 'scrollTop'),
        startWith(0)
      )
      .subscribe((e: any) => {
        ty = e
        navigationtDOM.style.opacity = ((e - diff2) / (20 + diff2)) * 1.5
      })
    const start$ = fromEvent(window, 'touchstart')
      .pipe(
        pluck('touches', '0', 'clientY')
      )
      .subscribe((e: any) => {
        index = e
      })
    const move$ = fromEvent(window, 'touchmove')
      .pipe(
        throttleTime(15),
        pluck('touches', '0', 'clientY')
      )
      .subscribe(e => {
        diff = (e as number) - index
        if (ty <= 5 && diff > 0 && diff <= 75) {
          moveY(diff)
          diff2 = diff
        }
        if (ty - diff2 > -65) {
          clearTimeout(timer)
          setRefresh(0)
          timer = null
        } else if (!timer) {
          setRefresh(1)
          timer = setTimeout(() => {
            setRefresh(2)
            getSearch()
            getHotRes()
            getProduct()
            console.log('1234567')
            setTimeout(() => {
              timer = null
              clear()
            }, 1000)
          }, 200)
        }
      })
    const end$ = fromEvent(window, 'touchend')
      .subscribe(() => {
        if (!timer) {
          clear()
        }
      })
    return (() => {
      scroll$.unsubscribe()
      start$.unsubscribe()
      move$.unsubscribe()
      end$.unsubscribe()
    })
  }, [])
  return (
    <Fragment>
      <div ref={navigationtRef} className={style['navigationt']} style={{ height: (parseInt(height) + 26) + 'px' }}>
        {'壹米金融'}
      </div>
      <div ref={refreshRef} className={style['refresh']} style={{ height: '75px', top: '-75px' }}>
        {refreshMsg[refresh]}
      </div>
      <div ref={homeRef}  className={style['refPage']}>
        <div className={style['page']} style={{ paddingTop: (parseInt(height) + 11) + 'px' }}>
          <img className={style['tbg']} src={pImgs['shouye_bg']} />
          <div  className={style['title']}>
            {'壹米金融'}
          </div>
          <Swipers>
            <SliderEntry fn={() => {
              if (orLogin()) {
                sendMessageToNative({ type: 'push' })
                history.push('gjjc')
                routing('gjjc')
              }
            }} title='重庆公积金快速查询' num={search.code === code.success ? search.data.GJJ : '0'} />
            <SliderEntry fn={() => {
              if (orLogin()) {
                sendMessageToNative({ type: 'push' })
                history.push('wqcx')
                routing('wqcx')
              }
            }} title='重庆住房信息快速查询' num={search.code === code.success ? search.data.ZFXX : '0'} />
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
                    sendMessageToNative({ type: 'push' })
                    routing('zxxq')
                    history.push({
                      pathname: 'zxxq',
                      state: {
                        content: content,
                        title: title,
                        data: {
                          name: classifiedName,
                          second: true
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
        </div>
      </div>
    </Fragment>
  )
}

export default Home