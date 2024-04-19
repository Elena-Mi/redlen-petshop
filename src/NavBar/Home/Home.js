import Slider from "../../Slider/Slider";
import Category from "../../Category/Category";
import Gift from '../../GiftCategory/Gift';

import'./home.css';

const  Home=()=> {
  return (
  <div>
    <Slider/>
    <Category/>
    <Gift />
    
  </div>
  )
}

export default Home;