import React from 'react';
import ProductCard from "../../component/ProductCard/ProductCard";
import * as actionCreators from '../../store/actions/brandProductActions'
import {connect} from "react-redux";
import axios from "axios";
import Filters from "./Filters/Filters"
import {Empty} from "antd";
import ProductsPage from "../../component/Skeletons/ProductsPage";

class ProductPage extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
            const slug = this.props.match.params.slug
            this.setState({loading: true})
            axios.get('brandProducts/' + slug)
                .then(response => {
                    console.log(response)
                    this.props.dispatch(actionCreators.saveBrandProducts(response.data.products))
                    this.setState({loading: false})
                }).catch(e=>console.log(e))
        }
    }

    componentDidMount() {
        const slug = this.props.match.params.slug
        this.setState({loading: true})

        axios.get('brandProducts/' + slug)
            .then(response => {
                this.props.dispatch(actionCreators.saveBrandProducts(response.data.products))
                this.setState({loading: false})

            })
    }

    render() {
        let products = this.props.tempBrandProducts
        let loading = this.state.loading
        return (
            loading ? <ProductsPage/> :
                products.length ? <div>
                    <section className="product-row">
                        <div className="container-fluid">
                            <div className="row">
                                <Filters/>
                                <div className="col-md-9 all-brands">
                                    {this.props.brandProducts.length != 0 ?
                                        <div className="row">
                                            {this.props.brandProducts.map((product) =>
                                                <React.Fragment key={product.id.toString()}>
                                                    <div style={{"width": "50%"}}
                                                         className="col-md-3 mb-20 margin-conflict">
                                                        <ProductCard style={{"margin": "0px !important"}}
                                                                     product={product}/>
                                                    </div>
                                                </React.Fragment>
                                            )}
                                        </div> : <Empty/>}
                                </div>
                            </div>

                        </div>
                    </section>
                </div> : <div className="text-center">
                    <Empty/>
                    {/*<img src={EmptyCart}/>*/}
                    {/*<div className="cart-title">*/}
                    {/*<h5>No Products</h5>*/}
                    {/*<Link to={'/'} className="btn btn-checkout">Continue Shopping</Link>*/}
                    {/*</div>*/}
                </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        brandProducts: state.brandProducts.brandProducts,
        tempBrandProducts: state.brandProducts.tempBrandProducts
    }

}
export default connect(mapStateToProps)(ProductPage);
