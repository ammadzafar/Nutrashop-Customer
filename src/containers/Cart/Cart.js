import React from 'react';
import {Link} from "react-router-dom";
import EmptyCart from '../../assets/images/2cart1.png'
import {connect} from "react-redux";
import {increment, decrement, remove} from "../../store/slices/cartSlice";
import PriceFormat from "../../component/PriceFormat/PriceFormat";
import "./Cart.css"
import ReactHtmlParser from 'react-html-parser';

class Cart extends React.Component {
    constructor() {
        super();
        this.state = {}
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.remove = this.remove.bind(this);
    }

    increment(id) {
        this.props.increment(id)
    }

    decrement(id) {
        this.props.decrement(id)

    }

    remove(id) {
        this.props.remove(id)

    }

    render() {
        let items = this.props.cartItems
        return (
            <div className='cartimg'>
                {items.length ? <section className="invetntory_wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="inventory_content">
                                        <div className="inventory_header flex">
                                            <h4 style={{"margin-bottom": "auto"}}><b>SHOPPING BASKET</b></h4>
                                        </div>
                                        <div className="cart-content table-responsive">
                                            <table>
                                                <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Quantity</th>
                                                    <th>Unit Price</th>
                                                    <th>Amount</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    items.map((item) =>
                                                        <React.Fragment key={item.id.toString()}>
                                                            <tr>

                                                                <td>
                                                                    <div className="single_cart_item flex">
                                                                        <div className="cart_item_image"
                                                                             style={{backgroundImage: `url(${process.env.REACT_APP_BASE_IMAGE_PATH + item.image})`}}></div>
                                                                        <div className="cart_item_text">
                                                                            <span className="car-product-name">{ReactHtmlParser(item.name)}</span>
                                                                            <div className="cart_actions">

                                                                                <h6 className="cross">{item.quantity} x {item.price}
                                                                                </h6>
                                                                            </div>
                                                                            <div onClick={() => this.remove(item.id)}
                                                                                 className="cart_actions">

                                                                                <h6 style={{color: "red"}}>
                                                                                    remove
                                                                                </h6>
                                                                            </div>
                                                                        </div>
                                                                        <br/>

                                                                    </div>

                                                                </td>
                                                                <td>
                                                                    <div className="quantity-selector cart">
                                                                    <span onClick={() => this.decrement(item.id)}
                                                                          className="qtyminus input-number-decrement"
                                                                          field='quantity'>–</span>
                                                                        <input type='text' name='quantity'
                                                                               value={item.quantity}
                                                                               className='qty input-number'/>
                                                                        <span onClick={() => this.increment(item.id)}
                                                                              className="input-number-increment qtyplus"
                                                                              field='quantity'>+</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <PriceFormat number={item.price}/>
                                                                </td>
                                                                <td>
                                                                    <PriceFormat number={item.price * item.quantity}/>
                                                                </td>
                                                            </tr>
                                                        </React.Fragment>
                                                    )
                                                }

                                                </tbody>
                                                <tfoot>
                                                <tr>
                                                    <td colSpan="3">
                                                        <b style={{float: "right"}}>Total</b></td>
                                                    <td><b>
                                                        <PriceFormat number={this.props.total}/> </b></td>
                                                </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="container mt-4 mb-4">
                            <Link to={'/checkout'}>
                                <button className=' btn btn-checkout'>Proceed To Checkout</button>
                            </Link>

                        </div>
                    </section>
                    :
                    <div>
                        <img className='CartImage' src={EmptyCart}/>
                        <div><h1 className="message">Your Cart is Empty </h1></div>
                        <Link to={'/'}>
                            <button className='space btn btn-checkout'>Continue Shopping</button>
                        </Link>

                    </div>
                }


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cartReducer.addedItems,
        total: state.cartReducer.total,
        totalItems: state.cartReducer.totalItems
    }

}
const mapDispatchToProps = dispatch => {
    return {
        decrement: (id) => {
            dispatch(decrement({id}))
        },
        increment: (id) => {
            dispatch(increment({id}))
        },
        remove: (id) => {
            dispatch(remove({id}))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
