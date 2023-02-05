import {Carousel} from "react-responsive-carousel";
import React, {useEffect, useState} from "react";
import MediaQuery from 'react-responsive'
import Banner from "../../../assets/images/banner.gif";
import Banner1 from "../../../assets/images/banner1.jpeg";
import Banner2 from "../../../assets/images/banner2.jpeg";
import Banner3 from "../../../assets/images/banner3.jpeg";
import Banner4 from "../../../assets/images/banner4.jpeg";
import axios from "axios";
import {Link} from "react-router-dom";
import './Banner.css';

const Banners = () => {
    const [banner, setBanners] = useState(null)
    // const isBigScreen = useMediaQuery({query: '(min-width: 767px)'})
    useEffect(() => {
        axios.get('/banner').then(
            success => {
                setBanners(
                    success.data.map(ban => (
                        <>
                            <MediaQuery minWidth={767}>
                                {ban.Collection !== null ?
                                    <div className="banner-image">
                                       
                                        <Link to={`/product-category/${ban.Collection.slug}`}>
                                            <img src={process.env.REACT_APP_BASE_IMAGE_PATH + ban.image}
                                                 alt="desktop-view"/>
                                        </Link>
                                    </div> :
                                    <div className="banner-image">
                                        
                                        <Link to={`/product/${ban.Product.slug}`}>
                                            <img src={process.env.REACT_APP_BASE_IMAGE_PATH + ban.image}
                                                 alt="desktop-view"/>
                                        </Link>
                                    </div>
                                }
                            </MediaQuery>
                            <MediaQuery maxWidth={500}>
                                {ban.Collection !== null ?
                                    <div className="banner-mobile-image">
                                        <Link to={`/product-category/${ban.Collection.slug}`}>
                                            <img src={process.env.REACT_APP_BASE_IMAGE_PATH + ban.mobileImage}
                                                 alt="mobile-view"/>
                                        </Link>
                                    </div> :
                                    <div className="banner-mobile-image">
                                        <Link to={`/product/${ban.Product.slug}`}>
                                            <img src={process.env.REACT_APP_BASE_IMAGE_PATH + ban.mobileImage}
                                                 alt="mobile-view"/>
                                        </Link>
                                    </div>
                                }
                            </MediaQuery>
                        </>
                    ))
                )
            }
        ).catch(err => {
                console.log(err)
            }
        )
    }, [])

    return (
        <section className="mainbanner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-rows">
                            <div className="">
                                <Carousel autoPlay>
                                    {banner}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Banners;
