import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestrauntMenu = () => {
    const { resId } = useParams(); 
    
    const resInfo = useRestaurantMenu(resId);
    
    if (resInfo === null) return <Shimmer />;

    // console.log(resInfo.cards[2].card.card.info);
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    // console.log(name);

    // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card);
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    console.log(itemCards);

    return ( 
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                <li>{itemCards[0].card.info.name} - ₹ {itemCards[0].card.info.defaultPrice / 100} </li>
                {itemCards.map((item) => (
                    <li key= {item.card.info.id}>
                        {item.card.info.name} - ₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RestrauntMenu;