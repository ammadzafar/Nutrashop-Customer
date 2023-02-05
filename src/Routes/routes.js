import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { connect } from "react-redux"
import Layout from "../Layout/Layout";
import Home from "../containers/Home/Home";
import Product from "../containers/ProductDetail/ProductDetail";
import Cart from "../containers/Cart/Cart"
import CheckOut from "../containers/Checkout/Checkout";
import CollectionProducts from "../containers/CollectionProducts/CollectionProducts";
import BrandProducts from "../containers/BrandProducts/BrandProducts";
import ThankYou from "../containers/ThankYou/ThankYou";
import HowToOrder from "../component/Footer/HowToOrder";
import Account from "../containers/Account/Account";
import WishList from "../containers/WishList/WishList";
import PrivacyPolicy from "../component/Footer/PrivacyPolicy";
import About from "../component/Footer/About";
import Contact from "../component/Footer/Contact";
import Payment from "../component/Footer/Payment";
import Shipping from "../component/Footer/Shipping";
import ExchangePolicy from "../component/Footer/ExchangePolicy";
import OrderDetailView from '../component/OrderDetailView/OrderDetailView';
import ScrollToTop from './ScrollToTop/ScrollToTop'
import { Helmet } from 'react-helmet';

function Routes() {
    return (
        <BrowserRouter>
            


            

            <Switch>
                <Layout>
                    <Route component={({ match }) =>
                        <div>
                            <ScrollToTop>
                                <Route exact path="/" component={Home} />
                                <Route path="/product-category/:slug" exact component={CollectionProducts} />
                                <Route path="/product-brands/:slug" exact component={BrandProducts} />
                                <Route path="/product/:slug" exact component={Product} />
                                <Route path="/cart" exact component={Cart} />
                                <Route path="/checkout" component={CheckOut} />
                                <Route path="/thank-you/:order_no/:name" exact component={ThankYou} />
                                <Route path="/how-to-order" exact component={HowToOrder} />
                                <Route path="/privacy-policy" exact component={PrivacyPolicy} />
                                <Route path="/about" exact component={About} />
                                <Route path="/contact" exact component={Contact} />
                                <Route path="/payment" exact component={Payment} />
                                <Route path="/shipping" exact component={Shipping} />
                                <Route path="/exchange-policy" exact component={ExchangePolicy} />
                                <Route path="/wishlist" exact component={WishList} />
                                <Route path="/my-account" exact component={Account} />
                                <Route path="/order-detail-view/:id" exact component={OrderDetailView} />
                            </ScrollToTop>
                        </div>
                    } />
                </Layout>


            </Switch>
        </BrowserRouter>
    )

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }

}
export default connect(mapStateToProps)(Routes);
