import React from 'react';
import Skeleton from "react-loading-skeleton";


const OrderViewSkeleton = () => {
    return (

        <div>
            <div className="container">
                <div className="m-auto">
                    {Skeleton}
                </div>
            </div>

            <div className="container">
                <div className="card  m-auto">
                    <div>
                        <div className="col-md-6">
                            {Skeleton}
                        </div>
                        <div className="col-md-6 m-auto">
                            {Skeleton}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderViewSkeleton