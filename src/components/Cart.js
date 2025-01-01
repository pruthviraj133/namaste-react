import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearItem());
    }

    return <div
    className="text-center m-4 p-4"
    >
        <h1 className="text-xl font-bold">Cart</h1>

        <div className="m-auto w-6/12">
            <button 
            className="p-2 m-2 bg-black text-white rounded-lg shadow-lg"
            onClick={handleClearCart}
            >
                Clear Cart
            </button>
            {cartItems.length === 0 && <p className="p-2 m-2">Cart is Empty</p>}
            <ItemList items={cartItems} />
        </div>
    </div>
};

export default Cart;
