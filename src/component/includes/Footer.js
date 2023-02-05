import React from 'react';
// import Address from '../../assets/images/address.png';
// import Phone from '../../assets/images/phone.png';
// import Web from '../../assets/images/web.png';
// import Email from '../../assets/images/email.png';
// import AngleRight from '../../assets/images/angle-right.png';
class Footer extends React.Component{
    render(){
        return(
            <div>
              <footer className="main-footer">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-3">
                              <div className="footer-lists">
                                <div className="footer-title">
                                    <h4>MY ACCOUNT</h4>
                                </div>
                                <ul className="">
                                    <li><a target="_self" href=""><span>My Account</span></a></li>
                                    <li><a target="_self" href=""><span>My Auto Delivery</span></a></li>
                                    <li><a target="_self" href=""><span>Gift Cards</span></a></li>
                                    <li><a target="_self" href=""><span>Order Tracking &amp; History</span></a></li>
                                    <li><a target="_self" href=""><span>Quick Reorder</span></a></li>
                                    <li><a target="_self" href=""><span>Order By Item Number</span></a></li>
                                    <li><a target="_self" href=""><span>My Healthy Awards</span></a></li>
                                </ul>
                              </div>
                          </div>
                          <div className="col-md-3">
                            <div className="footer-lists">
                                <div className="footer-title">
                                    <h4>Shop With Us</h4>
                                </div>   
                                <ul >
                                    <li><a target="_self" href=""><span>Store Locator</span></a></li>
                                    <li><a target="_self" href=""><span>Vitamin Shoppe Brand</span></a></li>
                                    <li><a target="_self" href=""><span>Quality Promise</span></a></li>
                                    <li><a target="_self" href=""><span>Certificate of Analysis</span></a></li>
                                    <li><a target="_self" href=""><span>About Healthy Awards</span></a></li>
                                    <li><a target="_self" href=""><span>FREE Nutrition Coaching</span></a></li>
                                    <li><a target="_self" href=""><span>About Auto Delivery</span></a></li>
                                    <li><a target="_self" href=""><span>Shipping Rates</span></a></li>
                                    <li><a target="_self" href=""><span>*Promotion Details &amp; Exclusions</span></a></li>
                                    <li><a target="_self" href=""><span>Returns</span></a></li>
                                </ul>  
                              </div>
                          </div>
                          <div className="col-md-3">
                            <div className="footer-lists">
                                <div className="footer-title">
                                    <h4>Corporate Information</h4>
                                </div>   
                                <ul className="hide-footer-list-wrapper">
                                    <li><a target="_self" href=""><span>Store Locator</span></a></li>
                                    <li><a target="_self" href=""><span>Vitamin Shoppe Brand</span></a></li>
                                    <li><a target="_self" href=""><span>Quality Promise</span></a></li>
                                    <li><a target="_self" href=""><span>Certificate of Analysis</span></a></li>
                                    <li><a target="_self" href=""><span>About Healthy Awards</span></a></li>
                                    <li><a target="_self" href=""><span>FREE Nutrition Coaching</span></a></li>
                                    <li><a target="_self" href=""><span>About Auto Delivery</span></a></li>
                                    <li><a target="_self" href=""><span>Shipping Rates</span></a></li>
                                    <li><a target="_self" href=""><span>Promotion Details &amp; Exclusions</span></a></li>
                                    <li><a target="_self" href=""><span>Returns</span></a></li>
                                </ul>  
                              </div>
                          </div>
                          <div className="col-md-3">
                                <div className="footer-lists">
                                    <div className="footer-title">
                                      <h4>Policies</h4>
                                    </div>
                                    <ul className="hide-footer-list-wrapper">
                                        <li><a target="_self" href=""><span>Accessibility Notice</span></a></li>
                                        <li><a href=""><span>CA Transparency In Supply Chains</span></a></li>
                                        <li><a target="_self" href=""><span>EU/Swiss-U.S. Privacy Shield: Consumer Privacy Policy</span></a></li>
                                        <li><a target="_self" href=""><span>Privacy Policy (Updated 1/31/2020)</span></a></li>
                                        <li><a target="_self" href=""><span>Terms of Use (Updated 11/08/2018)</span></a></li>
                                        </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </footer>
            </div>
        )
    }
}
export default Footer;