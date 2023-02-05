import { message, Col, Row, Rate } from "antd";
import "./OrderDetailView.css";
import { Link , useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PostReview from "../../containers/Account/Review/PostReview";
import { useSelector } from "react-redux";
import OrderViewSkeleton from "../Skeletons/OrderDetailView";
import moment from "moment";

function OrderDetailView(props) {

  const {push} = useHistory()
  const {isAuthenticated} = useSelector(({auth}) => auth)
  const id = props.match.params.id
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [orderNo, setOrderNo] = useState("")
  const [placedOn, setPlacedOn] = useState("")
  const [orderData, setOrderData] = useState([])
  const [totalPrice, setTotalPrice] = useState("")
  const [orderReview, setOrderReview] = useState(0)
  const [properties, setProperties] = useState(null)
  const [images, setImages] = useState(null)

  useEffect(()=>{
    !isAuthenticated && push("/")
  })
  useEffect(() => {
    axios.get('/orders/single/' + id).then(response => {
      let totalPrice = 0
      response.data.OrderVariants.map(order => {
        totalPrice = totalPrice += order.Variant.price
      })
      setTotalPrice(response.data.amount)
      setOrderNo(response.data.order_no)
      setPlacedOn(response.data.createdAt)
      setOrderData(response.data)
    }).catch(err => {
      console.log(err)
      message.error(err)
    })
  }, [])



  const updateReviewState = (callback) => {
    setOrderReview(callback)
  }
  const showModal = (order,id) => {
    order.orderVariantId = id
    console.log('order',order)
    setProperties(order)
    setImages(order.variantImg[0].path)
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    orderData.length != 0 ?
      <div
        style={{ background: "#ececec" }}
        className="p-30 site-card-border-less-wrapper"
      >
        <div className="container">
          <div className="m-auto">
            <h4>Order Details</h4>
          </div>
        </div>

        <div className="container">
          <div className="card  m-auto">
            <div style={{ padding: "0px" }} className="card-body row">
              <div className="col-md-6">
                <Link to={"/my-account"}><p className="fs-14 m-0 p-3-10">
                  Order <span># {orderNo}</span>
                </p></Link>
                <p className="fs-12 m-0 p-0-10 grey">
                  Placed on {moment(placedOn).format('MMMM Do YYYY, h:mm:ss a')}
                </p>
              </div>
              <div className="col-md-6 m-auto">
                <p className="f-right m-0 fs-16 p-0-10">
                  <span className="grey">Total: </span>Rs. {totalPrice}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-10">
          <div className="card">
            <div style={{ padding: "0px" }} className="card-body row">
              <div className="col-md-12">
                <p className="fs-14 m-0 p-3-10">
                  <i class="fas fa-box"></i> Package 1
                </p>
                <p className="fs-12 m-0 p-0-10">
                  Sold by <span className="l-blue">Pakvitamins</span>
                </p>
              </div>
            </div>
            <hr className="mt-4 mb-4" />
            <div style={{ padding: "0px" }} className="card-body row">
              {/*<div className="col-md-12">*/}
              {/*  <p className="fs-14 m-0 p-3-10 fs-14">Delivered on 22 Jun 2021</p>*/}
              {/*</div>*/}

              {/*<div className="col-md-12 center pt-20">*/}
              {/*  <h1>Progress Bar</h1>*/}
              {/*</div>*/}

              <div className="col-md-2"></div>

              <div className="col-md-8 progress-statues-box">
                <div className="row order-review-para">
                  <div className="col-md-12 center">
                    <p className="fs-15">
                      Your package is in <span style={{color: "green", fontWeight:"bold",textTransform: 'uppercase'}}>{orderData.Status.name}</span> stage.<br /> Thank you for shopping at
                      Pakvitamins!
                    </p>
                  </div>
                </div>
              </div>
              {
                orderData.OrderVariants.map((order,index) => (<React.Fragment key={index}>
                  <div  className="col-md-12 pt-30 pb-30 " >
                    <Row gutter={[16, 24]} className="order-review-star center pl-20 pr-20">
                      <Col xs={24} md={6} span={3}>
                        <Link to={`/product/` + order.Variant.Product.slug}>
                          <img
                            src={process.env.REACT_APP_BASE_IMAGE_PATH + order.Variant.Product.images[0].path}
                            width="75px"
                            height="75px"
                            alt="image"
                          />
                        </Link>
                      </Col>
                      <Col xs={24} md={4} span={10}>
                        <span className="fs-14">
                          <Link to={`/product/` + order.Variant.Product.slug}>
                            {order.Variant.Product.name}
                          </Link>
                        </span>
                      </Col>
                      <Col xs={24} md={4} span={3}>
                        <span className="fs-14">Rs. {order.Variant.price}</span>
                      </Col>
                      <Col xs={24} md={4} span={3}>
                        <span>
                          <span className="grey fs-14">Qty:</span>
                          {order.quantity}
                        </span>
                      </Col>
                      <Col xs={24} md={6} span={5}>
                        <Link className="fs-14" onClick={() => showModal(order.Variant,order.id)} to="#">
                          {order.Variant.Product.reviews.length !== 0 ? (
                              <Rate
                                  disabled={true}
                                  defaultValue={order.Variant.Product.reviews.rating}
                              />) : [(orderReview !== 0 ? (
                              <Rate
                                  disabled={true}
                                  defaultValue={orderReview}
                              />) : "WRITE A REVIEW")]}
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </React.Fragment>))
              }
              {properties !== null ?
                  <PostReview
                  visible={isModalVisible}
                  orderViewCallBack={updateReviewState}
                  properties={properties}
                  cancel={handleCancel}
                  images={images}
                  done={handleOk}
              /> : ""}
            </div>
          </div>
        </div>
        <div className="container pt-10">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h4>Delivery At</h4>
                  <h5>Name : <span className="spanStyle">{orderData.customer.firstName + " " + orderData.customer.lastName}</span></h5>
                  <h5> Home Address:<span className="spanStyle"> {orderData.address}</span></h5>
                  <h5>City :<span className="spanStyle"> {orderData.city}</span></h5>
                  <h5>Phone No:<span className="spanStyle">{orderData.customer.phone}</span></h5>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <p className="fs-18 mb-0">Total Summary</p>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="mb-0 fs-14">Subtotal</p>
                    </div>

                    <div className="col-md-6 f-right">
                      <p className="f-right mb-0 fs-14">Rs. {totalPrice}</p>
                    </div>

                    {/*<div className="col-md-6">*/}
                    {/*  <p className="mb-0 fs-14">Shipping Fee</p>*/}
                    {/*</div>*/}

                    {/*<div className="col-md-6 f-right">*/}
                    {/*  <p className="f-right mb-0 fs-14">Rs. 119</p>*/}
                    {/*</div>*/}

                    {/*<div className="col-md-6">*/}
                    {/*  <p className="mb-0 fs-14">Shipping Fee Promotion</p>*/}
                    {/*</div>*/}

                    {/*<div className="col-md-6 f-right">*/}
                    {/*  <p className="f-right mb-0 fs-14">Rs. -50</p>*/}
                    {/*</div>*/}
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-md-6">
                      <p className="fs-14">Total</p>
                    </div>
                    <div className="col-md-6">
                      <p className="f-right fs-18">Rs.{totalPrice}</p>
                    </div>
                    {/*<div className="col-md-12">*/}
                    {/*  <p className="fs-14 mb-0">Paid by Credit/Debit Card</p>*/}
                    {/*</div>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> : <OrderViewSkeleton />
  );
}

export default OrderDetailView;
