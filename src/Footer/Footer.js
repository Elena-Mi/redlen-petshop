import { MdOutlineMarkEmailRead } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import './footer.css';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import cards from './cards.jpg'
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";


const Footer = () => {
    return(
        <div>
            <div className="footer-container">
                <div className="footer-left">
                    <h2 className="footer-left-title">RedLen Petshop</h2>
                    <p className="footer-desc">Это забота о наших пушистиках. Сделай правильный выбор! </p>

                    <div className="social-container">
                        
                        <motion.span className='social-icon' whileHover={{scale: 1.2, color: '#1f57c3'}}>
                        <a href="https://www.instagram.com/redhair_alesha" rel="_blank">  <FaInstagram/> </a>
                        </motion.span> 
                        
                        <motion.span className='social-icon' whileHover={{scale: 1.2, color: '#1f57c3'}}>
                           <a href="https://t.me/elenadsing" rel="_blank" > <FaTelegram/> </a>
                        </motion.span> 
                        <motion.span className='social-icon' whileHover={{scale: 1.2, color: '#1f57c3'}}>
                          <a href="//wa.me/79215526750" rel="_blank"> <FaWhatsappSquare/> </a>
                        </motion.span> 
                        

                    </div>

                </div>

                <div className="footer-center">
                    <h4 className="footer-title">Меню</h4>
                    <div className="footer-links">
                        <Link className="ft-link" to={`/`}>
                            <p className='ft-linkItem'>Главная </p>

                        </Link>
                        <Link className="ft-link" to={`/shop`}>
                            <p className='ft-linkItem'>Покупки </p>

                        </Link>
                        <Link className="ft-link" to={`/delivery`}>
                            <p className='ft-linkItem'>Доставка </p>

                        </Link>
                        <Link className="ft-link" to={`/contacts`}>
                            <p className='ft-linkItem'>Контакты </p>

                        </Link>

                    </div>

                </div>

                <div className="footer-right">
                    <h4> Контакты </h4>

                    <div className="footer-links">
                        <div className="ft-contact">
                         <motion.span whileHover={{scale: 1.5, color: '#1f57c3'}}>
                            <SlLocationPin />
                         </motion.span>
                            <p className="footer-listItem">Санья, Хайнань</p>
                        </div>

                        <div className="ft-contact">
                            <motion.span whileHover={{scale: 1.2, color: '#1f57c3'}}>
                            <MdOutlineMarkEmailRead />
                            </motion.span>
                            <p className="footer-listItem"> 
                            <a href="mailto:tang.aloyna@gmail.com" rel="_blank" > Email: RedLen_PetShop@gmail.com </a>
                            </p >
                        </div>

                        <img className="payment" src={cards} alt="payment" />


                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer;