import './shop.css';
import { Link } from 'react-router-dom';
import { IoEyeOutline } from "react-icons/io5";



const Shop = ({shop}) => {




  
 
    return(
        <div className='cont' data-aos="fade-up" data-aos-duration="1500">
            <Link className='link' to={`/shop/${shop.title}`}>
                <div className='single-product-container'>
                    <div className="circle">
                         <img className='shop_img' src={`${shop.img}.jpg`} alt="shop"/>
                        <div className='shop_info'>
                            <div className='shop_details'>
                                <p>{shop.name}</p>
                                <p>{shop.price} рублей</p>
                             </div>
                                <div className='icon'>
                                <IoEyeOutline />
                                
                            </div>
                        </div>
                    </div>

                </div>

            </Link>

        </div>
    )
}
export default Shop;