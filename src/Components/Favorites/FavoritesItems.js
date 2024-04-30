import { useDispatch, useSelector } from "react-redux";
import dataProduct from "../../Data/dataProduct"
import { motion } from "framer-motion";
import { FaRegTrashAlt } from "react-icons/fa";
import { getTotalHearts, removeHeartFromFavorites } from "../../redux/heartSlice";
import './favorites.css'
import { useState } from "react";
import { addItemToCart } from '../../redux/cartSlice';


const FavoritesItems = ({heartItem}) => {

    const favorites = dataProduct.find(h => h.id === heartItem.heartId);
    const dispatch = useDispatch();
    const [heartContainer, setHeartContainer] = useState(false);
    const totalHearts = useSelector(getTotalHearts);

    const openHeart = () => {
        setHeartContainer(!heartContainer);
    }

    
        return(
        <div >
            {totalHearts > 0 &&
                <span onClick={ () => openHeart()} className='totalItemsHeart'>{totalHearts}</span>}
            
            <div className="heartItem-container">
            <div className="heartItem_block">

            <img className="heartItem-img" src={`../${favorites.img}.jpg`} alt='product'  />
            <p className="heartItem-title"> {favorites.name}</p>
            
            <motion.button whileHover={{color: '#7bdf6cc1'}} className="btn_addtoCart" onClick={ () => {dispatch(addItemToCart({elem:favorites, quantity: 1}))}}> Добавить в корзину</motion.button>

          
            </div>
             <div className="favorite-remove">
            <motion.span whileHover={{color: '#FF2121'}} onClick={ () => dispatch(removeHeartFromFavorites({heartItemId: heartItem.id})) }>
                <FaRegTrashAlt />
            </motion.span>
            </div>

            </div>
        </div>
    )
  
}
export default FavoritesItems;