import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Navigation
  } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import { Pagination } from 'swiper';
import { clientes } from './Datos';
import './Nosotros.css';

SwiperCore.use([Navigation]);
const SwiperUs = () => {
    return (
        <>
        <h1 className='titleus'>Nuestros clientes:</h1>
            <Swiper 
             navigation={true} className="swiperus" 
                    
                    spaceBetween={0}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                        {clientes.map((item, index)=>{
                            return(
                                <SwiperSlide className='swipclient'>
                                <div className='imgcliente'>
                                <img index={clientes} src={item.cliente}></img>
                                </div>
                                </SwiperSlide>
                            )
                        })}

            </Swiper>
        </>
    );
};
export default SwiperUs;
