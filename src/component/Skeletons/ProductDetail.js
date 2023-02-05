import React from "react";
import Skeleton from "react-loading-skeleton";

export function ProductDetailSkeleton(){
    return(
        <div>
            <section className="product-row">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="producat-sliders">
                                <div className="single-slider">
                           <Skeleton height={400}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="product-right-column">
                                <div className="product-titles">
                                    <h3><Skeleton/></h3>
                                    <div className="product-ratings">
                                        <div className="fill-star">
                                           <Skeleton/>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-price">
                                    <h4><Skeleton/></h4>
                                    {/*<h6>Save with you Bundle</h6>*/}
                                </div>
                                <div className="prodcut-flavour">
                                    {/*variaiton here*/}
                                    <div className="prodcut-flavour product-cart">
                                        <label><Skeleton/></label>
                                        <div>
                                            <div className="quantity-selector cart">
                                                      <Skeleton/>
                                                      <Skeleton/>
                                                      <Skeleton/>
                                            </div>
                                            <div className="prodcut-flavour product-carts">
                                               <Skeleton/>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </div>
    )
}
