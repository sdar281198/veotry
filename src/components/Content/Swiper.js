import React,{ useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation
} from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import { Products, numeros} from './Content';
import './Content.css';
import { Pagination } from 'swiper';
import './Content.css';

SwiperCore.use([Navigation]);
const swiper = () => {

  return (
      <>
    
    <Swiper pagination={{
  "type": "fraction"
}} navigation={true} className="mySwiper"
    
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >   
        {Products.map((item,index)=>{
            return(
              <>
                <SwiperSlide className='swiperus'>
                    <div className='swiper2'>
                    <div className='imagenproduct'>
                    <img src={item.img}></img>
                    </div>
                    <div className='nameproduct'>
                    <p key={index}>{item.name}</p>
                    </div>
                    <div className='descproduct'>
                    <p key={index}>{item.description}</p>
                    </div>

                    </div>
                </SwiperSlide>
                </>

            )

        })}
      
    </Swiper>
    </>
  );
};
export default swiper;
