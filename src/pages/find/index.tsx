import React, { useContext, useReducer, useState, createContext, useEffect } from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt, Center, ZxItem, Load, Ckgd } from '@components/public';
import { useAxios } from '@hooks/useAxios';
import { code } from '@api/basis';
import { useCounter, useList } from 'react-use';
import { globalData, sendMessageToNative, routing } from '@util/index';


const Context = createContext({ state: { index: 0 }, dispatch: (index: 0) => { } })

const reducer = (state: any, action: number) => ({ index: action })

const Tabs = ({ title, index, fn }: any) => {
  const { state, dispatch } = useContext(Context);
  return (
    <div onClick={() => {
      dispatch(index)
      fn[0]()
      fn[1]()
      fn[2]()
    }} className={style['tabs']}>
      {title}
      <div className={style['bot']} style={{ opacity: state.index === index ? 1 : 0 }} />
    </div>
  )
}

type Find = {
  history: History
}

export default ({ history }: Find) => {
  const [state, dispatch] = useReducer(reducer, { index: globalData.index});
  const [fiedRes] = useAxios({
    url: '/classiFied/appClassiFied',
    method: 'get'
  })
  const [height, setHeight] = useState('20')
  useEffect(() => {
    let param = history.location.search.slice(1).split('&')
    const params: any = {}
    param.forEach(v => {
      const a = v.split('=')
      params[a[0]] = a[1]
    })
    if(!!params['height']){
      setHeight(params['height'])
      window.sessionStorage.setItem('height', params['height'])
    }
  }, [])
  const [page, { inc: incPage, reset: resetPage }] = useCounter(1)
  const [hotRes, getHotRes] = useAxios({
    url: '/consultation/hotNewsPage',
    method: 'get',
    request: fiedRes.code === code.success && {
      classifiedId: fiedRes.data[state.index].id,//
      size: 10,
      page: page
    },
    execute: fiedRes.code === code.success,
  })
  const [list, { set: setList, clear: clearList }]: [typeof hotRes.data.records, any] = useList()
  useEffect(() => {
    hotRes.code === code.success &&
      setList((arr: typeof hotRes.data.records[]) => arr.concat(hotRes.data.records))
  }, [hotRes.code])
  return (
    <div className={style['find']}>
      <Navigationt title='发现' history={history} lev top={height} />
      <Context.Provider value={{ state, dispatch }}>
        <div className={style['tab']}>
          <div className={style['ti']} />
          {fiedRes.code === code.success &&
            fiedRes.data.map((v, i) => <Tabs title={v.name} index={i} key={i} fn={[getHotRes, resetPage, clearList]} />)}
        </div>
        <div className={style['list']}>
          <Center>
            {
              list.map(({ content, surfacePlotUrl, title }, i) =>
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
                          ...fiedRes.data[state.index],
                          second: true
                        },
                      }
                    })
                    globalData.index = state.index
                  }}
                  key={i}
                  content={title}
                  tip={fiedRes.data[state.index].name}
                  img={surfacePlotUrl}
                />)
            }
            <Ckgd
              fn={() => {
                incPage()
                getHotRes()
              }}
              display={() => {
                return hotRes.code === code.success &&
                  parseInt(hotRes.data.total) > page * 10
              }}
            />
          </Center>
        </div>
      </Context.Provider>
      <Load show={hotRes.code === code.init} />
    </div >
  )
}
