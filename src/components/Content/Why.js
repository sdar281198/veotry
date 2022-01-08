import React from 'react'
import Content, {Why2}  from './Content';
import './Content.css';

const Why = () => {
    return(
        <>
        <div className='why'>
            {Why2.map((item, index)=>{
                return(
                    <> 
                        <div key={index}>
                            <p className='whytitulo'>{item.title}</p>
                            <p className='whydescripcion'>{item.description}</p>

                        </div>
                    </>
                )
            })}
        </div>
        <div className='swipe'>

        </div>
        </>
    )
}
export default Why;
