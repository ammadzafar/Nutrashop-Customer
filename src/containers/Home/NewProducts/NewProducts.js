import React, {useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel1 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../../../component/ProductCard/ProductCard";
import * as actionCreators from "../../../store/actions/popularProductActions";
import MediaQuery from "react-responsive";

import {connect} from "react-redux";
import axios from "axios";
import {savePopularProducts} from "../../../store/actions/popularProductActions";

const NewProducts = (props) => {
    const [products,setProducts]=useState([])
    useEffect(() => {
        axios.get('popularProducts/new/products')
            .then(response => {
                console.log(response)
            })
    }, []);
    const responsive1 = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000},
            items: 5,
            margin: 10,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4,
            margin: 10,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            margin: 10,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 2,
        },
    };

    return (
        products.length !== 0 && (
            <section className="product-row">
                <MediaQuery minWidth={1224}>
                    <div className="container">
                        <div className="row">
                            <div className="main-title text-center col-md-12">
                                <h3>BEST SELLING</h3>
                            </div>
                            <div className="col-md-12">
                                <Carousel1 className="pb-6" 
                                responsive={responsive1} 
                                infinite={true}
                                // autoPlaySpeed={200}
                                autoPlay={true} >
                                    {props.popularProducts.map((product) => {
                                        return (
                                            <React.Fragment key={product.id.toString()}>
                                                <div>
                                                    <ProductCard className="width-sm" product={product}/>
                                                </div>
                                            </React.Fragment>
                                        );
                                    })}
                                </Carousel1>
                            </div>
                        </div>
                    </div>
                </MediaQuery>

                <MediaQuery maxWidth={1224}>
                    <div className="container">
                        <div className="row">
                            <div className="main-title text-center col-md-12">
                                <h3>NEW PRODUCTS</h3>
                            </div>
                            <div className="col-md-12 p-0">
                                <Carousel1
                                    showDots={true}
                                    arrows={false}
                                    className="pb-30"
                                    responsive={responsive1}
                                    autoPlay={true}
                                    // autoPlaySpeed={200}
                                    infinite={true}>
                                    {props.popularProducts.map((product) => {
                                        return (
                                            <React.Fragment key={product.id.toString()}>
                                                <div>
                                                    <ProductCard className="width-sm" product={product}/>
                                                </div>
                                            </React.Fragment>
                                        );
                                    })}
                                </Carousel1>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </section>
        )
    );
};



export default NewProducts;
