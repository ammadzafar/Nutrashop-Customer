import {Tabs, Col, Card, Row} from 'antd';
import "./Account.css"
import MediaQuery from 'react-responsive'
import {Link, useHistory} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import RegistrationForm from "./PersonalDetail/PersonalDetail";
import axios from "axios";
import moment from "moment"
import AccessDetails from "./AccessDetails/AccessDetails";
import AddressDetail from "./AddressDetail/AddressDetail";
const {TabPane} = Tabs;
const Account = () => {
    const {isAuthenticated, auth} = useSelector(({auth}) => auth)
    const id = auth.id
    const [activeTab, setActiveTab] = useState("1")
    const [personalData, setPersonalData] = useState({})
    const [orderData, setOrderData] = useState([])

    const getNewData = (key) => {
        setActiveTab(key)
    }
    useEffect(() => {
        axios.get("/orders/" + id).then(responsne => {
            let order = responsne.data.map(order => (<React.Fragment key={order.id.toString()}>
                <div style={{"background": "#eff0f4", "padding": "10px 10px 20px 10px"}}>
                    <Row>
                        <Col span={12}>
                            <p className="mb-0 fs0-9em ">Order:
                                <Link to={"/order-detail-view/" + order.id} style={{"color": "#1a9cb7"}}>
                                    {order.order_no}
                                </Link>
                            </p>
                            <p className="mb-0 fs0-8em grey-dark">Placed on:
                                {moment(order.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p>
                        </Col>
                        <Col className="m-auto" span={12}>
                            <Link className="capsule-lg float-r" to={"/order-detail-view/" + order.id}><span
                                className="white">View Order</span></Link>
                        </Col>
                    </Row>
                    {order.OrderVariants.map(orderProduct => (<React.Fragment key={orderProduct.id.toString()}>
                        <hr className="mt-10"/>
                        <Row className="account-order pl-20 pr-20">
                            <Col span={3}>
                                <Link to={`/product/` + orderProduct.Variant.Product.slug}><img
                                    src={process.env.REACT_APP_BASE_IMAGE_PATH + orderProduct.Variant.Product.images[0].path}
                                    width="75px" height="75px" alt="image"/></Link>
                            </Col>
                            <Col span={9}>
                                <Link to={`/product/` + orderProduct.Variant.Product.slug}>
                                    <span>{orderProduct.Variant.Product.name}</span>
                                </Link>
                            </Col>
                            <Col span={3}>
                                <span><spam className="grey">Qty:</spam>
                                    {orderProduct.quantity}</span>
                            </Col>

                            <Col span={9}>
                                <span><p>
                                    {moment(order.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</p></span>
                            </Col>
                        </Row>
                        <hr className="w56-5em"/>
                    </React.Fragment>))}
                </div>
                <br/>
            </React.Fragment>))
            setOrderData(order)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    useEffect(() => {
        if (activeTab !== "1") {
            axios.get("/customer/" + id).then(response => {
                setPersonalData(response.data)
            }).catch(err => console.log(err))
        }
    }, [activeTab])
    const history = useHistory()
    const changeActiveTab = () => {
        setActiveTab("1")
    }
    useEffect(() => {
        !isAuthenticated && history.push('/')
    }, [])

    return (
        <div className="site-card-wrapper" style={{"overflow": "hidden"}}>
            <MediaQuery minWidth={1224}>
                <Row>
                    <Col style={{"margin": "auto"}} span={16}>
                        <Card bordered={false}>
                            <Tabs activeKey={activeTab} tabPosition="top" onChange={getNewData}>
                                <TabPane tab="Orders" key="1">
                                    {orderData}
                                </TabPane>
                                <TabPane tab="Personal Details" key="2">
                                    <RegistrationForm data={personalData}/>
                                </TabPane>
                                <TabPane tab="Access Details" key="3">
                                    <AccessDetails/>
                                </TabPane>
                                {/*<TabPane tab="Address Details" key="4">*/}
                                {/*    <AddressDetail/>*/}
                                {/*</TabPane>*/}
                            </Tabs>
                        </Card>
                    </Col>

                </Row>
            </MediaQuery>
            <MediaQuery maxWidth={1224}>

                <Row>
                    <Col span={24}>
                        <Card bordered={false}>
                            <Tabs activeKey={activeTab} tabPosition="top" onChange={getNewData}>
                                <TabPane tab="Orders" key="1">
                                    {orderData}
                                </TabPane>
                                <TabPane tab="Personal Details" key="2">
                                    <RegistrationForm data={personalData}/>
                                </TabPane>
                                <TabPane tab="Access Details" key="3">
                                    <AccessDetails/>
                                </TabPane>
                            </Tabs>
                        </Card>
                    </Col>

                </Row>
            </MediaQuery>
        </div>
    )
}
export default Account
