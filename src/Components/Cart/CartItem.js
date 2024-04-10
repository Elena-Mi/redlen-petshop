import dataProduct from "../../Data/dataProduct";
import { FaRegTrashAlt } from "react-icons/fa";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import './cart.css';
import { motion } from "framer-motion";

const CartItem = ({cartItem}) => {
    
    const dispatch = useDispatch();
    
  
    return(
        <div>
            {dataProduct.filter(item => item.id === cartItem.shopId).map((elem,index) => {
                return(
                    <div  key={index} className="cartItem-container">

            <div className="left"> 
                <img className="cartItem-img" src={`../${elem.img}.jpg`} alt='product'/>
            </div>
            <div className="box1-cartItem"> 
                <p className="cartItem-title"> {elem.name}</p>
                <p className="cartItem-quantity-price"> {elem.price.toFixed(2) * cartItem.quantity} штук(и) </p>
            </div>
        <div className="right">
                <motion.span whileHover={{color: '#FF2121'}} onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                    <FaRegTrashAlt />
                </motion.span>

        </div>    

        </div>
                )
            })}
        </div>
    )
    }

export default CartItem;