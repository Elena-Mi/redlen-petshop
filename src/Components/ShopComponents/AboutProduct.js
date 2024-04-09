import { useParams, useNavigate } from 'react-router-dom';
import dataProduct from '../../Data/dataProduct';
import React from 'react';
import './shop.css';
import { IoBagAddOutline } from "react-icons/io5";
import { MdKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion"
import ChangeQuantity from '../Cart/ChangeQuantity';
import { addItemToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


const AboutProduct = ({shop}) => {
    const title = useParams().title;
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const dispatch= useDispatch();

    
    return(
        <div>
            {dataProduct.filter(item => item.title === title).map((elem,index)=> {
                return(
                    <div key={index} className='aboutProduct_container'>
                        <div className='left'>
                            <div className='img_container_aboutProduct'>
                                <img className='aboutProduct_img' src={`../${elem.img}.jpg`} alt='aboutProduct'/>
                            <div className='aboutProduct_second_imgContainer'>   
                                <img className='aboutProduct_imgSecond' src={`../${elem.imgTwo}.jpg`} alt='aboutProduct'/>
                                <img className='aboutProduct_imgSecond' src={`../${elem.imgThree}.jpg`} alt='aboutProduct'/>
                            </div> 
                            </div>
                        </div>

                        <div className='right'>
                            <div className='aboutProduct_info_container'>
                                <h2 className='aboutProduct_title'> {elem.name}</h2>
                                <span className='aboutProduct_price'>{elem.price} рублей</span>
                                <hr />
                                <p className='aboutProduct_description'> {elem.description}</p>

                            </div>

                        </div>
                        
                        <div className='add_container'>


                            <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                            <motion.button whileHover={{scale:1.05, transition: '0.3s ease'}} className='add_cart_btn'
                           onClick={ () => {dispatch(
                            addItemToCart({
                               shop, quantity
                                }))}}     >
                            <IoBagAddOutline className='icon-add' />ADD TO CART
                            </motion.button>

                            <motion.button whileHover={{textDecoration: 'underline', color: 'blue', fontWeight: 'bold'}} 
                            className='btn-back' onClick={() => navigate(-1)}>
                            <MdKeyboardBackspace />
                             Назад
                            </motion.button>
                        </div>

                        
                       

                    </div>
                )
            })}
        </div>
    )
}
export default AboutProduct;