import React, {useEffect, useState} from 'react';
import {HeartOutlined, LoadingOutlined} from "@ant-design/icons";
import {message, notification} from "antd";
import {addToWishlist, removeFromWishlist} from "../../store/slices/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";
function WishListButton(props) {
    const [isLoading, setIsLoading] = useState(false)
    const [inWishlist, setInwishlist] = useState("");
    const { auth, isAuthenticated, wishlist } = useSelector(({ auth }) => auth);
    const { loading } = useSelector(({ wishlist }) => wishlist);
    const dispatch = useDispatch()
    useEffect(() => {
        if (wishlist.length) {
            const inWishlist = wishlist.find(
                (wishlist) => wishlist === props.id
            );
            setInwishlist(inWishlist);
        }
    }, [wishlist]);
    useEffect(() => {
        setIsLoading(loading);
    }, [loading]);

    const addWishlist = () => {
        if (isAuthenticated) {
            let object = {
                customerId: auth.user.id,
                productId: props.id,
            };
            setIsLoading(true);
            dispatch(addToWishlist(object));
            message.success("Item added to your wishlist.");
            setIsLoading(false);
        } else {
            notification["error"]({
                message: "Wishlist",
                description: "Please login to add to wishlist.",
            });
        }
    };
    const removeWishlist = () => {
        let object = {
            customerId: auth.user.id,
            productId: props.id,
        };
        dispatch(removeFromWishlist(object));
        message.success("Item removed from your wishlist.");
    };
    return (
        <div className='p-0'>
            {inWishlist?<button
                style={{
                    padding: "10px",
                    border: 'none'
                }}
                onClick={() => removeWishlist()}
                className="green-btn w-100p h-100p">
                {isLoading ? (
                    <LoadingOutlined/>
                ) : (
                    <i className=" fas fa-heart pr-5 fs-14"></i>
                )} Remove From Wishlist
            </button>:<button
                onClick={() => addWishlist()}
                style={{
                    padding: "11px",
                    backgroundColor: "#ccc",
                    color: '#000',
                    border: 'none'
                }}
                className="green-btn w-100p h-100p">
                <span>{loading ? <LoadingOutlined /> : <i className=" fas fa-heart pr-5 fs-14"></i>}</span> Add to Wishlist
            </button>}

        </div>
    );
}

// <div>{inWishlist ? (
//     <button
//         className="btn btn-off whistlist-btns"
//         onClick={() => removeWishlist()}>
//         {isLoading ? (
//             <LoadingOutlined/>
//         ) : (
//             <i className="green fas fa-heart"></i>
//         )}
//     </button>
// ) : (
//     <button
//         className="btn btn-off whistlist-btns"
//         onClick={() => addWishlist()}>
//         {loading ? <LoadingOutlined/> : <HeartOutlined/>}
//     </button>
// )}</div>

export default WishListButton;