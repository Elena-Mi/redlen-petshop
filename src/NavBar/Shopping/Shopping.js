import AllCategories from '../../Components/Filter/AllCategories';
import ShopMap from '../../Components/ShopComponents/ShopMap';
import './shopping.css'


const Shopping = () => {
    return(
        <div>
            <div className='product'>
                <div className='filter-block'>
                    <AllCategories/>
                </div> 

                <div className='product-block'>  
                     <ShopMap/>
                </div>  
            </div>
        </div>
    )
}
export default Shopping;