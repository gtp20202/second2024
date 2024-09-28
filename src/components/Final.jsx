import React from 'react'
import { logo, search } from './Publics/images/images'
import { Link } from 'react-router-dom'


const FinalComponent = () => {
    return (
        <div className="business">

            <div className="top-header">
                <div className="container">
                    <img src={logo} width="70" className="metalogo" />
                    <p className="metahead">Support Inbox</p>
                    <img src={search} width="100%" className="searchicon" />
                </div>
            </div>
            <div className="masheader" style={{marginBottom: "70px"}}>
                <div className="wrapper">
                    <div className="container">
                        <p className="businesshelp" style={{ visibility: "hidden" }}>
                            Meta Business Help Center </p>
                        <p className="businesshelpcenter">Facebook Business Help
                            Center</p>
                    </div>
                </div>
            </div>

            <div className="main-content" style={{
                display: "flex",
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center"}}>

                <div className='container'>
                    <p style={{color: "#267df1"}}>A review for this Page was requested by an admin or advertiser to determine if it was correctly restricted from advertising. We're reviewing the Page and will notify you here within 48 hours from when the review was requested. 
                    <a
                    href='https://facebook.com/help/282489752085908/trang/?helpref=popular_topics'
                    style={{
                        outline: "none",
                        color: "#267df1",
                        fontWeight: "700",
                        textDecoration: 'none'
                    }}
                >
                    Go to Home ?
                </a></p>
                    
                </div>
                

            </div>

            {/* FOOTER */}
            <div className="footer">
                <div className="container">
                    <img src={logo} className="logofooter" />
                    <p className="nerlogofooter">
                        Facebook can help your large, medium or small business
                        grow. Get the latest news
                        for advertisers and more on our <Link to="#" style={{ textDecoration: "none", color: "white" }}>Meta for Business Page.</Link></p>
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <ul>
                                <li>
                                    <p className="fontbold">Marketing on Facebook</p>
                                    <p>Success Stories</p>
                                    <p>Measurement</p>
                                    <p>Industries</p>
                                    <p>Inspiration</p>
                                    <p>Events</p>
                                    <p>News</p>
                                    <p>Site map</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6">
                            <ul>
                                <li>
                                    <p className="fontbold">Marketing objectives</p>
                                    <p>Build your presence</p>
                                    <p>Create awareness</p>
                                    <p>Drive discovery</p>
                                    <p>Generate leads</p>
                                    <p>Boost sales</p>
                                    <p>Earn loyalty</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6">
                            <ul>
                                <li>
                                    <p className="fontbold">Facebook Pages</p>
                                    <p>Get started with Pages</p>
                                    <p>Setting up your Page</p>
                                    <p>Manage your Facebook Page</p>
                                    <p>Promote your Page</p>
                                    <p>Messaging on your Page</p>
                                    <p>Page Insights</p>
                                </li>
                            </ul>
                        </div>
                        <div variant="dontshowonmobile " className="col-md-3 col-6">
                            <ul>
                                <li>
                                    <p className="fontbold">Facebook ads</p>
                                    <p>Get started with ads</p>
                                    <p>Buying Facebook ads</p>
                                    <p>Ad formats</p>
                                    <p>Ad placement</p>
                                    <p>Choose your audience</p>
                                    <p>Measure your ads</p>
                                    <p>Managing your ads</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottomfooter">
                <div className="container">
                    <ul>
                        <li>English (UK)</li>
                        <li>English (US)</li>
                        <li>Español</li>
                        <li>Português (Brasil)</li>
                        <li>Français (France)</li>
                        <li>Español (España)</li>
                        <li>More languages</li>
                    </ul>
                    <ul>
                        <li>© 2023 Meta</li>
                        <li>About</li>
                        <li>Developers</li>
                        <li>Careers</li>
                        <li>Privacy</li>
                        <li>Cookies</li>
                        <li>Terms</li>
                        <li>Help Centre</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FinalComponent