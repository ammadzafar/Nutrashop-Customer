import React, { useEffect, useState } from 'react';
import ProductCard from "../../component/ProductCard/ProductCard";
import * as actionCreators from '../../store/actions/collectionProductActions'
import { connect } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import Filters from "./Filters/Filters";
import { Empty } from "antd"
import ProductsPage from "../../component/Skeletons/ProductsPage";
import MediaQuery from "react-responsive";

const ProductPage = React.memo((props) => {

    const [loading, setLoading] = useState(false)
    const { slug } = useParams()
    useEffect(() => {
        setLoading(true)
        axios.get('CollectionProducts/' + slug)
            .then(response => {
                props.dispatch(actionCreators.saveCollectionProducts(response.data.products))
                setLoading(false)


            })

    }, [slug])


    return (
        loading ? <ProductsPage /> :
            props.tempCollectionProducts.length != 0 ? <div>
                <MediaQuery minWidth={1224}>
                    <section className="product-row category-page">
                        <div className="container-fluid">
                            <div className="row">
                                <Filters />
                                <div className="col-md-9">

                                    {props.collectionProducts.length != 0 ?
                                        <div className="row">
                                            {props.collectionProducts.map((product, key) =>
                                                <div className="col-md-3 mb-20" key={product.id.toString()}>
                                                    <ProductCard key={key} product={product} />
                                                </div>
                                            )}
                                        </div>
                                        : <Empty />}
                                </div>

                            </div>

                        </div>
                    </section>
                </MediaQuery>
                <MediaQuery maxWidth={1224}>
                    <section className="product-row category-page">
                        <div className="container-fluid">
                            <div className="row">
                                <Filters />
                                <div className="col-md-9">

                                    {props.collectionProducts.length != 0 ?
                                        <div className="row">
                                            {props.collectionProducts.map((product, key) =>
                                                <div style={{ "width": "50%" }} className="mb-20" key={key}>
                                                    <ProductCard key={key} product={product} />
                                                </div>
                                            )}
                                        </div>
                                        : <Empty />}
                                </div>

                            </div>

                        </div>
                    </section>
                </MediaQuery>
            </div>
                : <div className=" text-center">
                    <Empty />
                </div>


    )

})

const mapStateToProps = state => {
    return {
        collectionProducts: state.collectionProducts.collectionProducts,
        tempCollectionProducts: state.collectionProducts.tempCollectionProducts,
        brands: state.collectionProducts.filteredBrands
    }

}
export default connect(mapStateToProps)(ProductPage);
