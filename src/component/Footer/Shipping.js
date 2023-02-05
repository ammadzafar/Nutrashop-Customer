import React from "react"

class About extends React.Component{
    render(){

        return( 
            <div>
                   <section class="site-main">
                        <div class="container">
                            <div class="site-inner-content">
                                <h4>Free Shipping</h4>
                                <p>Enjoy Free Shipping across Pakistan on all orders above PKR 1,500.</p>
                                <h6>Why charge a shipping cost on orders below PKR 1,500?</h6>
                                <p>It'll be unfair to expect free shipping on a 300 rupee order, after all, shipping has a cost too :)<br/>
                                To help us bring you Free Shipping, we have put a slight bar on the minimum order value to make it viable for us </p>
                                <h5>Note:</h5>
                                <ul>
                                    <li>Shipping is available all over Pakistan.</li>
                                    <li>Please allow maximum 3 working days for delivery (may change during special events or situations in the country).
                                    </li>
                                    <li>Goods will be delivered to your postal address given during check-out.</li>
                                </ul>
                                <h6>For Cash On Delivery Orders:</h6>
                                <p>Payment will be collected at the time of delivery.</p>
                            </div>
                        </div>
                    </section>
            </div>
        )

    }
}

export default About;