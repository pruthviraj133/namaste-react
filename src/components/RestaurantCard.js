import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = resData?.info;
    
    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300"> 
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
        </div>
    );
};

export default RestaurantCard;
