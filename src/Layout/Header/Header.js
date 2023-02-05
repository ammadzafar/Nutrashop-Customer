import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/all.css'
import {increment, decrement, remove} from "../../store/actions/cartActions"
import "./Header.css"
import {connect} from "react-redux"
import TopBanner from './TopBanner/TopBanner'
import SearchNavigationBar from './SearchNavigationBar/SearchNavigationBar'

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            searchList: '',
            isDrawer: false,
        };

    }

    openModal = () => this.setState({isOpen: true});
    closeModal = () => this.setState({isOpen: false});

    render() {
        return (
            <div>
                <TopBanner/>
                <SearchNavigationBar/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems: state.cartReducer.addedItems,
        total: state.cartReducer.total,
        totalItems: state.cartReducer.totalItems,
        isAuthenticated: state.auth.isAuthenticated,
    }

}
const mapDispatchToProps = dispatch => {
    return {
        decrement: (id) => {
            dispatch(decrement(id))
        },
        increment: (id) => {
            dispatch(increment(id))
        },
        remove: (id) => {
            dispatch(remove(id))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
