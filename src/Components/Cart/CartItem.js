import dataProduct from "../../Data/dataProduct";
import { FaRegTrashAlt } from "react-icons/fa";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import './cart.css';
import { motion } from "framer-motion";
// import { useEffect } from "react";
// import submittedData from '../../redux/cartSlice';


const CartItem = ({cartItem}) => {
    const product = dataProduct.find(item => item.id === cartItem.shopId);
    const dispatch = useDispatch();

    // useEffect( () => {
    //     localStorage.setItem('cartItem', JSON.stringify(submittedData));
    // }, [submittedData])
    
  
    return(
        <div>
            
            <div className="cartItem-container">

            <div className="left"> 
                <img className="cartItem-img" src={`../${product.img}.jpg`} alt='product'/>
            </div>
            <div className="box1-cartItem"> 
                <p className="cartItem-title"> {product.name}</p>
                <p className="cartItem-quantity-price"> {cartItem.quantity} штук(и) </p>
            </div>
            <div className="right">
                <motion.span whileHover={{color: '#FF2121'}} onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
                    <FaRegTrashAlt />
                </motion.span>

        </div>    

        </div>
                
        </div>
    )
    }

export default CartItem;