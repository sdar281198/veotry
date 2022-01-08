import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube"
import "swiper/css/pagination"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
  EffectCube,Pagination,Navigation
} from 'swiper';

import {dashDatos} from './DashboardItems';
import { MenuItems } from "../Navbar/MenuItems";

// install Swiper modules
SwiperCore.use([EffectCube,Pagination,Navigation]);

const SwiperDash = () => {
  /*
  const [counter, setCounter] = useState(0);

    const handleAdd = () =>{
    setCounter(counter+1);
}
*/
    return (
      <>
      <div className="swipcont">
      <Swiper effect={'cube'} grabCursor={true} cubeEffect={{
    "shadow": false,
    "slideShadows": false,
    "shadowOffset": 0,
    "shadowScale": 0.24
  }} pagination={false} navigation={true} className="mySwiper">
    {dashDatos.map((item,index)=>{
      return(
        <>
          <SwiperSlide className="swiperdashb">
            <div className="swipdash new-line">
              <p className="titleDash">{item.item}:</p>
              <p className="descDash">{item.desc}</p>
              <div className="divimgdash"><img src={item.img}></img></div>
            </div>
          </SwiperSlide>
        </>
      )
    })}
    </Swiper>
    </div>
      </>
    )
}

export default SwiperDash;