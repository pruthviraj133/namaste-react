import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Head
 * - Title
 * Body
 * - AppLayout
 * - Card
 * - Data
 * @returns 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

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
            <h4>{deltime}</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian, Asian" rating="4.5" deltime="36 mins"/>
                <RestaurantCard resName="KFC" cuisine="burger" rating="2.5" deltime="24 mins"/>
            </div>

        </div>
    );
};

const AppLayout = () => {
    return(
        <div className = "app">
            <Header />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)