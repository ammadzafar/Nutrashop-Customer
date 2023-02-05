import React, { useEffect, useState } from 'react';
import { Input, AutoComplete } from 'antd';
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import "./SearchProduct.css";

function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}


const SearchProduct = (props) => {
    const [options, setOptions] = useState([]);
    const history = useHistory()

    const [value, setValue] = useState('');
    const location = useLocation();
    /*
        useEffect(() => {
            console.log(location.pathname);
            if(location.pathname === '/wishlist' ) {
                setValue('')
            } else if(location.pathname === '/cart'){
                setValue('')
            } else if(location.pathname === '/'){
                setValue('')
            }else if(location.pathname === '/my-account'){
                setValue('')
            }
        }, [location]);
    */

    const handleSearch = (value) => {

        if (value) {
            console.log("furqan");
            console.log(value);


            axios.get('/search?search=' + value).then(data => {
                let products = data.data
                if (products.length !== 0) {
                    setOptions(
                        products.map((product) => {
                            return {
                                slug: product.slug,
                                value: product.name,
                                label: (
                                    <Link key={product.id} to={'/product/' + product.slug}>

                                        <div  onClick={() => setValue(product.name)}>
                                            <img src={product.images[0] && process.env.REACT_APP_BASE_IMAGE_PATH + product.images[0].path}
                                                className='searchImg' />
                                            {product.name}</div>


                                    </Link>
                                )
                            }
                        }
                        ))
                }

            }).catch(err => {
                console.log(err)
            })
        } else {
            setOptions([])
        }
        // setOptions(value ? searchResult(value) : []);

    };

    const onSelect = (value, option) => {
        history.push('/product/' + option.slug)
    };

    return (
        <>
                <AutoComplete
                    dropdownMatchSelectWidth={252}
                    options={options}
                    onSelect={onSelect}

                    onSearch={handleSearch}

                // onKeyDown={_handleKeyDown}
                >
                    <Input.Search type="text" size="large" placeholder="Search Products" enterButton />
                </AutoComplete>
        </>
    );
};
export default SearchProduct
