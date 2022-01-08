import React from 'react';
import { dashText } from './DashboardItems';
import './styles.css';

const Dashboard = () => {
    return (
        <>
        <div className='dashboard'>
            {dashText.map((item, index)=>{
                return(
                    <>
                        <p className='dash1title'>{item.title}</p>
                        <p className='dash1desc'>{item.desc}</p>
                    
                    </>
                )
            })}



        </div>
        </>
    )
}
export default Dashboard;
