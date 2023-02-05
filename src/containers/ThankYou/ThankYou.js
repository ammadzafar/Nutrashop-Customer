import {Card} from 'antd'
import {Link, useParams, useLocation, useHistory} from 'react-router-dom'
import React,{ useEffect , useState} from "react";
import {message} from "antd"
import axios from "axios";
import './ThankYou.css'
import {useSelector} from "react-redux";
const ThankYou=()=>{

    const {push} = useHistory()
    const {isAuthenticated} = useSelector(({auth}) => auth)
    // useEffect(()=>{
    //     !isAuthenticated && push("/")
    // })
    const {order_no,name}=useParams()
    const queryParams = new URLSearchParams(window.location.search);
    const merchant_order_id = queryParams.get('merchant_order_id');
    let success = queryParams.get('success');
    const type = queryParams.get('order_id');
    console.log(order_no, name,success, type,merchant_order_id)

    // useEffect(()=>{
    //     console.log(success)
    //     if(success === "true"){
    //        let newSuccess = true
    //         console.log(newSuccess)
    //         updateQisstPayOrderApi(newSuccess)}
    //     else{
    //         let newSuccess = false
    //         updateQisstPayOrderApi(newSuccess)
    //         console.log(newSuccess)
    //     }
    // })
    // const updateQisstPayOrderApi=(success)=>{
    //     let qisstPay = new FormData();
    //     type !== null && qisstPay.append("qisstpayOrderId", type);
    //     qisstPay.append("success", success);
    //     axios.post(`/orders/cb/payment/${order_no}` ,qisstPay).then(success=>{
    //         console.log(success)
    //         message.success("Order Placed SuccessFull!")
    //         setTimeout(window.location.href=(`${process.env.REACT_APP_BASE_CALLBACK_PATH}thank-you/${order_no}/${name}`),5000)
    //     }).catch(err=>{
    //         console.log(err)
    //     })
    // }
    return(
        <div className="text-md-center">
            <Card
                className=" thank-card"
                type="inner"
                title={`Thank You ${name}`}
            >
                <h6 className="py-3">Your order has been placed successfully.</h6>
                <h6>Order # {order_no}</h6>
            </Card>
            <Link to={"/"} className="mb-5">
                <div  className="btn-flex-end button-size">
                    <div className=" btn-rows">
                        <button>Continue Shopping</button>
                    </div>
                </div>
            </Link>
        </div>

    )
}
export default ThankYou

