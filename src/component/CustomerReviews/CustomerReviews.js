import React, {useEffect, useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsStarFill } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import { message, notification, Rate } from "antd";

import './CustomerReviews.css';
import axios from "axios";
function CustomerReviews() {
    const [reviews,setReviews]=useState([])
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
 useEffect(()=>{
     axios.get('/reviews/top/reviews').then((response)=>{
         setReviews(response.data)
     }).catch((error)=>{
         console.log(error)
     })
 },[])
    return (

            reviews.length !==0 && <div>
                <div className='reviews-service-container container'>
                    <div className="reviews-service-title">
                        <h2>Customer Reviews</h2>
                    </div>
                    <div className="reviews-service-header">
                        <div className="review-score-star d-flex align-items-end mb-2">
                            <div className="trustpilot_service mr-2">
                                <span className='stars'><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></span>
                            </div>
                            <span className='review-score_total'>4.7</span>
                        </div>
                    </div>
                    <div className="review-score-container mb-2">
                        <div className="reviews-service-based">Based on <span>21,868 reviews</span></div>
                    </div>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        //   deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {
                            reviews.length !==0 ? reviews.map((review,key)=>
                                    <div key={key}>
                                        <div className='review-card'>
                                            <div className="review-name">
                                                {review.Customer.firstName} {review.Customer.lastName}<br />
                                                <span className='review-verified'>verified</span>
                                            </div>
                                            <div className="review-star">
                                            <span className='stars'>
                                           <Rate disabled={true} defaultValue={review.rating} />
                                            </span>
                                            </div>
                                            <div className="review-content">
                                                <p>{review.reviewTitle}</p>
                                                <span>{review.description}</span>
                                            </div>

                                        </div>
                                    </div>
                                )
                                : 'NO reviews'
                        }

                    </Carousel>;
                </div>
            </div>


    )
}

export default CustomerReviews
