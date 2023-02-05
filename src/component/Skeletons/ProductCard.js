// import {Skeleton} from "antd";
import React from "react";
import Skeleton from "react-loading-skeleton";
const ProductCard=()=>{
    return (
        <div className="col-md-4">
            <Skeleton height={250} active />
            <Skeleton active/>
            <Skeleton active/>
            <Skeleton active/>
        </div>
    )
}
export default ProductCard
