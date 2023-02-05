import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../../assets/css/all.css'
import logo from '../../assets/images/abc.png';
import Search from '../../assets/images/search.svg';
import CloseIcon from '../../assets/images/close_icon.png';
// import CartIcons from '../../assets/images/baske.png';
// import user from '../../assets/images/user.png';
// import Brands11 from '../../assets/images/brand1 (1).png';
// import Brands12 from '../../assets/images/brand1 (2).png';
// import Brands13 from '../../assets/images/brand1 (3).png';
// import Brands14 from '../../assets/images/brand1 (4).png';
// import Brands15 from '../../assets/images/brand1 (5).png';
// import Brands16 from '../../assets/images/brand1 (6).png';
// import Brands17 from '../../assets/images/brand1 (7).png';
import { Modal } from "react-bootstrap";


class Header extends React.Component{
    state = {
        isOpen: false
    };
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
    render(){
        return(
            <div>
                <header>
                    <div className="tracting-bar">
                        <img src="https://cdn.healthxp.in/wp-content/uploads/2020/11/Strip-Banner-1300-x-4001.png"/>
                    </div>
                    <div className="topheader">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={logo} className="main-logo"/>
                                </div>
                                <div className="col-md-4">
                                    <form className="search-form">
                                        <input type="text" placeholder="Search"/>
                                        <button><img src={Search}/></button>
                                    </form>
                                </div>
                                <div className="col-md-5">
                                    
                                    <ul className="manu-items fff">
                                       <li>
                                           <a href="javascript:void(0)"  onClick={this.openModal}>
                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10.464 15.125q-.536-.5-1.036-1.179-.375-.518-.75-1.411-.286-.643-.482-1.571T8 9.339q0-.839.161-1.625.179-.839.464-1.5.286-.625.75-1.375.429-.589.964-1.161.375-.357 1.196-1 .518-.339 1.339-.714.679-.286 1.536-.464.768-.161 1.589-.161.857 0 1.625.161.804.179 1.5.464.821.375 1.339.714.643.429 1.196.982.589.589 1 1.179.339.518.714 1.375.286.679.464 1.536.161.786.161 1.589 0 .786-.179 1.625-.161.839-.482 1.571-.375.839-.768 1.393-.554.732-1.036 1.196.679.214 1.375.554.589.286 1.214.75.589.411 1.089.911.625.625.982 1.107.357.518.75 1.25.375.643.589 1.339.268.768.375 1.429.089.625.089 1.536v6.661h-24V24q0-.893.125-1.536.196-.911.339-1.429.161-.464.607-1.339.464-.804.768-1.232.304-.446.946-1.089.554-.571 1.089-.946.589-.411 1.25-.75.679-.357 1.339-.554zM6.661 28H25.34v-4q0-.75-.125-1.304-.179-.768-.393-1.286-.179-.446-.625-1.125-.357-.571-.821-1-.393-.464-.964-.839-.643-.411-1.161-.607-.571-.25-1.25-.375-.554-.125-1.339-.125h-5.321q-.75 0-1.304.125-.696.143-1.286.375-.464.179-1.125.607-.482.321-1 .839-.482.482-.804.964-.429.696-.643 1.161-.179.5-.357 1.25-.161.696-.161 1.339v4zM16 4q-1.089 0-2.071.411-.929.375-1.714 1.161-.732.732-1.143 1.714-.411.929-.411 2.054 0 1.107.411 2.036.411.982 1.143 1.714.804.804 1.714 1.196.964.375 2.071.375 1.161 0 2.071-.375.911-.411 1.714-1.196.732-.732 1.143-1.714.411-.929.411-2.036 0-1.125-.411-2.054-.411-.982-1.143-1.714-.786-.786-1.714-1.161Q17.142 4 16 4z" fill="#000"/></svg> <span>Account</span>
                                           </a>
                                       </li>
                                       <li>
                                           <a href="">
                                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M10.571 6.286q-.232 0-.411.036h-.196q-.143 0-.179.018-.125 0-.375.071-.036 0-.17.036t-.241.054q-.821.214-1.554.714t-1.5 1.321q-.768.768-1.125 1.964-.375 1.25-.375 2.714 0 .768.125 1.446.161.679.393 1.25.196.482.607 1.161.268.411.75 1.054.393.482.875.964.536.536.964.875.286.196 1 .821.393.321.929.714l.482.375q.304.232.911.705t.929.705q1.196.839 1.714 1.161.268.214.714.464.464.286.571.375.536.375.589.375h.036q.071 0 .304-.161.357-.214.571-.375.054-.036.321-.205t.429-.259q.464-.321.839-.571.125-.107.464-.304.286-.196.464-.339.607-.375.982-.661.125-.089.893-.661.625-.446.786-.554.143-.107.304-.232t.357-.277.304-.241l.982-.821q.536-.393.929-.839l.839-.946q.5-.625.732-1.054.304-.643.518-1.196.232-.625.375-1.268.125-.607.125-1.536-.018-1.179-.304-2.375-.232-1.036-.839-2-.536-.857-1.375-1.464-.893-.625-1.821-.875-1.071-.232-1.75-.232-.696.018-1.714.321-.768.232-1.661.786-.804.554-1.411 1.25l-.679.768-.661-.768q-.411-.482-.964-.911-.607-.5-1.125-.732-.554-.286-1.321-.464-.571-.143-1.357-.179zm5.34 21.285l-.625-.286-.714-.446-.661-.429-.75-.464q-.696-.446-1.821-1.25-1.464-1.107-1.875-1.411l-.429-.339q-.036-.018-.089-.063l-.161-.134-.196-.161-.286-.223-.268-.205q-.571-.411-1.089-.875-.661-.571-1.036-1-.375-.375-1-1.125-.393-.464-.875-1.25-.339-.5-.75-1.411-.286-.679-.464-1.554-.161-.804-.161-1.75.018-.893.161-1.786.143-.75.393-1.589.196-.518.607-1.357.286-.536.768-1.125.321-.393.875-.893.554-.446 1-.75.554-.304 1.071-.536.446-.232 1.036-.411l.464-.054q.268-.107.5-.107.161-.036.5-.054.214-.036.5-.036.786 0 1.554.161t1.482.429q.393.161 1.339.732.679.482 1.125.893.768-.696 1.714-1.25.964-.536 1.911-.75 1.018-.268 2.036-.268t2 .268q.5.161 1.25.482.625.268 1.125.643.536.375.964.857.536.643.786 1 .482.786.643 1.143.321.679.482 1.321.214.768.268 1.429.125.696.125 1.536 0 1.018-.143 1.821-.143.929-.446 1.625-.196.571-.661 1.393-.411.732-.839 1.286-.607.732-.964 1.089-.607.625-1.036.982-.286.268-1.054.875l-.25.188-.366.286-.384.295q-.482.357-.696.5-.321.268-.911.661-.143.125-.5.339-.393.304-.5.357-.071.071-.429.304-.482.339-.589.411-.196.143-.429.295t-.366.232-.188.134q-.25.125-.893.518-.161.107-.33.214t-.25.161-.116.071q-.196.143-.429.179z" fill="#000"/></svg><span>My Items</span>
                                           </a>
                                       </li>
                                       <li class="cart-manu">
                                           <a href="#">
                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M6.661 9.375V5.339H4q-.357 0-.536-.089-.25-.125-.411-.286-.179-.179-.304-.429-.089-.179-.089-.536t.089-.536q.107-.214.286-.393.214-.214.429-.321.179-.089.536-.089h5.339v6.679h20V22.66H6.66V9.374zM9.339 20H26.66v-8H9.339zm4 6.661q0 .571-.179 1.036-.179.5-.589.875-.375.393-.893.589-.464.179-1.018.179-.536 0-1-.179t-.875-.589q-.429-.411-.589-.875Q8 27.197 8 26.661q0-.5.196-1 .179-.464.589-.875t.875-.589q.5-.196 1-.196.518 0 1.018.196.464.161.875.589.429.429.607.875.179.464.179 1zm12 2.678q-.554 0-1.018-.179-.5-.179-.875-.589-.429-.411-.607-.875t-.179-1.036q0-.536.179-1 .179-.446.607-.875.411-.429.875-.589.5-.196 1.018-.196.5 0 1 .196.464.179.875.589t.589.875q.196.5.196 1 0 .536-.196 1.036-.161.464-.589.875-.411.411-.875.589t-1 .179z" fill="#000"/></svg>
                                           <span className="item-counter">0</span>
                                           </a>
                                           <div className="cart-dropdown">
                                                <div className="cart-header">
                                                    <h5>1 Item in your Cart</h5>
                                                </div>
                                                <div className="cart-body">
                                                    <div className="cart-repeater">
                                                        <div className="cart-row">
                                                            <img src=""/>
                                                        </div>
                                                        <div className="cart-contents">
                                                            <a href="">
                                                                <span>Dymatize Nutrition</span>
                                                                ISO100 Hydrolyzed 100% Whey Protein Isolate - Natural Vanilla (1.6 Lbs. / 24 Servings)
                                                            </a>
                                                            <h6>Qty : 1</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cart-footr">
                                                    <h5>Subtotal : $156</h5>
                                                    <div className="checkout-btn">
                                                        <a href="#" className="btn btn-checkouts">Checkout</a>
                                                    </div>
                                                </div>
                                           </div>
                                       </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-manu-bar">
                        <div className="container-fluid">
                        <ul className="main-manu">
                            <li>
                                <a href="" className="active">Home</a>
                            </li>
                            <li>
                                <a href="">Vitamins & Supplements
                                    <ul className="subdropdown">
                                        <li>
                                            <a href="#">COVID-19</a>
                                        </li>
                                        <li>
                                            <a href="">By Benefit 
                                            <ul className="second-manu">
                                                <li>
                                                    <a href="#">COVID-19</a>
                                                </li>
                                                <li>
                                                    <a href="">By Benefit </a>
                                                </li>
                                                <li>
                                                    <a href="">By Benefit </a>
                                                </li>
                                            </ul>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">By Benefit </a>
                                        </li>
                                        <li>
                                            <a href="">By Benefit </a>
                                        </li>
                                    </ul>
                                </a>
                            </li>
                            <li>
                                <a href="">Bestsellers</a>
                            </li>
                            <li>
                                <a href="">Shop By Brand</a>
                            </li>
                            <li>
                                <a href="">Contact</a>
                            </li>
                            <li>
                                <a href="">Shop</a>
                            </li>
                           
                        </ul>
                        </div>
                    </div>
                </header>
                <Modal show={this.state.isOpen} >
                    <div className="modal-content">
                        <button type="button" onClick={this.closeModal} className="modal-close" ><img src={CloseIcon}/></button>
                        <div className="login-form-row">
                            <div className="login-column login-column1">
                                <div className="modal-titles">
                                    <h4>Log in</h4>
                                    <ul>
                                        <li>
                                            <img src="https://img6.hkrtcdn.com/react/static/media/signupFlow/white-bg-tick.svg" className="mr-2"/>Get personal fitness expert advice
                                        </li>
                                        <li>
                                            <img src="https://img6.hkrtcdn.com/react/static/media/signupFlow/white-bg-tick.svg" className="mr-2"/>Earn HK cash on every order
                                        </li>
                                        <li>
                                            <img src="https://img6.hkrtcdn.com/react/static/media/signupFlow/white-bg-tick.svg" className="mr-2"/>Get personal fitness expert advice
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        
                            <div className="login-column">
                                <div className="login-form">
                                    <div className="login-row">
                                        <div className="login-field">
                                            <input  type="email" className="genreal-field" placeholder="Username or Email"/>
                                        </div>
                                    </div>
                                    <div className="login-row">
                                        <div className="login-field">
                                            <input  type="password" className="genreal-field" placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div className="login-row">
                                        <div className="login-field">
                                            <button type="button"  className="login-blue">Log in</button>
                                        </div>
                                    </div>
                                    <div className="forgot-password">
                                        <a href="#">Forgot Password?</a>
                                        <a href="#">Not Memeber Yet <span>SignUp</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
                <Modal className="medium-modal" show={this.state.isOpen} >
                    <div className="modal-content">
                        <button type="button" onClick={this.closeModal} className="modal-close" ><img src={CloseIcon}/></button>
                       
                        <div className="login-form-row">
                            <div className="login-column login-column1">
                                <div className="modal-titles">
                                    <h4>Sign Up</h4>
                                    <ul>
                                        <li>
                                            <img src="https://img6.hkrtcdn.com/react/static/media/signupFlow/white-bg-tick.svg" className="mr-2"/>Get personal fitness expert advice
                                        </li>
                                        <li>
                                            <img src="https://img6.hkrtcdn.com/react/static/media/signupFlow/white-bg-tick.svg" className="mr-2"/>Earn HK cash on every order
                                        </li>
                                        <li>
                                            <img src="https://img6.hkrtcdn.com/react/static/media/signupFlow/white-bg-tick.svg" className="mr-2"/>Get personal fitness expert advice
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        
                            <div className="login-column">
                                
                                <div className="login-form">
                                <div className="login-row">
                                    <div className="login-field">
                                        <input  type="text" className="genreal-field" placeholder="Username "/>
                                    </div>
                                    <div className="login-field">
                                        <input  type="email" className="genreal-field" placeholder="Email"/>
                                    </div>
                                </div>
                                <div className="login-row">
                                    <div className="login-field">
                                        <input  type="password" className="genreal-field" placeholder="Password"/>
                                    </div>
                                </div>
                                <div className="login-row">
                                    <div className="login-field">
                                        <input  type="password" className="genreal-field" placeholder="Conferm Password"/>
                                    </div>
                                </div>
                                <div className="login-row">
                                    <div className="login-field">
                                        <button type="button"  className="login-blue">SignUp</button>
                                    </div>
                                </div>
                                <div className="forgot-password">
                                    <a href="#">Forgot Password?</a>
                                    <a href="#">Alreay Memeber <span>SignIn</span></a>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Header;