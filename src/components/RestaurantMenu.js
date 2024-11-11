import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestrauntMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams(); 
    // console.log(resId);
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        // console.log(json);
        setResInfo(json.data);
    };
    
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