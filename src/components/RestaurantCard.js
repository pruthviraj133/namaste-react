import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = resData?.info;
    
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="m-4 p-4 w-[250px] h-[500px] rounded-lg bg-gray-200 hover:bg-gray-300"> 
            <img 
            className="rounded-lg"
            alt="res-logo" 
            src={
                CDN_URL + cloudinaryImageId
            }/>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
            <h4>Username: {loggedInUser}</h4>
        </div>
    );
};

// Higher order component
// input - restrauntCard; output - restrauntcardVeg

export const withVegLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-green-700 text-white p-2 m-2 rounded-lg">Pure Veg</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;
