import React from 'react'
import "./Features.css"
import block from '../../../assets/images/footer-block1.png'
import block2 from '../../../assets/images/footer-block2.png'
import block3 from '../../../assets/images/footer-block3.png'
import 'bootstrap/dist/css/bootstrap.min.css';

const Features = () => {
    return (
        <div className="container">
            <div className='row'>
                <div className='col-sm-4 wow fadeInUp animated'>
                    <div className="column-inner">
                        <img src={block} alt="" />
                        <div className="feature-text">
                            <h2>100% AUTHENTIC GUARANTEE</h2>
                            <p>We only sell 100% authentic and genuine products or your money back. Shop with peace of mind knowing we're authorized dealerfor all the brands that we carry </p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4 wow fadeInUp animated'>
                    <div className="column-inner">
                        <img src={block2} alt="" />
                        <div className="feature-text">
                            <h2>CONVENIENT CASH ON DELIVERY</h2>
                            <p>Use our convenient Cash on Delivery that allows you to pay for your order with Cash at the time of delivery.Pay when you receive your order.</p>
                        </div>
                    </div>
                </div>
                <div className='col-sm-4 wow fadeInUp animated'>
                    <div className="column-inner">
                        <img src={block3} alt="" />
                        <div className="feature-text">
                            <h2>WE LOVE YOU. PERIOD!</h2>
                            <p>We offer close & personal customer service and expert advice. Simply put, we would like you to be 100% satisfied and answer any questions you may have.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features