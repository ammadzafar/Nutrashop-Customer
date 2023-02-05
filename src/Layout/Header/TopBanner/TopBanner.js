import React, {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faSignInAlt, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import Login from "../../../containers/Auth/Login";
import SignUp from "../../../containers/Auth/SignUp";
import {logout} from "../../../store/slices/authSlice";
import {Link} from "react-router-dom";

const TopBanner = (props) => {
    const dispatch = useDispatch()

    const {isAuthenticated, auth} = useSelector(({auth}) => auth);
    const [isOpen, setIsOpen] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const logOut = () => {
        dispatch(logout())
    }
    return (
        <header className="emailheader">

                {/* <img src="https://cdn.healthxp.in/wp-content/uploads/2020/11/Strip-Banner-1300-x-4001.png"/> */}
                <div className="hwrap">
                    <div className="hmove">
                    <div className="hitem"><b> Shipping Free All Over Pakistan </b></div>
                    <div className="hitem"><b> Shipping Free All Over Pakistan </b></div>
                    <div className="hitem"><b> Shipping Free All Over Pakistan </b></div>
                    <div className="hitem"><b> Shipping Free All Over Pakistan </b></div>
                    </div>
                </div>
            {/* </div> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 mobile-d-none">
                        <ul className="email-list">
                            {isAuthenticated &&
                            <li>

                                <span> Welcome,{auth.user.firstName} </span>

                            </li>
                            }
                            {!isAuthenticated ?
                                <>
                                    <li onClick={() => setIsOpen(!isOpen)}>
                                        <FontAwesomeIcon icon={faSignInAlt}/>
                                        <span className="pointer"> Login</span>

                                    </li>
                                    <li onClick={() => setIsSignUp(!isSignUp)}>
                                        <FontAwesomeIcon icon={faUser}/>

                                        <span className="pointer"> Register </span>

                                    </li>
                                </> :
                                <>
                                    <li>
                                        <Link to="/my-account">
                                            <FontAwesomeIcon icon={faUser}/>
                                            <span> My Account </span>
                                        </Link>


                                    </li>
                                    <li>
                                        <Link to="/wishlist">
                                            <FontAwesomeIcon icon={faHeart}/>
                                            <span> My Wishlist </span>
                                        </Link>


                                    </li>
                                </>
                            }
                            {
                                isAuthenticated && <li onClick={() => logOut()}>
                                    <FontAwesomeIcon icon={faSignOutAlt}/>
                                    <span className="pointer"> Logout</span>

                                </li>
                            }
                        </ul>
                    </div>
                    <div className="col-md-6 mobile-d-none">
                        <ul className="social-icons">
                            <li>
                                {/*<a className='contactNo' href="tell:">Contact Us: +92-323-8848263</a>*/}
                                <a className='contactNo' href="tel:+92-323-8848263">Contact Us: +92-323-8848263</a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener" href="https://m.facebook.com/PakVitamins/">

                                    <img src="https://www.spaceloud.com/public/assets/images/facebook1.svg" alt=" facebook"/>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener" href="https://www.instagram.com/pakvitaminsofficial/?utm_medium=copy_link">

                                    <img src="https://www.spaceloud.com/public/assets/images/insta-circle.svg" alt=" instagram"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Login closeLogin={() => setIsOpen(false)} show={isOpen}/>
            <SignUp closeSignUp={() => setIsSignUp(false)} show={isSignUp}/>
        </header>
    )
}
export default TopBanner
