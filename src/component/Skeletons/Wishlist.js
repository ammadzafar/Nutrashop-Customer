import {Card, Col, Row} from "antd";
import React from "react";
import Skeleton from "react-loading-skeleton";

const WishlistSkeleton = () => (
    <div className="site-card-wrapper" style={{overflow: 'hidden'}}>
        <Row gutter={16}>
            <Col offset={4} span={16}>
                <Card title="Watchlist" bordered={false}>
                    <div>
                        {
                            ([1,2,3,4,5]).map(row=>
                            <>
                                <Row>
                                <Col className="center" span={4}>
                                    <Skeleton height={90} active/>
                                </Col>
                                <Col className="m-auto" span={8}>
                                    <Skeleton/>
                                    <br/>
                                    <span className="red pointer"><Skeleton/></span>
                                </Col>
                                <Col className="center m-auto" span={6}>
                                                <span className="fw-500 green fs1-2em">
                                                <Skeleton/>
                                                </span>
                                </Col>
                                <Col className="center m-auto" span={6}>
                                    <Skeleton/>
                                </Col>
                            </Row>
                            <hr/>
                            </>
                            )
                        }


                    </div>
                </Card>
            </Col>
        </Row>
    </div>
)

export default WishlistSkeleton
