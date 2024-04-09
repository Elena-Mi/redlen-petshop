import { useDispatch, useSelector } from 'react-redux';
import './category.css'
import { filterCategory, getSelectedCategory } from '../../redux/productSlice';



const Filter = ({category}) => {

    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
    return(
        <div className='filter'>
        <p onClick={() => {dispatch(filterCategory(category))}}  className={selectedCategory === category ? 
        'categorySelected categoryButton' : 'categoryButton'}>{category}</p>
        </div>
    )
}
export default Filter;