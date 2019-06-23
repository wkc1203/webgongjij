import React, { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

const Test = lazy(() => import('@pages/test'))

const Home = lazy(() => import('@pages/home'))
const About = lazy(() => import('@pages/about'))
const Gjjc = lazy(() => import('@pages/gjjc'))
const Gjjz = lazy(() => import('@pages/gjjz'))
const Wsxx = lazy(() => import('@pages/wsxx'))
const Jjxq = lazy(() => import('@pages/jjxq'))
const Cxjg = lazy(() => import('@pages/cxjg'))
const Xyk = lazy(() => import('@pages/xyk'))
const Ydts = lazy(() => import('@pages/ydts'))
const Wqcx = lazy(() => import('@pages/wqcx'))
const Zfjg = lazy(() => import('@pages/zfjg'))
const Find = lazy(() => import('@pages/find'))
const Loan = lazy(() => import('@pages/loan'))
const Zxxq = lazy(() => import('@pages/zxxq'))
const Gjjcy = lazy(() => import('@pages/gjjcy'))
const xxqyqr = lazy(() => import('@pages/xxqyqr'))



export const Layout = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route path='/test' component={Test} exact />
        <Route path='/home' component={Home} exact />
        <Route path='/about' component={About} exact />
        <Route path='/gjjc' component={Gjjc} exact />
        <Route path='/gjjz' component={Gjjz} exact />
        <Route path='/wsxx' component={Wsxx} exact />
        <Route path='/jjxq' component={Jjxq} exact />
        <Route path='/cxjg' component={Cxjg} exact />
        <Route path='/xyk' component={Xyk} exact />
        <Route path='/ydts' component={Ydts} exact />
        <Route path='/wqcx' component={Wqcx} exact />
        <Route path='/zfjg' component={Zfjg} exact />
        <Route path='/find' component={Find} exact />
        <Route path='/loan' component={Loan} exact />
        <Route path='/zxxq' component={Zxxq} exact />
        <Route path='/gjjcy' component={Gjjcy} exact />
        <Route path='/xxqyqr' component={xxqyqr} exact />
      </Switch>
    </Suspense>
  )
}