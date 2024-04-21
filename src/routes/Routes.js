import { Route, Routes } from 'react-router-dom';
import Home from '../NavBar/Home/Home';
import Shopping from '../NavBar/Shopping/Shopping';
import AboutProduct from '../Components/ShopComponents/AboutProduct';
import Delivery from '../NavBar/Delivery/Delivery';
import Contact from '../NavBar/Contact/Contact';
import About from '../NavBar/About/About';
import Favorites from '../Components/Favorites/Favorites';

const Routers = () => {
    return(
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='shop' element={<Shopping/>}/>
        <Route path='about' element = {<About/>}/>
        <Route path='shop/:title' element={<AboutProduct />}/>
        <Route path='/delivery' element={<Delivery />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/favorites' element={<Favorites/>}/>

      </Routes>
    )
}
export default Routers;