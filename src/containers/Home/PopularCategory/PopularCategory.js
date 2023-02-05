import React, {useEffect} from "react";
import * as actionCreators from "../../../store/actions/popularCollectionActions";
import {connect} from "react-redux"
import {Link} from "react-router-dom";
import "./PopularCategory.css";
import popularCollections from "../../../store/reducers/popularCollections";

const PopularCategories = (props) => {
    useEffect(() => {
        props.dispatch(actionCreators.storePopularCollections())
    }, [])
    return (

        <section className="popular-cateogry">
            <div className="container">
                <div className="row mx-0">
                    <div className="main-title text-center">
                        <h3>Popular Category</h3>
                    </div>
                </div>
                <div className="row">
                    {props.popularCollections &&
                    props.popularCollections.map((collection) =>
                        <React.Fragment key={collection.slug.toString()}>
                            <div className="col-md-3">
                                <Link to={'/product-category/' + collection.slug} style={{width: "100%"}}>
                                    <div className="category-colum">
                                        <div className="category-parent">
                                            <div className="category-image">
                                                <img src={process.env.REACT_APP_BASE_IMAGE_PATH + collection.image}/>
                                            </div>
                                        </div>
                                        <div className="category-name">
                                            <h3>{collection.name}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </React.Fragment>
                    )
                    }
                </div>
            </div>
        </section>
    )
}
const mapStateToProps = state => {
    return {
        popularCollections: state.popularCollections.popularCollections
    }
}
export default connect(mapStateToProps)(PopularCategories)
