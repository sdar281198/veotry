import React, { useRef, useState } from 'react';
import './Content.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Pagination,Navigation
} from 'swiper';
import 'swiper/css';
import { appInfo, appFunctions } from './Content';


// install Swiper modules
SwiperCore.use([Pagination,Navigation]);

const Phone = () => {
  return (
    <>
    <div className='app'>
      {appInfo.map((item, index)=>{
        return(
          <>
          <p className='phonetitle'>{item.titleMain}</p>
          <div className='imgPhone'>
            <img src={item.imgPhone}></img>
          </div>
          </>
        )
      })}
      <p className='titlefunc'>Funciones:</p>
      <div className='phoneSwiper'>
      <Swiper
      pagination={{
        "type": "fraction"
      }} navigation={true} className="mySwiper"
    
      /*spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}*/
      >
        {appFunctions.map((item,index)=>{
            return(
        <SwiperSlide className='swiper1'>
          <div className='swiper3'>
                    <div className='nameproduct'>
                      <div className='bordericon'>
                      <i class="fas fa-check-circle"></i>
                      </div>
                    
                    <p key={index}>{item.title}</p>
                    </div>
                    <div className='descproduct'>
                    <p key={index}>{item.desc}</p>
                    </div>

                    </div>

        </SwiperSlide>
        )

      })}
      </Swiper>
      </div>
    </div>
    </>
  )
}
export default Phone;

/*import React from 'react';
import {useSpring, useTransition, animated} from 'react-spring';
import './Content.css';

const Phone = () => {
    const style1 =useSpring({
        from:{marginTop: -100},
        to:{marginTop:0},
        config:{duration: 2000}
    })
    return (
        <animated.div style={style1}> 
        <div className='topDiv'>
            <h1>Hello world</h1>         
        </div>
        </animated.div>
    )
}

export default Phone;*/

