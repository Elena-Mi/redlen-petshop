import { categoryData } from "../Data/dataProduct";
import CategoryItem from "./CategoryItem";
import './category.css';

const Category = () => {
    return(
        <div className="category-container">
        {categoryData.map(item => (
            <CategoryItem item={item} key={item.id}/>
        ))}

        </div>
    )
}
export default Category;