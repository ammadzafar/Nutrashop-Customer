import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import React from "react"
import "./DescriptionAndReview.css";
// import HTMLReactParser from "html-react-parser";
import moment from "moment";
import QuestionAnswers from "./QuestionAnswers";
import {Rate} from "antd";
import MediaQuery from "react-responsive/src";
import HTMLReactParser from "html-react-parser";

const Review = (props) => {
    return (
        <section className="productDetails">
            <div className="container">
                <div className="col-md-12">
                    <Tabs>
                        <TabList>
                            <Tab className="pointer">Reviews({props.reviews.length})</Tab>
                            <Tab className="pointer">Q & A</Tab>
                            <MediaQuery maxWidth={1224}>
                                <Tab className="pointer">Description</Tab>
                            </MediaQuery>
                        </TabList>

                        <TabPanel>
                            {props.reviews.length != 0 ? (
                                <div className="reviews-stars">
                                    {console.log(props.reviews)}
                                    {props.reviews.map((review) => (
                                        review.visibility  &&
                                        <React.Fragment key={review.id.toString()}>
                                            <div className="reveiws-repeater">
                                                <Rate disabled="true" defaultValue={review.rating}/>
                                                <h4>{review.reviewTitle}</h4>
                                                <p>{review.description}</p>
                                                <h6>
                                                    Reviewed By{" "}
                                                    {review.Customer.firstName +
                                                    " " +
                                                    review.Customer.lastName}
                                                </h6>
                                                <h6>
                                                    {" "}
                                                    on{" "}
                                                    {moment(review.createdAt).format(
                                                        "MMMM Do YYYY, h:mm:ss a"
                                                    )}
                                                </h6>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                    <div className="write-reviews"></div>
                                </div>
                            ) : (
                                <div className="review-titles">
                                    <h4>No reviews yet.</h4>
                                </div>
                            )}
                        </TabPanel>


                        <TabPanel>
                            <QuestionAnswers product={props.product}/>
                        </TabPanel>
                        <TabPanel>
                            <div className="col-md-12 general-content pd-detail">
                                {HTMLReactParser(props.description)}
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default Review;
