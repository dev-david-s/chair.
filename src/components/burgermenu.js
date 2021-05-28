import { slide as Menu } from 'react-burger-menu'
import React from "react";
import './burgermenu.css';

class burger extends React.Component {
    showSettings(event) {
        event.preventDefault();

    }

    render() {
        // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
        return (

            <Menu right width={'100%'} disableAutoFocus >
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="discover" className="menu-item" href="/discover">Discover</a>
                <a id="products" className="menu-item" href="/products">Products</a>
                <a id="solutions" className="menu-item" href="/solutions">Solutions</a>
                <a id="reach" className="menu-item" href="/reach">Reach</a>
                <a id="order" className="menu-item" href="/order">Order</a>
            </Menu>
        );
    }
}
export default burger