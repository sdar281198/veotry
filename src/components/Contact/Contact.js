import { selectOptions } from '@testing-library/user-event/dist/select-options';
import React from 'react';
import {Form} from './ContactForm';
import './styles.css';

const Contact = () => {
    return (
        <>
        <div className='divform'>
            <form className='form'>
                <p>Contactanos</p>
                {Form.map((item, index)=>{
                    return(
                        <>
                                    <label for={item.label}>{item.title}</label>
                                    {item.type == "textarea" && <textarea></textarea>}
                                    {item.type == "text" && <input type={item.type} name={item.name} required={item.required}></input>}
                        </>
                    )
                })}
                <button className='boton-form' value="Enviar">Enviar datos</button>
            </form>
        </div>
        </>
    )
}
export default Contact;
