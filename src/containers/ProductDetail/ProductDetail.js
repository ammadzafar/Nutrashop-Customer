import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import axios from "axios";
import { saveProduct } from "../../store/actions/productActions";
import { addToCartQuantity } from "../../store/slices/cartSlice";
import { connect } from "react-redux";
import DescriptionAndReview from "./DescriptionAndReview";
import { message, Rate } from "antd";
import PriceFormat from "../../component/PriceFormat/PriceFormat";
import { ProductDetailSkeleton } from "../../component/Skeletons/ProductDetail";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import HTMLReactParser from "html-react-parser";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import './ProductDetail.css';
import ImageB from '../../assets/images/abc.jpg';
import nextIcon from "../../assets/images/next-icon.png";
import ImageMagnifier from "./ImageMagnifier/ImageMagnifier";
import {
    addToWishlist,
    removeFromWishlist,
} from "../../store/slices/wishlistSlice";
import { LoadingOutlined } from "@ant-design/icons";
import WishListButton from "../../component/WishListButton/WishListButton";
import {Helmet} from "react-helmet";

var img, glass, w, h, bw;

class ProductDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 1,
            value: 0,
            product: "",
            isLoading: false
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
            const slug = this.props.match.params.slug;
            axios.get("product/" + slug).then((response) => {
                this.props.saveProduct(response.data);
                this.setState({
                    product: response.data,
                });
            });
        }
    }


    componentDidMount() {
        const slug = this.props.match.params.slug;
        axios.get("product/" + slug).then((response) => {
            let rate = 0
            response.data.reviews.map(review => {
                rate = rate += parseInt(review.rating)
            });
            rate = rate / response.data.reviews.length
            this.setState({ value: rate })
            this.props.saveProduct(response.data);
            this.setState({
                    product: response.data
                }
            );

        });
    }

    addToCart() {
        const { product } = this.state;
        this.props.addToCart(product, this.state.counter);
        message.success("Item added to you cart");
    }

    increment() {
        let count = this.state.counter + 1;
        this.setState({
            counter: count,
        });
    }

    decrement() {
        let count = this.state.counter - 1;
        if (count != 0) {
            this.setState({
                counter: count,
            });
        }
    }


    render() {
        const { product } = this.state;
        return (
            product.length !== 0 ?
                <>
                    {console.log('product',product)}
                    <Helmet>
                        {/* Seo Meta tag Test https://www.pakvitamins.com/ */}
                        <title>This is Product Detail.</title>
                        <meta name='description'
                              content='Pakvitamins is the best place for herbal vitamins and health supplements in Pakistan, get the multivitamins, vitamins for pregnancy, & skincare products at the lowest price.' />
                        <meta name='keywords'
                              content='Vitamins In Pakistan' />

                        {/* Seo Meta tag Test
        https://www.pakvitamins.com/ */}

                        {/* Seo Meta tag test https://www.pakvitamins.com/product-category/skin */}
                        <title>Get the best Vitamins For Skin Health- Pakvitamins</title>
                        <meta name='description'
                              content='Vitamins For Skin- We provide the best Vitamins such as Aloe Vera Gel, Nutrifactor Tea Tree Oil, Nutrifactor Rinklex Anti, & Acnof Anti Acne Cleansing Gel, get the best vitamins for skin health.' />
                        <meta name='keywords'
                              content='Skin Care Supplements in Pakistan                ' />
                        {/* Seo Meta tag test https://www.pakvitamins.com/product-category/skin */}

                        {/* Seo Meta tag test https://www.pakvitamins.com/product-category/hair */}
                        <title>HealthAid Argan Glow Hair Oil top Vitamins for Hair Growth.</title>
                        <meta name='description'
                              content='Vitamins for Hair Growth- Get the Organic aloe vera gel, argan Oil, health aid argan glow hair Oil, we offer the Nutrifactor max hair anti-dandruff shampoo and hair repair conditioner for hair growth.' />
                        <meta name='keywords'
                              content='Vitamins For Hair Growth' />
                        {/* Seo Meta tag test https://www.pakvitamins.com/product-category/hair */}

                        {/* Seo Meta tag test https://www.pakvitamins.com/product-category/natures-bounty */}
                        <title>Pakvitamins- The Best Natures Bounty Vitamin.</title>
                        <meta name='description'
                              content='' />
                        <meta name='keywords'
                              content='Natures Bounty
        ' />
                        {/* Seo Meta tag test https://www.pakvitamins.com/product-category/natures-bounty */}

                        {/* Seo Meta tag test https://www.pakvitamins.com/product-category/multivitamins */}
                        <title>Detail</title>
                        <meta name='description'
                              content='Multivitamins in Pakistan- We offer the top quality multivitamins for women in Pakistan, like GSK Theragran Ultra, Vitabiotics Diabetone, Wellwoman Original, etc more.
        ' />
                        <meta name='keywords'
                              content='Multivitamins for women in Pakistan
        ' />
                        {/* Seo Meta tag test https://www.pakvitamins.com/product-category/multivitamins */}

                        {/* Open Graph Control */}
                        <meta property="og:title" content="This is detail."/>
                        <meta property="og:site_name" content="pakvitamins"/>
                        <meta property="og:url" content="https://www.pakvitamins.com/"/>
                        <meta property="og:description" content="Pakvitamins is the best place for herbal vitamins and health supplements in Pakistan, get the multivitamins, vitamins for pregnancy, & skincare products at the lowest price."/>
                        <meta property="og:type" content=""/>
                        <meta property="og:image" content="https://www.pakvitamins.com/static/media/abc.9acb5508.png"/>
                        {/* Open Graph Control */}

                        {/* Google WebMaster Code  */}
                        <meta name="google-site-verification" content="VsBGbZ3f_aQyGTcTMbSMyvXABNTgIG39yHK0eAp2RWM" />
                        {/* Google WebMaster Code  */}
                    </Helmet>
                    <MediaQuery minWidth={1224}>
                        <section className="product-row">
                            <div className="container">
                                <div className="row m-30-100">
                                    <div className="col-md-5">

                                        {/*------ Brand Magnifier Image -------- */}
                                        <div className="img-magnifier-container">
                                            <ImageMagnifier ImgSrcs={product.Variants[0].variantImg.length !== 0 ?
                                                process.env.REACT_APP_BASE_IMAGE_PATH + product.Variants[0].variantImg[0].path :
                                                process.env.REACT_APP_BASE_IMAGE_PATH + product.images[0].path}
                                                            ImgCarousel={product.Variants[0].variantImg.length !== 0 ? product.Variants[0].variantImg : product.images}
                                            />

                                        </div>
                                    </div>

                                    <div className="col-md-7">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h4 className="fs-14">
                                                    Brand:
                                                    <Link className="pl-5" to={`/product-brands/${product.Brand.slug}`}>
                                                        {product.Brand.name}
                                                    </Link>
                                                </h4>
                                            </div>
                                            <div className="product-ratings col-md-6">
                                                <div className="fill-star fs-12">
                                                    <span>
                                                        <Rate disabled defaultValue={this.state.value} />
                                                    </span>
                                                    <span className="fs-12 pl-5">
                                                        ( {product.reviews.length} Reviews )
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <h3 className="fs-19 f-weight-600 mb-15 mt-15">
                                                    {product.name}
                                                </h3>
                                            </div>
                                            <div className="col-md-12 mb-17">
                                                <h4 className="fs-17 mb-0 f-weight-600">
                                                    <PriceFormat
                                                        number={product.Variants.length !== 0 ? product.Variants[0].price : product.price} />
                                                </h4>
                                            </div>

                                            <div className="col-md-6 mb-17">
                                                <h6>
                                                    <b className="fs-15">Availability:</b>{" "}
                                                    <span
                                                        className="fs-14">{product.Variants[0].status === "not_available" ? "Out Of Stock" : " In Stock"}</span>
                                                </h6>
                                            </div>

                                        </div>

                                        {/*variaiton here*/}
                                        
                                        <div className="row">
                                            <div className="col-md-4">
                                                <WishListButton id={product.id} />
                                            </div>
                                            {product.Variants[0].status !== "not_available" ?
                                                <>
                                                    <div className="bg-color col-md-4">
                                                        <div className="row">
                                                            <span
                                                                onClick={this.decrement}
                                                                className="center pointer fs-16 col-md-4 br-0 black bg-gray p-10"
                                                                field="quantity">
                                                                <b>–</b>
                                                            </span>
                                                            <input
                                                                type="text"
                                                                name="quantity"
                                                                className="center fs-16 qty col-md-4 bg-gray border-n cursor-default p-10"
                                                                value={this.state.counter}
                                                            />
                                                            <span
                                                                onClick={this.increment}
                                                                className="center pointer black col-md-4 br-0 bg-gray p-10 fs-16"
                                                                field="quantity">
                                                                <b>+</b>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-md-4">
                                                        <button
                                                            onClick={this.addToCart}
                                                            className="green-btn w-100p h-100p">
                                                            <i class="fas fa-shopping-bag pr-5 fs-14"></i> Add to
                                                            Cart
                                                        </button>
                                                    </div>
                                                </>
                                                : <>
                                                    <button
                                                        disabled
                                                        style={{
                                                            padding: "10px",
                                                            backgroundColor: "#ccc",
                                                            color: '#000',
                                                            border: 'none'
                                                        }}
                                                        className="green-btn w-100p h-100p">
                                                        <i className="fas fa-shopping-bag pr-5 fs-14"></i> Out of Stock
                                                    </button>
                                                </>
                                            }
                                            <div className="col-md-12 general-content pd-detail">
                                                {HTMLReactParser(product.description)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </MediaQuery>
                    <MediaQuery maxWidth={1224}>
                        <section className="product-row">
                            <div className="container">
                                <div className="col-xs-12">
                                    <ImageMagnifier ImgSrcs={product.Variants[0].variantImg.length !== 0 ?
                                        process.env.REACT_APP_BASE_IMAGE_PATH + product.Variants[0].variantImg[0].path :
                                        process.env.REACT_APP_BASE_IMAGE_PATH + product.images[0].path}
                                                    ImgCarousel={product.Variants[0].variantImg.length !== 0 ? product.Variants[0].variantImg : product.images}
                                    />
                                </div>
                                <div className="col-xs-12 mt-30">
                                    <div className="col-xs-12">
                                        <h4 className="fs-24">
                                            Brands
                                            <Link className="pl-5" to={`/${product.Brand.name}`}>
                                                {product.Brand.name}
                                            </Link>
                                        </h4>
                                    </div>
                                    <div className="col-xs-12">
                                        <div className="fill-star">
                                            <span>
                                                <Rate disabled defaultValue={this.state.value} />
                                            </span>
                                            <span className="fs-22 pl-5">
                                                ( {product.reviews.length} Reviews )
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-xs-12">
                                        <h3 className="fs-29 f-weight-600 mb-15 mt-15">
                                            {product.name}
                                        </h3>
                                    </div>
                                    <div className="col-xs mb-17">
                                        <h4 className="fs-27 mb-0 f-weight-600">
                                            <PriceFormat
                                                number={product.Variants.length !== 0 ? product.Variants[0].price : product.price} />
                                        </h4>
                                    </div>
                                    <div className="col-xs-12 mb-17">
                                        <h6>
                                            <b className="fs-25">Availability:</b>{" "}
                                            <span
                                                className="fs-14">{product.Variants[0].status === "not_available" ? "Out Of Stock" : " In Stock"}</span>
                                        </h6>
                                    </div>
                                    <div className="col-xs-12 mb-15">
                                        <WishListButton id={product.id} />
                                    </div>
                                    {product.Variants[0].status !== "not_available" ? <>
                                        <div className="quantity-math bg-color col-xs-12 d-flex mb-17">
                                            <span
                                                onClick={this.decrement}
                                                className="center pointer fs-16 w-100p br-0 black bg-gray p-10"
                                                field="quantity">
                                                <b>–</b>
                                            </span>
                                            <input
                                                type="text"
                                                name="quantity"
                                                className="center fs-16 qty  bg-gray border-n cursor-default p-10"
                                                value={this.state.counter}
                                            />
                                            <span
                                                onClick={this.increment}
                                                className="center pointer black w-100p br-0 bg-gray p-10 fs-16"
                                                field="quantity">
                                                <b>+</b>
                                            </span>
                                        </div>
                                        <div className="col-xs-12">
                                            <button
                                                onClick={this.addToCart}
                                                className="green-btn w-100p h-100p fs-20">
                                                <i class="fas fa-shopping-bag pr-5 "></i> Add to Cart
                                            </button>
                                        </div>
                                    </> : <>
                                        <button
                                            disabled
                                            style={{
                                                padding: "10px",
                                                backgroundColor: "#ccc",
                                                color: '#000',
                                                border: 'none'
                                            }}
                                            className="green-btn w-100p h-100p">
                                            <i className="fas fa-shopping-bag pr-5 fs-14"></i> Out of Stock
                                        </button>
                                    </>}
                                </div>
                            </div>
                        </section>
                    </MediaQuery>
                    <DescriptionAndReview
                        product={product}
                        description={product.description}
                        reviews={product.reviews}
                    />
                </>
                :
                <ProductDetailSkeleton />

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product, quantity) => {
            dispatch(addToCartQuantity({ product, quantity }));
        },
        saveProduct: (product) => {
            dispatch(saveProduct(product));
        },
    };
};
export default connect(null, mapDispatchToProps)(ProductDetail);
