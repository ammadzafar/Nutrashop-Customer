import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions/menuActions";
import { Link, NavLink } from "react-router-dom"
import "./Menu.css"
import { CaretDownFilled, CaretRightFilled } from "@ant-design/icons";
import HumBurger from "./HumBurger/HumBurger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SideDrawer from "../SideDrawer/SideDrawer";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";
import logo from "../../../assets/images/abc.png";
import ReactHtmlParser from 'react-html-parser';
import BrandMenu from "./BrandMenu/BrandMenu";


const Menu = (props) => {

    const { totalItems } = useSelector(({ cartReducer }) => cartReducer);

    useEffect(() => {
        props.dispatch(actionCreators.storeMenus())
    }, [])

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const [stickyClass, setStickyClass] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
        return () => window.removeEventListener('scroll', stickNavbar);
    }, []);

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            // window height changed for the demo
            windowHeight > 90 ? setStickyClass('sticky-nav') : setStickyClass('');
        }
    };
    return (
        <div className={`main-manu-bar ${stickyClass}`}>
            <div className="container-fluid">
                <div className="manu-btns">
                    <HumBurger menus={props.menus} />
                    <Link className="z-index1" to="/">
                        <img src={logo} style={{ "width": "9em" }} className="main-logo" alt="logo" />
                    </Link>
                    <ul className="z-index1 manu-items card-manus f-right">
                        <li className="cart-manu">
                            <p onClick={showDrawer}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="item-counter">{totalItems}</span>
                            </p>
                            <SideDrawer visible={visible} onClose={() => onClose()} />
                        </li>
                    </ul>
                </div>
                <ul className="main-manu">
                    {
                        props.menus &&
                        props.menus.map((menu) => (
                            <React.Fragment key={menu.id.toString()}>
                                <li>
                                    <NavLink
                                        to={`/product-category/${menu.Collection === null ? "empty" : menu.Collection.slug}`}>{ReactHtmlParser(menu.name)}
                                        {menu.collections.length !== 0 && <CaretDownFilled />}
                                        <ul className="subdropdown">
                                            {menu.collections &&
                                                menu.collections.map((collection) =>
                                                    <React.Fragment key={collection.id.toString()}>
                                                        <li>
                                                            <Link
                                                                to={'/product-category/' + collection.slug}>{ReactHtmlParser(collection.name)}
                                                                {collection.parentCollections.length !== 0 &&
                                                                    <CaretRightFilled className="pt-3"
                                                                        style={{ float: "right" }} />}
                                                                <ul className="second-manu">
                                                                    {
                                                                        collection.parentCollections.length !== 0 &&
                                                                        collection.parentCollections.map((coll) =>
                                                                            <li>
                                                                                <Link
                                                                                    to={'/product-category/' + coll.slug}>
                                                                                    {ReactHtmlParser(coll.name)}
                                                                                </Link>
                                                                            </li>
                                                                        )
                                                                    }
                                                                </ul>
                                                            </Link>
                                                        </li>
                                                    </React.Fragment>
                                                )
                                            }
                                        </ul>
                                    </NavLink>
                                </li>

                            </React.Fragment>

                        )
                        )

                    }
                    <BrandMenu />
                </ul>

            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        menus: state.menus.menus
    }

}
export default connect(mapStateToProps)(Menu);
