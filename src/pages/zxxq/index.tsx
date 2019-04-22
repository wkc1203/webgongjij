
import React from 'react';
import style from './index.module.scss';
import { History } from 'history';
import { Navigationt, Cutoff, Title, Center } from '@components/public';

type Zxxq = {
  history: History
}

export default ({ history }: Zxxq) => {
  const {
    title,
    data: {
      name
    },
    content
  } = history.location.state
  return (
    <div className={style['zxxq']}>
      <Navigationt title='资讯详情' history={history} />
      <Cutoff hg='10' />
      <Title title={title} />
      <Cutoff hg='10' />
      <Center>
        <div className={style['bot']}>
          <div className={style['tip']}>
            {name}
          </div>
          <div className={style['tib']}>
            {'来源：互联网'}
          </div>
        </div>
      </Center>
      <Center>
        <div className={style['content']} dangerouslySetInnerHTML={{ __html: content }} />
      </Center>
    </div>
  )
}
