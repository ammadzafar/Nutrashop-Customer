import {FaTrashAlt} from "react-icons/fa";
import {Link} from "react-router-dom";
import EmptyCart from "../../../assets/images/greencart.png";
import React from "react";
import {decrement, increment, remove} from "../../../store/slices/cartSlice";
import {connect, useDispatch} from "react-redux";
import {Drawer} from "antd";
import PriceFormat from "../../../component/PriceFormat/PriceFormat";
import WordLimit from 'react-word-limit';
import ReactHtmlParser from 'react-html-parser';

const SideDrawer = (props) => {
    const dispatch = useDispatch();
    // const dropDownHandlerClose = () => {
    //     document.body.classList.remove("cart-open");
    //     props.closeDrawer();
    // };

    const add = (id) => {
        dispatch(increment({id}));
        // props.increment(id)
    };

    const dec = (id) => {
        dispatch(decrement({id}));
    };

    const rem = (id) => {
        dispatch(remove({id}))
    }
    return (

        <Drawer
            title={<h5>{props.totalItems} Item in your Cart</h5>}
            placement="right"
            closable={true}
            onClose={() => props.onClose()}
            visible={props.visible}
            className="anti-scroll"
        >

            {props.cartItems.length ?
                <div>
                    <div className="cart-body-new">
                        {
                            props.cartItems &&
                            props.cartItems.map((item) =>
                                <React.Fragment key={item.id.toString()}>
                                    <div className="cart-repeater p-2">
                                        <div className="cart-row">
                                            <img
                                                src={process.env.REACT_APP_BASE_IMAGE_PATH + item.image} alt="product"/>
                                        </div>
                                        <div className="cart-contents sidecart px-2">
                                        <span>
                                            <Link className="headerProductName" to={"/product/" + item.slug}
                                                  onClick={() => props.onClose()}>
                                                <WordLimit className="cart-product-name" limit={15}>{ReactHtmlParser(item.name)}</WordLimit>
                                            </Link>
                                            <div onClick={() => rem(item.id)} className="cart_actions cross pointer">
                                                <span
                                                    className="trashIcon"><FaTrashAlt/></span>

                                            </div>
                                        </span>
                                            <h6 className="cross">Qty : {item.quantity}</h6>
                                            <h6 className="cross">
                                                Price : <PriceFormat number={item.price}/>
                                            </h6>
                                            <div className="quantity-selector cart">
                                            <span onClick={() => dec(item.id)}
                                                  className="qtyminus input-number-decrement" field="quantity">
                                                –
                                            </span>
                                                <input
                                                    type="text"
                                                    name="quantity"
                                                    value={item.quantity}
                                                    className="qty input-number"
                                                />
                                                <span onClick={() => add(item.id)}
                                                      className=" input-number-increment qtyplus" field="quantity">
                                                +
                                            </span>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )}
                    </div>
                    <div className="cart-footr">
                        <h5>
                            Subtotal : <PriceFormat number={props.total}/>
                        </h5>
                        <div className="checkout-btn">
                            <Link
                                to={"/checkout"}
                                onClick={() => props.onClose()}
                                className="btn btn-checkouts"
                            >
                                Checkout
                            </Link>
                            <Link
                                to={"/cart"}
                                onClick={() => props.onClose()}
                                className="btn btn-checkouts"
                            >
                                Cart
                            </Link>
                        </div>
                    </div>
                </div> : (
                    <div className="emptyDropDown cart-body center">
                        <img src={EmptyCart} height="17%" width="30%" alt=" empty cart"/>
                        <h4 className="emptyCartMessage pt-10">YOUR CART IS EMPTY </h4>
                        <p className="pb-0 fs-10">Add some products in your cart.</p>
                    </div>
                )}
        </Drawer>
    );
};
const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.addedItems,
        total: state.cartReducer.total,
        totalItems: state.cartReducer.totalItems,
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapStateToProps)(SideDrawer);
