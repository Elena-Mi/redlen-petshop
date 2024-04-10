import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import { IoCartOutline } from "react-icons/io5";
import './cart.css';
import ShoppingContinue from "../Button/ShoppingContinue";


const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div className="totalPrice_container">
            
            <IoCartOutline size="50" color="white"/>
            <h3 className="totalPrice">{totalPrice === 0 ? 'Ваша корзина пуста' 
                    : `Всего: $${totalPrice.toFixed(2)}`}</h3>

            
            {cartItems.map((cartItem,itemCart)=>   <CartItem
                cartItem={cartItem}
                key={itemCart}
               
            />)}
            
            <div>
                {totalPrice === 0 && <ShoppingContinue /> }
                </div>
            <button className="totalPrice_btn"> Оплатить: {totalPrice} рублей   </button>

        </div>
    )
}
export default Cart;