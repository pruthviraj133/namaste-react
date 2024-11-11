import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    // local state variable 
    const [listOfRestaurants, setListOfRestaurants] = useState([]); 
    const [filteredRestraunt, setFilteredRestraunt] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json1 = await data.json();

        // Optional Chaining
        setListOfRestaurants(json1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestraunt(json1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    return listOfRestaurants.length === 0 ?( 
    < Shimmer /> ): (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        // filter the restraunt cards and update the UI
                        // searchText
                        
                        const filteredRestraunt = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestraunt(filteredRestraunt);
                    }}>Search</button>
                </div>
                <button 
                className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.3
                    );
                    setListOfRestaurants(filteredList);
                } }>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestraunt.map((restaurant) => (
                    <Link 
                    key={restaurant.info.id} 
                    to={"/city/bengaluru/"+ restaurant.info.id}
                    >
                        <RestaurantCard  resData={restaurant} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
