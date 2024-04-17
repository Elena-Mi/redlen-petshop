import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import './category.css';

const CategoryItem = ({item}) => {
    return(
        <div className="item-container">
            <img className="category-img" src={`${item.img}.jpg`} alt="category-img"/>
            <div>
                <h3 className="category-title">{item.title}</h3>
                <Link to='/shop'>
                    <motion.button whileHover={{scale: 1.05}} className="category-btn">Перейти в каталог</motion.button>
                 </Link>
            </div>

        </div>
    )
}

export default CategoryItem;