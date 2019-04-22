import 'swiper/dist/css/swiper.min.css'
import './index.css';
import React from 'react';
import Swiper from 'react-id-swiper';

type Swipers = {
  children: JSX.Element[]
}

export const Swipers = ({ children }: Swipers) => {
  const params = {
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 10,
    grabCursor: true,
  };
  return (
    <Swiper {...params}>
      {
        children.map((v: any, i: any) => <div key={i}>
          {v}
        </div>)
      }
    </Swiper>
  )
}
