import React from "react";

const Payment=(props)=>{
    return(
        <div className="step-repeater">
            <div className="steps-head">
                <div className="">
                    <h3><span>3</span>Payment, Promotions and Awards</h3>
                </div>
            </div>
            {/*<div className="shipping-address">*/}
            {/*    <div className="shiiping-details"><h4>BILLING ADDRESS</h4></div>*/}
            {/*    <div className="billing-infos">*/}
            {/*        <h6>Lorem Ipsum</h6>*/}
            {/*        <h6>USA .305</h6>*/}
            {/*        <h6>+9232148959</h6>*/}
            {/*        <h6><span onClick={props.shippingClick}>Edit</span></h6>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="shipping-address">
                <div className="shiiping-details"><h4>CREDIT & DEBIT CARDS</h4></div>
                <div className="checkout-options">
                    <div className="radio-btn">
                        <input type="radio" name="card-option" checked={true}/>
                        <label>Cash on Delivery</label>
                    </div>
                    {/*<div className="radio-btn">*/}
                    {/*    <input type="radio" name="card-option"/>*/}
                    {/*    <label>Credit Card</label>*/}
                    {/*</div>*/}
                </div>
                {/*<div className="shipping-rows">*/}
                {/*    <label>Card Number:</label>*/}
                {/*    <input type="text" className="full-width"/>*/}
                {/*</div>*/}
                {/*<div className="shipping-three-rows">*/}
                {/*    <div className="three-column">*/}
                {/*        <label>Expiration Month:</label>*/}
                {/*        <select>*/}
                {/*            <option>*/}
                {/*                Month*/}
                {/*            </option>*/}
                {/*        </select>*/}
                {/*    </div>*/}
                {/*    <div className="three-column">*/}
                {/*        <label>Expiration Year:</label>*/}
                {/*        <select>*/}
                {/*            <option>*/}
                {/*                Jan*/}
                {/*            </option>*/}
                {/*        </select>*/}
                {/*    </div>*/}
                {/*    <div className="three-column">*/}
                {/*        <label>Security Code:</label>*/}
                {/*        <input type="text" className="full-width"/>*/}
                {/*    </div>*/}

                {/*</div>*/}
                {/*<div className="shipping-rows">*/}
                {/*    <label>Card Number:</label>*/}
                {/*    <input type="text" className="full-width"/>*/}
                {/*</div>*/}
                <div className="shipping-column-row">
                <div className="checkout-btns btn-rows">
                    <button onClick={props.shippingClick}>Back</button>
                </div>
                <div className="checkout-btns btn-rows">
                    <button>Submit</button>
                </div>
                </div>
            </div>

        </div>
    )
}
export default Payment
