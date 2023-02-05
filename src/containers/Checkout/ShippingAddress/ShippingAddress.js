import {React, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { connect, useSelector,useDispatch } from "react-redux";
import { empty } from "../../../store/slices/cartSlice";
import {Button, Card, message} from "antd";
import {setGuest} from "../../../store/slices/authSlice";
import {provinces,cities} from "../../../constants/constants";
import CreatableSelect from 'react-select/creatable';
const citiesB=[]
cities.map((city,i)=>{
    citiesB.push({'key':i,'label':city,'value':city})

})
const ShippingAddress = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const { isAuthenticated, guestEmail, auth } = useSelector(({ auth }) => auth);
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState("Islamabad");
    const history = useHistory();
    const dispatch = useDispatch();


    // setCities(citiesB)
    const onSubmit = (data) => {
        let order = new FormData();
        
        data.email = isAuthenticated ? auth.email : guestEmail;
        data.amount = props.price
        data.city = city
        order.append("order", data);
        order.append("products", props.cartItems);
        
        axios
            .post("place/order", { data: data, products: props.cartItems })
            
            .then((success) => {
                props.empty();
                setLoading(true);
                message.success("Your Order has placed Successfully.");
                history.push(
                    "thank-you/" + success.data.order_no + "/" + success.data.name
                );
            })
            .catch((error) => {
                console.log('test');
                toast.error(error, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };


    return (
        <div>
            <Card className="card-shadow">
                <div className="row">
                    <div className="col-md-6">
                        <h4>
                            <b>EMAIL ADDRESS</b>
                        </h4>

                    </div>
                    {!isAuthenticated && (
                        <div className="col-md-6">
                            <i onClick={() => dispatch(setGuest())} className="fas fa-edit f-right pointer"></i>
                        </div>
                    )}

                    <div className="col-md-12">
                        <div className="shipping-column-repater">
                            <p className="fs-14 mb-0">
                                {isAuthenticated ? auth.email : guestEmail}
                            </p>
                        </div>
                    </div>
                </div>
            </Card>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card className="mt-20 card-shadow">
                    <div>
                        <h4>
                            <b>SHIPPING ADDRESS</b>
                        </h4>
                    </div>

                    <div className="shipping-column-row">
                        <div className="shipping-column-repater">
                            <label className="grey">First Name </label>
                            <input
                                type="text"
                                name="firstName"
                                className="full-width"
                                ref={register({ required: true })}
                            />
                            {errors.firstName && (
                                <p className="error">This field is required</p>
                            )}
                        </div>

                        <div className="shipping-column-repater">
                            <label className="grey">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className="full-width"
                                ref={register({ required: true })}
                            />
                            {errors.lastName && (
                                <p className="error">This field is required</p>
                            )}
                        </div>
                    </div>
                    <div className="shipping-column-row">
                        <div className="shipping-column-repater">
                            <label className="grey">Address</label>
                            <input
                                type="text"
                                name="address"
                                className="full-width"
                                ref={register({ required: true })}
                            />
                            {errors.address && (
                                <p className="error">This field is required</p>
                            )}
                        </div>
                        <div className="shipping-column-repater">
                            <label className="grey">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                className="full-width"
                                ref={register({ required: true })}
                            />
                            {errors.phone && <p className="error">This field is required</p>}
                        </div>
                    </div>
                    <div className="shipping-column-row">
                        <div className="shipping-column-repater">
                            <label className="grey">Province</label>
                            <select name="province" ref={register({ required: true })}>
                                {provinces.map(province=>
                                    <option>{province}</option>
                                )}

                            </select>
                            {errors.province && (
                                <p className="error">This field is required</p>
                            )}
                        </div>
                        <div className="shipping-column-repater">
                            <label className="grey">City</label>

                            {/*<Select options={citiesB} />*/}
                            <CreatableSelect
                                defaultValue={citiesB[0]}
                                // isClearable
                                onChange={(e)=>setCity(e.value)}
                                // onInputChange={(e)=>setCity(e.value)}
                                options={citiesB}
                            />

                            {errors.city && <p className="error">This field is required</p>}
                        </div>
                    </div>

                    <div className="btn-flex-end">
                        <div className=" btn-rows pb-3 pt-3">
                            <button type="submit">{loading && <i className="fas fa-spinner fa-pulse"></i>} Place Order</button>
                        </div>
                    </div>
                </Card>
            </form>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        empty: () => {
            dispatch(empty());
        },
    };
};
export default connect(null, mapDispatchToProps)(ShippingAddress);
