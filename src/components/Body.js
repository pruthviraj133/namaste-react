import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
    // local state variable 
    const [listofRestaurants, setListOfRestaurants] = useState(resList); 

    return(
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn" 
                onClick={() => {
                    const filteredList = listofRestaurants.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                    setListOfRestaurants(filteredList);
                } }>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {listofRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
