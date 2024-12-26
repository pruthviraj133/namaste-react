import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex();
    };

    return (
        <div>
            {/* accordion header */}
            <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>

                {showItems && <ItemList items={data.itemCards} />}
            </div>        
        </div>
    );
};

export default RestaurantCategory;
