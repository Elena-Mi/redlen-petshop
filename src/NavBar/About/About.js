import './about.css'
import React from 'react';
import picture from './1.jpg';

const  About =()=> {
    return (
      <div>
        <div className='main_img'> 
        <h1>RedLen PetShop</h1>
        <p>Наша компания специализируется на продаже товаров для животных, привезенных из Китая.Мы предлагаем широкий ассортимент продукции – от кормов и игрушек до одежды и аксессуаров для домашних питомцев</p>
        </div>


      <div className='about_mainContainer'>
        <div className='about_main'> 
            <div className='about_img' data-aos="fade-right" data-aos-duration="1000">
              <img className='img_cat' width='500px' src={picture} alt='catPicture'/>
            </div>


          <div className='about_blockOne_container' data-aos="fade-left" data-aos-duration="1500"> 
            <div> </div>
          </div>  
        </div>

      </div>

      </div>
    )
  }
  
  export default About;