import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Guest from "./Guest/Guest";
import ShippingAddress from "./ShippingAddress/ShippingAddress";
import Payment from "./Payment/Payment";
import { connect, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import EmptyCart from "../../assets/images/2cart1.png";
import { Button, Card } from "antd";
import { Divider } from "antd";
import PriceFormat from "../../component/PriceFormat/PriceFormat";
import MediaQuery from "react-responsive";
import { storeAddresses } from "../../store/slices/addressSlice";
import HTMLReactParser from "html-react-parser";

const CheckOut = (props) => {

    const dispatch = useDispatch()
    const [checkShippingAddress, setcheckShippingAddress] = useState(false);
    const [guestClick, setGuestClick] = useState(false);
    const [addressDetails, setAddressDetails] = useState(0);
    const { isAuthenticated, isGuest, auth } = useSelector(({ auth }) => auth);
    const { addressData } = useSelector(({ address }) => address);
    // useEffect(() => {
    //     isAuthenticated && dispatch(storeAddresses(auth.id))
    // }, [])
    const fakeAddress = {
        city: "",
        state: "",
        address: "",
        postal_code: "postal_code",
    }
    const setGuest = () => {
        setGuestClick(!guestClick);
    };
    const setShipping = () => {
        setcheckShippingAddress(!checkShippingAddress);
    };
    return props.cartItems.length ? (
        <div>
            <section className="checkout-container bg-l-grey">
                <MediaQuery minWidth={1224}>
                    <div className="container p-r-l-100">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="inventory_header flex">
                                    <h4 style={{ "margin-bottom": "auto" }}>
                                        <b>CHECKOUT</b>
                                    </h4>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-8">
                                {!isAuthenticated && !isGuest && (
                                    <Guest guestClick={setGuest} />
                                )}
                                {(isAuthenticated || isGuest) && (
                                    <ShippingAddress
                                        shippingClick={setShipping}
                                        guestClick={setGuest}
                                        cartItems={props.cartItems}
                                        addressDetails={!isAuthenticated ? fakeAddress : addressDetails}
                                        price={props.total}
                                    />
                                )}
                                {checkShippingAddress && <Payment shippingClick={setShipping} />}
                            </div>
                            <div className="col-md-4 bg-l-grey">
                                <Card className="card-shadow">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                                <b>Order Summary</b>
                                            </h4>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="mb-0">Subtotal</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="f-right mb-0"><PriceFormat number={props.total} /></p>
                                        </div>
                                        <div className="col-md-6">
                                          <p className="mb-0">Shipping</p>
                                        </div>
                                        <div className="col-md-6">
                                          <p className="f-right mb-0"><PriceFormat number={process.env.REACT_APP_BASE_DC_CHARGES} /></p>
                                        </div>

                                        <Divider className="mt-10 mb-10" />

                                        <div className="col-md-6">
                                            <h4>
                                                <b>Total</b>
                                            </h4>
                                        </div>
                                        <div className="col-md-6">
                                            <h4 className="f-right">
                                                <b> <PriceFormat number={parseFloat(props.total )+ parseFloat(process.env.REACT_APP_BASE_DC_CHARGES)} /></b>
                                            </h4>
                                        </div>
                                    </div>
                                </Card>
                                {/*    <Card className="card-shadow mt-2">*/}
                                {/*        <div className="row">*/}
                                {/*            <div className="col-md-12">*/}
                                {/*                <h4>*/}
                                {/*                    <b>All Customer Addresses</b>*/}
                                {/*                </h4>*/}
                                {/*            </div>*/}

                                {/*            {addressData ?*/}
                                {/*                addressData.map(address=>(*/}
                                {/*                    <>*/}
                                {/*                      <Divider className="mt-10 mb-10"/>*/}
                                {/*                      <div className="col-md-6">*/}
                                {/*                        <h4>*/}
                                {/*                          <b onClick={()=>setAddressDetails(address)}>Label</b>*/}
                                {/*                        </h4>*/}
                                {/*                      </div>*/}
                                {/*                      <div className="col-md-6">*/}
                                {/*                        <h4 className="f-right">*/}
                                {/*                          <p onClick={()=>setAddressDetails(address)}> {address.label} </p>*/}
                                {/*                        </h4>*/}
                                {/*                      </div>*/}
                                {/*                    </>*/}
                                {/*                ))*/}

                                {/*                : <>*/}
                                {/*                    <h4>You have no address saved yet</h4>*/}
                                {/*                    <div className="col-md-3"/>*/}
                                {/*                    <div className='col-md-4 mt-4'>*/}
                                {/*                        <Button type='primary'>Add Address</Button>*/}
                                {/*                    </div>*/}
                                {/*                    <div className="col-md-4"/>*/}
                                {/*                </>}*/}
                                {/*        </div>*/}
                                {/*    </Card>*/}
                            </div>

                            <div className="col-md-8 mt-20">
                                <Card className="card-shadow">
                                    <h4>
                                        <b>SHOPPING BAG ({props.totalItems} ITEM )</b>
                                    </h4>
                                    {
                                        props.cartItems &&
                                        props.cartItems.map((item) =>
                                            <div className="row">
                                                <div className="col-md-3 center">
                                                    <img src={process.env.REACT_APP_BASE_IMAGE_PATH + item.image}
                                                        width="100px" height="100px" />
                                                </div>
                                                <div className="col-md-9">
                                                    <p className="mb-0 fs-12">{HTMLReactParser(item.name)}</p>
                                                    {/*<p className="mb-0 fs-12"><b>Pack Size:</b> <span className="grey"> 105 Pieces</span></p>*/}
                                                </div>
                                            </div>
                                        )}
                                </Card>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={1224}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="inventory_header flex">
                                    <h4 style={{ "margin-bottom": "auto" }}>
                                        <b>CHECKOUT</b>
                                    </h4>
                                </div>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-8">
                                {!isAuthenticated && !isGuest && (
                                    <Guest guestClick={setGuest} />
                                )}
                                {(isAuthenticated || isGuest) && (
                                    <ShippingAddress
                                        shippingClick={setShipping}
                                        guestClick={setGuest}
                                        cartItems={props.cartItems}
                                        addressDetails={!isAuthenticated ? fakeAddress : addressDetails}
                                    />
                                )}
                                {checkShippingAddress && <Payment shippingClick={setShipping} />}
                            </div>
                            <div className="col-md-4 bg-l-grey mt-20">
                                <Card className="card-shadow">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h4>
                                                <b>Order Summary</b>
                                            </h4>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="mb-0">Subtotal</p>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="f-right mb-0"><PriceFormat number={props.total} /></p>
                                        </div>
                                        <div className="col-md-6">
                                          <p className="mb-0">Shippings</p>
                                        </div>
                                        <div className="col-md-6">
                                          <p className="f-right mb-0">Free</p>
                                        </div>

                                        <Divider className="mt-10 mb-10" />

                                        <div className="col-md-6">
                                            <h4>
                                                <b>Total</b>
                                            </h4>
                                        </div>
                                        <div className="col-md-6">
                                            <h4 className="f-right">
                                                <b> <PriceFormat number={props.total} /></b>
                                            </h4>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-md-8 mt-20 mb-20">
                                <Card className="card-shadow">
                                    <h4>
                                        <b>SHOPPING BAG ({props.totalItems} ITEM )</b>
                                    </h4>
                                    {
                                        props.cartItems &&
                                        props.cartItems.map((item) =>
                                            <div className="row mt-20">
                                                <div className="col-md-3 center">
                                                    <img src={process.env.REACT_APP_BASE_IMAGE_PATH + item.image}
                                                        width="100px" height="100px" />
                                                </div>
                                                <div className="col-md-9 center">
                                                    <p className="mb-0 fs-12">{HTMLReactParser(item.name)}</p>
                                                    {/*<p className="mb-0 fs-12"><b>Pack Size:</b> <span className="grey"> 105 Pieces</span></p>*/}
                                                </div>
                                            </div>
                                        )}
                                </Card>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </section>
        </div>
    ) : (
        <div>
            <img className="CartImage" src={EmptyCart} />
            <div>
                <h1 className="message">Your Cart is Empty </h1>
            </div>
            <Link to={"/"}>
                <button className="space btn btn-checkout">Continue Shopping</button>
            </Link>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.addedItems,
        total: state.cartReducer.total,
        totalItems: state.cartReducer.totalItems,
    };
};
export default connect(mapStateToProps)(CheckOut);
