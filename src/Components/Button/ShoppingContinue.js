import { useNavigate } from "react-router-dom";
import './ShoppingContinue.css';

const ShoppingContinue = () => {

    const navigate = useNavigate();
    const navigateTo = () => {
        navigate('/shop'); 
        }
    return(
        <div className='icon-cart'>
            <button className='btn-cart-box' onClick={navigateTo}>
                Продолжить покупки 
            </button>
            
        </div>
    )
}
export default ShoppingContinue;