import './GiftCategory.css'
import giftOne from './giftOne.jpg';
import giftTwo from './giftTwo.jpg';
import giftThree from './giftThree.jpg';

const Gift = () => {
    return(
        <div  className="giftCategory_container">
            <h2 className="giftCategory_title"> Получи подарок после первой покупки</h2>
            <div className='giftCategory_img_container'> 
                <img  src={giftOne} className='giftCategory_img' alt='gift'/>
                <img  src={giftTwo} className='giftCategory_img' alt='gift'/>
                <img  src={giftThree} className='giftCategory_img' alt='gift'/>
            </div>
        </div>
    )
}
export default Gift;