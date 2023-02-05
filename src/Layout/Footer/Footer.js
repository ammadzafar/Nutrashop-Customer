import React from 'react';
import { Link } from "react-router-dom";
class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <ul className="footer-list">
                                    {/*<li><Link to="/how-to-order"><span>How To Order</span></Link></li>*/}
                                    <li><Link to="/exchange-policy"><span>Exchange / Return Policy</span></Link></li>
                                    {/*<li><Link to="/shipping"><span>Free Shipping</span></Link></li>*/}
                                    <li><Link to="/payment"><span>Payment Options</span></Link></li>
                                    <li><Link to="privacy-policy"><span>Privacy Policy</span></Link></li>
                                    <li><Link to="/about"><span>About Us</span></Link></li>

                                </ul>
                                <div className='text-center'>PAKVITAMINS COPYRIGHTS @ 2022</div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}
export default Footer;
