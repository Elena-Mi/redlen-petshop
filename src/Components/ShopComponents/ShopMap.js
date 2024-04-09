import './shop.css';
import dataProduct from "../../Data/dataProduct";
import Shop from "./Shop";import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../redux/productSlice';



const ShopMap = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    return(
        <div className='container-products'>
            <div className='products'>

            
            {dataProduct.filter( shop => {
                if(selectedCategory === "ВСЕ КАТЕГОРИИ") return true;
                return selectedCategory === shop.category
            }).map(shop => <Shop shop ={shop} key={shop.id}/>)}
            </div>
        </div>
    )
}
export default ShopMap;