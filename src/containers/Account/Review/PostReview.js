import React, {useState} from "react"
import {Col, message, Modal, Row} from "antd";
import Rating from "../../../component/Rating/Rating";
import {useSelector} from "react-redux";
import axios from "axios";
import {useForm} from "react-hook-form";

const PostReview = (props) => {
    const {auth} = useSelector(({auth}) => auth)
    const {register, handleSubmit, errors} = useForm();
    const handleChange = (a) => {
        setValue(a)
    }
    const updatingOrderViewDetail = (newRate) => {
        props.orderViewCallBack(newRate)
    }
    const [value, setValue] = useState("")
    const [loading, setLoading] = useState("")
    const onSubmit = (data) => {

        let review = new FormData()
        if(!value){
            message.error("Please select star rating")
            return
        }
        review.append("orderVariantId", props.properties.orderVariantId)
        review.append("customerId", auth.id)
        review.append("productId", props.properties.ProductId)
        review.append("rating", value)
        review.append("description", data.description)
        review.append("reviewTitle", data.reviewTitle)
        setLoading(true)
        axios.post('/reviews', review).then(success => {
            message.success("Review Added Successfully")
            props.done()
            let newRate = parseInt(success.data.rating)
            updatingOrderViewDetail(newRate)
            setLoading(false)
        }).catch(err => {
            console.log(err)
            message.error("Unable to add Review")
            setLoading(false)
        })
    }
    return <Modal
        title="Write Review"
        visible={props.visible}
        onCancel={props.cancel}
        properties={props.properties}
        images={props.images}
        width={600}
        footer=""
    >
        {/*<p className="fs-14 mb-0 grey">Delivered on 16 Jun 2021</p>*/}
        <p className="fs-12 ">Rate and review purchased product:</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Row className="pl-20 pr-20">
                <Col span={3}>
                    {props.properties.length !== {} ? <img
                        src={process.env.REACT_APP_BASE_IMAGE_PATH + props.images}
                        width="56px"
                        height="56px"
                        alt="image"
                    /> : ""}
                </Col>

                <Col span={21}>
                    <p className="fs-14 mb-0">{props.properties.name}</p>
                    <p className="fs-12 mb-0">Color Family:Multicolor</p>
                    <Rating saveRating={handleChange} value={value} className="fs-2em"/>
                </Col>
                <Col className="pt-10" span={24}>
                    <h5>Review Title</h5>
                    <>
                        <input
                            type="text"
                            name="reviewTitle"
                            className="full-width"
                            ref={register({required: true})}
                        />
                        {errors.reviewTitle && <p className="error">This field is required</p>}
                    </>
                </Col>

                <Col className="pt-10" span={24}>
                    <h5>Review Description</h5>
                    <>
                        <textarea rows={4} placeholder="Please Enter Your Review Description..."
                                  name='description'
                                  className="full-width"
                                  ref={register({required: true})}
                        />
                        {errors.description && <p className="error">This field is required</p>}
                    </>
                </Col>

                <div className=" btn-rows pb-3 pt-3">
                    <button type="submit">{loading && <i className="fas fa-spinner fa-pulse"></i>} Add Review</button>
                </div>
            </Row>
        </form>
    </Modal>
}
export default PostReview