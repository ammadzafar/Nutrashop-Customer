import Carousel1 from "react-multi-carousel";
import React, { useEffect } from "react";
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions/brandActions'
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";

const Brands = (props) => {
    useEffect(() => {
        props.dispatch(actionCreators.storeBrands())
    }, [])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            margin: 10
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            margin: 10
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            margin: 10
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            margin: 10
        }
    };
    return (
        <div className="brand-section">
            <MediaQuery minWidth={1224}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-title-extra text-center">
                                <h3>Our Brands</h3>
                            </div>
                            <div>
                                <Carousel1 responsive={responsive} 
                                infinite={true} 
                                // autoPlaySpeed={200}
                                autoPlay={true}>
                                    {props.brands.map((brand, index) =>
                                        <React.Fragment key={brand.slug.toString()}>
                                            <Link to={'/product-brands/' + brand.slug}>
                                                <div className="brand-column" key={index}>
                                                    <img style={{ width: "97%" }}
                                                        src={process.env.REACT_APP_BASE_IMAGE_PATH + brand.image} />
                                                </div>
                                            </Link>
                                        </React.Fragment>
                                    )}
                                </Carousel1>

                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-title text-center">
                                <h3>Our Brands</h3>
                            </div>
                            <div className="dots-adjustment-h">
                                <Carousel1 className="dots-adjustment-h" showDots={true} arrows={false}
                                    responsive={responsive}
                                    infinite={true} 
                                    // autoPlaySpeed={200}
                                    autoPlay={true} >
                                    {props.brands.map((brand, index) =>
                                        <React.Fragment key={brand.slug.toString()}>
                                            <Link to={'/product-brands/' + brand.slug}>
                                                <div className="brand-column" key={index}>
                                                    <img style={{ width: "97%" }}
                                                        src={process.env.REACT_APP_BASE_IMAGE_PATH + brand.image} />
                                                </div>
                                            </Link>
                                        </React.Fragment>
                                    )}
                                </Carousel1>

                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        brands: state.brands.brands
    }

}
export default connect(mapStateToProps)(Brands);
