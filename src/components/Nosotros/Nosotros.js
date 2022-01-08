import React from 'react';
import './Nosotros.css';
import { datos } from './Datos';
import SwiperUs from './SwiperUs';

const Nosotros = () => {
    return (
        <>
        <div className='nosotros'>
            {datos.map((item, index)=>{
                return(
                    <>
                    <h1 className='ustitle'>{item.title}</h1>
                    <p className='usdesc'>{item.desc}</p>
                    <div className='usimg'>
                        <img src={item.img}></img>
                    </div>
                    </>
                )

            })}
            

        </div>
        </>
    )
}
export default Nosotros;