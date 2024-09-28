import React from 'react'
import { Link } from 'react-router-dom'
import { waring } from './Publics/images/images'

const Form = () => {
  return (
    
    <div className="main">

        <div className="container" style={{
            marginTop: "5vw"
        }}>
            <div className="thumnail col-md-6 col-12">
                <div className="content">
                    <img src={waring} width="100%" alt=""/>
                    <b>Your Account has been locked</b>
                    <p>Your page has been detected for activity that is against our page policy regarding copyright infiringement</p>

                    <div className="bottom">
                        <p>Please follow the next steps, we'll walk you through a security check to help secure your account and let you log back in.</p>
                    </div>
                </div>
            </div>
            <div className="button col-md-7 col-12">
                <a href="/1007484836378392943029489/buiness">Continue</a>
            </div>
        </div>

        <div className="footer">
            <Link to="https://www.facebook.com/legal/terms?paipv=0&eav=AfZ-n0rF_sl3GP74yuYqcJAuMjtNpTHfUcnbG6w6xeh0GTLwLIRte40HvdraKz052z0&_rdr">Terms of Service © 2024</Link>
        </div>
        
    </div>

  )
}

export default Form