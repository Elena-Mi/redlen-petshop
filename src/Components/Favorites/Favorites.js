import { useSelector } from "react-redux";
import { getHeartItem } from "../../redux/heartSlice";
import FavoritesItems from "./FavoritesItems";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
    const heartItem = useSelector(getHeartItem);
    const navigate = useNavigate();
    const navigateTo = () => {
        navigate('/shop'); 
        }
    return(

      <div>
       <h2 className="favorite"  > Избранные </h2>
        <div className="fav-container">
       

          {heartItem.map((heartItem, itemHeart) => 
          <FavoritesItems
            heartItem={heartItem}
            key={itemHeart}
          />)}
        </div>
        <div className='icon-cart'>
                <button className='btn-cart-box' onClick={navigateTo}>
                Продолжить покупки 
                 </button>
            
            </div>
        </div>
    )
}
export default Favorites;