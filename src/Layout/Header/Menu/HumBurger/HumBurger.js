import "./../Menu.css";
import React, {useState} from "react";
import {Drawer} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import {Link, NavLink} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {
    CaretDownFilled,
    CaretRightFilled,
} from "@ant-design/icons";
import Login from "../../../../containers/Auth/Login";
import SignUp from "../../../../containers/Auth/SignUp";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHeart, faSignInAlt, faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons'
import {logout} from "../../../../store/slices/authSlice";
import SearchProduct from "./../../SearchNavigationBar/SearchProduct/SearchProduct";
import BrandMenu from "../BrandMenu/BrandMenu";

const HumBurger = (props) => {
    const dispatch = useDispatch()
    const {isAuthenticated} = useSelector(({auth}) => auth);
    const [isOpen, setIsOpen] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const logOut = () => {
        dispatch(logout())
    }


    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <MenuOutlined
                className="green humburger z-index1"
                type="primary"
                onClick={showDrawer}

            />
            <Drawer
                placement="left"
                closable={false}
                onClose={onClose}
                visible={visible}
                className="scrollbar"

            >
                <div className="p-5px">
                    <SearchProduct/>
                </div>

                <ul className="mobile-align-nr mt0-5em">
                    <li>
                        <a className='contactNo' href="tel:+92-323-8848263"><i className="fas fa-mobile-alt"></i> +92-323-8848263</a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer"
                           href="https://m.facebook.com/PakVitamins/">

                            <img src="https://www.spaceloud.com/public/assets/images/facebook1.svg" alt=" facebook"/>
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noreferrer"
                           href="https://www.instagram.com/pakvitaminsofficial/?utm_medium=copy_link">

                            <img src="https://www.spaceloud.com/public/assets/images/insta-circle.svg"
                                 alt=" instagram"/>
                        </a>
                    </li>
                </ul>

                <ul className="background">

                    {!isAuthenticated ?
                        <>
                            <li className="mobile-align" onClick={() => setIsOpen(!isOpen)}>
                                <FontAwesomeIcon icon={faSignInAlt}/>
                                <span className="pointer"><b> Login</b></span>

                            </li>
                            <li className="mobile-align" onClick={() => setIsSignUp(!isSignUp)}>
                                <FontAwesomeIcon icon={faUser}/>

                                <span className="pointer"><b> Register</b> </span>

                            </li>
                        </> :
                        <>
                            <li>
                                <Link className="mobile-align white" to="/my-account">
                                    <FontAwesomeIcon icon={faUser}/>
                                    <span> My Account </span>
                                </Link>

                            </li>
                            <li className="pt-10">
                                <Link className="mobile-align white" to="/wishlist">
                                    <FontAwesomeIcon icon={faHeart}/>
                                    <span> My Wishlist </span>
                                </Link>

                            </li>
                        </>
                    }
                    {
                        isAuthenticated && <li className="mobile-align pt-10" onClick={() => logOut()}>
                            <FontAwesomeIcon icon={faSignOutAlt}/>
                            <span className="pointer"> Logout</span>
                        </li>
                    }

                </ul>

                <ul className="humburger-manu">
          
                    {props.menus &&
                    props.menus.map((menu) => (
                        <React.Fragment key={menu.id.toString()}>
                            <li>
                                <NavLink style={{width: "100%"}}
                                         to={`/product-category/${menu.Collection === null ? "empty" : menu.Collection.slug}`}>
                                    {menu.name} <CaretDownFilled style={{"float": "right"}}/>
                                    <ul className="subdropdown">
                                        {menu.collections &&
                                        menu.collections.map((collection,index) => (
                                            <React.Fragment key={index}>
                                                <li>
                                                    {collection.parentCollections.length ===0?
                                                        <Link onClick={onClose} to={`/product-category/${collection.slug}`}>{collection.name}</Link>:
                                                        <a>
                                                        {collection.name}
                                                        {collection.parentCollections.length !== 0 && (
                                                            <CaretRightFilled
                                                                className="pt-3"
                                                                style={{float: "right"}}
                                                            />
                                                        )}
                                                        <ul className="second-manu">
                                                            {collection.parentCollections.map((coll) => (
                                                                    <li>
                                                                        <Link onClick={onClose} to={"/product-category/" + coll.slug}>
                                                                            {coll.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                        </ul>
                                                    </a>}
                                                </li>

                                            </React.Fragment>
                                        ))}
                                    </ul>
                                </NavLink>
                            </li>
                          
                        </React.Fragment>
                    ))}
                         <BrandMenu /> 
                </ul>
            </Drawer>
            <Login closeLogin={() => setIsOpen(false)} show={isOpen}/>
            <SignUp closeSignUp={() => setIsSignUp(false)} show={isSignUp}/>
        </>
    );
};
export default HumBurger;
