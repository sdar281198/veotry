import React,{useState} from 'react'
import './Content.css';
import Content,  {Title}  from './Content';

const Elements = () => {
    return (
        <div className='contenido'>
            {Title.map((item, index)=>{
                return(
                <>
                    <p className='titulo' key={index}>
                    {item.title}
                    </p>
                    <p className='textoSmall' key={index}>
                        {item.textoSmall}
                    </p>
                    <div className='img1'>
                    <img className='imgmain' src={item.img}></img>
                    </div>

                </>
                )
            })}
        </div>
    )
}
export default Elements;
