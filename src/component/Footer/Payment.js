import React from "react"

class About extends React.Component{
    render(){

        return(
            <div>
                   <section class="site-main">
                        <div class="container">
                            <div class="site-inner-content">
                                <h4>Payment Options</h4>
                                <h5>Credit / Debit Card:</h5>
                                <p>At checkout select Credit Card as payment option, you will be redirected to our online payment gateway (Stripe) website for transaction.</p>
                                <h6>Cash on Delivery</h6>
                                <p>Payment is to be made at the time of delivery.</p>
                            </div>
                        </div>
                    </section>
            </div>
        )

    }
}

export default About;
