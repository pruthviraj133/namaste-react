import RestaurantCard, {withVegLabel} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    // local state variable 
    const [listOfRestaurants, setListOfRestaurants] = useState([]); 
    const [filteredRestraunt, setFilteredRestraunt] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardVeg = withVegLabel(RestaurantCard);

    // console.log("body rendered", listOfRestaurants);

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

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) 
        return (
            <h1>
                Looks like you're offline! Check your internet connection.
            </h1>
    );

    const {setUserName, loggedInUser} = useContext(UserContext);

    return listOfRestaurants.length === 0 ?( 
    < Shimmer /> ): (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4 py-2 m-4 bg-green-400 rounded-lg" 
                    onClick={() => {
                        // filter the restraunt cards and update the UI
                        // searchText
                        
                        const filteredRestraunt = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestraunt(filteredRestraunt);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button 
                    className="px-4 py-2 bg-gray-100 rounded-lg" 
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setListOfRestaurants(filteredList);
                    } }>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <label>Username: </label>
                    <input 
                    className="border border-black"
                    value={loggedInUser}
                    onChange={(e) => {setUserName(e.target.value)}}
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestraunt.map((restaurant) => (
                    <Link 
                    key={restaurant.info.id} 
                    to={"/city/bengaluru/"+ restaurant.info.id}
                    >
                        {restaurant.info.veg ? (
                            <RestaurantCardVeg resData={restaurant}/>
                            ) : (
                                <RestaurantCard  resData={restaurant} />
                            )
                        }
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
