
import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 * - logo
 * - Nav Items
 * Body
 * - Search
 * - restuarant card container
 * - cards
 * Footer
 * - copyright
 * - links
 * - address
 * - contact
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img 
                className = "logo"
                src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                 
            </div>
        </div>
    )
}

// this object declared can be proivded as input to card as style
// const styleCard = {
//     backgroundColor: "#f0f0f0",
// }

const RestaurantCard = (props) => {
    const { resName, cuisine, rating, deltime } = props;
    
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}> 
            <img 
            className="res-logo"
            alt="res-logo" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi"/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{props.deltime}</h4>
            <h4></h4>

        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* res-card */}
                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian" rating="4.5" deltime="36 mins"/>
                <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" rating="4.1" deltime="24 mins"/>
            </div>

        </div>
    )
}


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

