import {Skeleton} from "antd";
import React from "react";
import ProductCard from "./ProductCard";
const ProductsPage=()=>{
    return(
        <section className="product-row">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Skeleton active/>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            {
                                [1,2,3,4,5,6,7,8,9].map(key=>
                                   <ProductCard/>
                                )
                            }


                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default ProductsPage
