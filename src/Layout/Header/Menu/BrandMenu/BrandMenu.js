
import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux';
// import * as actionCreators from '../../../store/actions/brandActions'
import * as actionCreators from '../../../../store/actions/brandActions'
import { Navbar, Container, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import brandimg1 from '../../../../assets/images/abc.png';
import './BrandMenu.css';

const BrandMenu = (props) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(actionCreators.storeBrands())
    }, [])
    const { brands } = useSelector(({ brands }) => brands);
    return (
        <>
            <div className='nav-link brand-mu'>
                <div className="dropdown  brand-mu-drop">
                    <button className="dropbtn brand-mu-btn">Brands</button>
                    <div className="dropdown-content brndscrl">
                        <div className="MenuDataImg">
                            {brands && brands.map((brand, index) =>

                                <React.Fragment>
                                    <Link to={'/product-brands/' + brand.slug} >
                                        <div className="Brand-Image">
                                            <div className="content">
                                                <>
                                                    <img src={process.env.REACT_APP_BASE_IMAGE_PATH + brand.image} />
                                                    <h2>{brand.name}</h2>
                                                </>
                                            </div>
                                        </div>
                                    </Link>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
// const mapStateToProps = state => {
//     return {
//         brands: state.brands.brands
//     }
// }
export default BrandMenu;