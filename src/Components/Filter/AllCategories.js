import Filter from "./Filter";
import './category.css'

// используем метод мар чтобы показать все категории которые отобразим в филтер
const AllCategories = () => {

    return(
        <div className="category_container">
            {[ 'ВСЕ КАТЕГОРИИ', 'ДЛЯ ПИТАНИЯ', 'ДЛЯ ТУАЛЕТА',
            'ДОМАЩНИЙ УХОД', 'ЭЛЕКТРОНИКА', 'ИГРУШКИ'].map(category => <Filter category = {category} key={category}/>)}
        </div>
    )
}
export default AllCategories;