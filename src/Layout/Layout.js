import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Whatsapp from "../component/whatsapp";
import Messenger from "../component/messenger";
class Layout extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {/* Same as */}
                <ToastContainer />
                {this.props.children}
                <Footer/>
                <Whatsapp />
                {/*<Messenger/>*/}
            </div>
        )
    }
}
export default  Layout
