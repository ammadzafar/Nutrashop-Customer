import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Subscription.css'
import { Link } from 'react-router-dom';
import {BsFacebook,BsPinterest,BsRssFill,BsInstagram} from "react-icons/bs";
import {FaTumblrSquare,FaTwitterSquare} from "react-icons/fa";


const Subscription = () => {
    return (
        <div className=''>
            <div className='newsletter-subscription'>
                <div className='row'>
                    <div className='col-sm-3 first cols'><h4>Sign up for our newsletter</h4></div>
                    <div className='col-sm-6 HL_subcribe cols'>
                        <form action="" id="subscribe_form" class="subscribe_form" name="subscribe_form">
                            <input type="hidden" name="action" value="subscribe" />
                            <div class="forum-input">
                                {/* <div class="col-xs-5 co1s first"> */}
                                    {/*<label for="nl_first_name">Name</label>*/}
                                    {/*<input class="Textbox autobox default" placeholder='Name' id="nl_first_name" name="nl_first_name" type="text" />*/}
                                {/* </div> */}
                                <div class="col-xs-12">
                                    <label for="nl_email">Email</label>
                                    <input class="Textbox autobox default" placeholder='Email' id="nl_email" name="nl_email" type="email" />
                                    <input value="Subscribe" class="btn" type="submit" />
                                </div>
                                
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-3 last cols">
                        {/* <!-- BEGIN social_icon --> */}
                        <div id="socnet" class="Block SocialConnect Moveable Panel">

                            <ul>
                                <li><a target="_blank" rel="noopener" href="https://www.facebook.com/PakVitamins/" className='icon-social'><BsFacebook/></a></li>

                                

                                <li><a target="_blank" rel="noopener" href="https://www.instagram.com/pakvitaminsofficial/?utm_medium=copy_link" className='icon-social'><BsInstagram/></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription