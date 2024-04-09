import { NavLink, Link } from 'react-router-dom';
import './Header.css';
import { motion } from "framer-motion";
import {  MdMenu, MdClose } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { useRef, useState } from 'react';
import { getTotalArticles } from '../redux/cartSlice';
import Cart from '../Components/Cart/Cart';
import { useSelector } from 'react-redux';

const nav_links = [
    {
      path: '/',
      display: 'Главная'
    },
    {
      path: 'shop',
      display: 'Покупки'
    },
    {
      path: 'about',
      display: 'О нас'
    },
    {
        path: 'delivery',
        display: 'Доставка'
    },
    {
      path: 'contact',
      display: 'Связаться'
    }
  ]


const Header = () => {
    const [cartContainer, setCartContainer] = useState(false);
    const [fixNav, setFixNav] = useState(false);

    const menuRef = useRef(null);

    const openCart = () => {
        setCartContainer(!cartContainer)
    }
    const setFixNavbar = () => {
        if (window.scrollY >= 115) {
            setFixNav(true)
        }
        else setFixNav(false)
    }

    window.addEventListener('scroll', setFixNavbar);
    const totalItems = useSelector(getTotalArticles);

    const menuToggle = () => menuRef.current.classList.toggle('active-menu')

    return(
        <div className={fixNav ? 'header fixed' : 'header'}>
            <div className='nav-wrapper'>
                <div>
                    <Link className='logo' to='/'>
                        <h1 className='redlen_shop'>RedLen PetShop</h1>
                    </Link>
                </div>
                <div className='navigation active-menu' ref={menuRef} onClick={menuToggle}>
                    <ul className='menu'>

                    {nav_links.map((item, index) =>(
                        <li className='nav-item' key={index}>
                            <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' : ''}>{item.display}</NavLink>

                        </li>
                    ))}

                    </ul>
                    
                </div>

                <div className='nav-icons'> 
                <motion.div whileHover={{scale: 1.2}} className='fav-icon'>
                    <IoMdHeartEmpty />
                </motion.div>
                <motion.div whileHover={{scale: 1.2}} className="cart-container cart-icon" onClick={() => openCart()}>
                    <CiShoppingCart />
                </motion.div> 
                <div className='mobile-menu' onClick={menuToggle}>
                <motion.span whileHover={{scale: 1.2}} >
                    <MdMenu />
                </motion.span>
            </div>
                </div>
                {totalItems > 0 &&
                <span onClick={ () => openCart()} className='totalItemsCart'>{totalItems}</span>}

                <div className={cartContainer ? 'container-cart-true' : 'container-cart-false'}> 
                    <div className='box-close-cart'>
                        <h3 className='box-close-title'> Корзина</h3>
                        <button className='btn-close-cart' onClick={ () => openCart()}>
                            <MdClose/>
                        </button>
                    </div>
                    <Cart/>
                   
                </div>

            </div>
          
        </div>
    )
}
export default Header;