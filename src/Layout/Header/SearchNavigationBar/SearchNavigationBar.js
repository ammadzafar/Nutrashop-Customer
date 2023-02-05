import React, {useState} from "react";
import {Link} from "react-router-dom";
import logo from "../../../assets/images/abc.png";
import Menu from "../Menu/Menu";
import {decrement, increment, remove} from "../../../store/actions/cartActions";
import {connect} from "react-redux";
import SideDrawer from "../SideDrawer/SideDrawer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import SearchProduct from "./SearchProduct/SearchProduct";

const NavigationBar = (props) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <header>
            <div className="topheader mobile-d-none">
                <div className="container-fluid">
                    <div className="row">

                            <div className="col-md-3 Logo">
                                <Link to="/">
                                    <img src={logo} className="main-logo" alt=" logo"/>
                                </Link>
                            </div>

                        <div className="col-md-4">
                            <SearchProduct/>
                        </div>
                        <div className="col-md-5">
                            <ul className="manu-items card-manus f-right">


                                <li className="cart-manu">
                                    <a href="javascript:void(0)" onClick={showDrawer}>
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                        <span className="item-counter">{props.totalItems}</span>
                                    </a>
                                        <SideDrawer visible={visible} onClose={() => onClose()}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Menu/>

        </header>
    )


}
const mapStateToProps = state => {
    return {
        cartItems: state.cartReducer.addedItems,
        total: state.cartReducer.total,
        totalItems: state.cartReducer.totalItems,
        isAuthenticated: state.auth.isAuthenticated,
    }

}
const mapDispatchToProps = dispatch => {
    return {
        decrement: (id) => {
            dispatch(decrement(id))
        },
        increment: (id) => {
            dispatch(increment(id))
        },
        remove: (id) => {
            dispatch(remove(id))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
