import React from "react"

class About extends React.Component{
    render(){

        return( 
            <div>
                   <section className="site-main contact-us">
                        <div className="container">
                            <div className="site-inner-content contact-inner">
                                <h4>Contact Us</h4>
                                <div className="contact-flex">
                                    <div className="contact-info-col">
                                        <h5>My Vitamin Store</h5>
                                        <span>Lahore</span>
                                        <a href="tel:03111542666">Tel: 03111542666</a>
                                        <a href="mailto:contact@myvitaminstore.pk">Email: contact@myvitaminstore.pk</a>
                                    </div>
                                    <div className="contact-form-col">
                                        <h5>SEND US A MESSAGE</h5>
                                        <form>
                                            <div className="input-container">
                                                <input type="email" className="form-field"  placeholder="enter your email*" />
                                            </div>
                                            <div className="input-container">
                                                <input type="text" className="form-field"  placeholder="enter your name*" />
                                            </div>
                                            <div className="input-container">
                                                <input type="tel" className="form-field" placeholder="enter your phone number*" />
                                            </div>
                                            <div className="input-container">
                                                <input type="text" className="form-field" placeholder="subject*" />
                                            </div>
                                            <div className="input-container">
                                                <textarea placeholder="message*" className="message"></textarea>
                                            </div>
                                            <input type="submit" value="send" className="btn-submit"/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
            </div>
        )

    }
}

export default About;