import React from "react"

class HowToOrder extends React.Component{
    render(){

        return(
            <div>
                 <section class="site-main">
                    <div class="container">
                        <div class="site-inner-content">
                            <h4>How to Order</h4>
                            <p>Placing an order on My Nutrashop is fairly simple and pretty self explanatory, however, below are the detailed steps on how you can place an order online.</p>
                            <ul>
                                <li>Click on the product and go to the detail page of the product that you want to order.</li>
                                <li>Click on Add To Cart button on the product detail page
                                </li>
                                <li>Click on Proceed To Checkout.</li>
                                <li>Add your personal details including your address for delivery of your order.</li>
                                <li>Click on Continue To Payment.</li>
                                <li>Select Payment Option (Cash On Delivery  |  Credit Card)</li>
                                <li>Click on Place Order</li>
                            </ul>
                        </div>
                        <div class="site-inner-content">
                            <h5>Return / Exchange Process</h5>
                            <ol>
                                <li>Immediately inform us about the product you want to return within 7 days of receiving the product by writing to contact@myvitaminstore.pk with your order number in the subject.</li>
                                <li>Ship the product to our store address (My Vitamin Store, 101-B III, M.M Alam Road, Gulberg,
                                </li>
                                <li>Make sure to include the invoice in the return parcel.</li>
                                <li>We will process your return within 3 working days of receiving your return order.</li>
                            </ol>
                        </div>
                        <div class="site-inner-content">
                            <h5>Return Payment</h5>
                            <ul>
                                <li>In case the product is shipped back to our store via courier, the payment will be transferred to your online bank account (that you will have to provide us by emailing at contact@myvitaminstore.pk)</li>
                                <li>In case your return the product by hand at the store, the payment can be returned by cash.
                                </li>
                            </ul>
                            <p>In case of any issues/concerns, please write to contact@myvitaminstore.pk with your order number in the subject. </p>
                        </div>
                    </div>
                </section>
            </div>
        )

    }
}

export default HowToOrder;
