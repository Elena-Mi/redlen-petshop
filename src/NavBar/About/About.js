import './about.css'
import React from 'react';
import picture from './1.jpg';
import pictureSecond from './2.jpg'
import { useNavigate } from 'react-router';

const  About =()=> {

  const navigate = useNavigate();
  const navigateTo = () => {
      navigate('/shop'); 
      }
    return (
      <div>
        <div className='main_img'> 
        <h1 className='main_title'>RedLen PetShop</h1>
        <p>Наша компания специализируется на продаже товаров для животных, привезенных из Китая.Мы предлагаем широкий ассортимент продукции – от кормов и игрушек до одежды и аксессуаров для домашних питомцев</p>
        </div>


      <div className='about_mainContainer'>
        <div className='about_main'> 
            <div className='about_img' data-aos="fade-right" data-aos-duration="1000">
              <img className='img_cat' width='400px' height='450px' src={picture} alt='catPicture'/>
            </div>


          <div className='about_blockOne_container' data-aos="fade-left" data-aos-duration="1500"> 
            <div className='about-top'>
              <h2 className='about_title_secondContainer'>Что мы предлагем?</h2>
            </div>

            <div className='about_desc'>
              <p>
                Мы предлагаем широкий ассортимент продукции – от кормов и игрушек до одежды и аксессуаров для домашних питомцев
              </p> 
              <p> <span className='span_text'>Мы тщательно отбираем поставщиков и продукцию,</span> чтобы гарантировать высокое качество товаров. Все товары проходят строгий контроль качества на каждом этапе производства, чтобы убедиться, что они безопасны и удовлетворяют потребности наших клиентов и их питомцев</p>
            </div>
          </div>  
        </div>
      </div>

      <div className='block_about_three'>
      <h2 className='block_three_title'> Наш магазин товаров для животных является идеальным местом для всех, кто заботится о своих пушистых друзьях</h2>
      <p className='block_three_text'>Мы предлагаем широкий ассортимент качественных товаров для всех видов домашних животных, начиная от корма и лакомств до игрушек и средств по уходу</p>
      </div>

      <div className='block_about_four'>
        <h2 className='four_about_title'>Одной из основных преимуществ нашей компании является доступная цена</h2>
        
        <div className='about_four_container'>

          <div className='block_one'> 
          <span className='four_number'>1</span>
          <p className='four_text'>Мы работаем напрямую с производителями в Китае, что позволяет нам снизить затраты 
          на посредников и предложить нашим клиентам товары по самым выгодным ценам </p>

          </div>
          

          <div className='block_two'> 
          <span className='four_number'>2</span>
          <p className='four_text'> Мы гордимся тем, что наша продукция отличается отличным соотношением цены и 
          качества, что делает ее доступной для всех любящих хозяев и их питомцев</p>

          </div>

          <div className='block_three'> 
          <span className='four_number'>3</span>
          <p className='four_text'> Мы стремимся к тому, чтобы наши клиенты всегда оставались довольны и возвращались 
          к нам снова и снова</p>

          </div>
        </div>


      </div>

      <div className='about_five_container'> 

        <div className='container_text'>
        <h2 className='about_title_five'>
        Если вы ищете качественные товары для своих домашних питомцев по доступной цене,
         обратитесь к нам
         </h2>
        <p className='about_text_five'>
        Мы с удовольствием поможем вам подобрать идеальные продукты для ухода и 
        развлечения ваших любимцев
        </p>

        </div>

        <img className='img_five' src={pictureSecond} alt="cat"/>
      </div>

      <div className='about_six_container'> 
        <p className='block_six_text_one'> 
        Покупая товары у нас, вы можете быть уверены в их безопасности и качестве, 
        так как мы работаем только с проверенными производителями и поставщиками
        </p>
        <p className='block_six_text_two'>
        Мы также следим за актуальностью продукции, постоянно пополняя ассортимент
         новыми товарами и лучшими брендами.
         </p>
         <p className='block_six_text_three'>
         Вы можете рассчитывать на выгодные цены и различные акции и скидки. Мы ценим 
         каждого нашего клиента и стараемся делать покупки у нас максимально удобными и приятными
         </p>
        
      </div>

      <div className='blok_seven'>
      <h2 className='title_seven'>
      Выбирая наш магазин товаров для животных, вы делаете правильный выбор в пользу здоровья
       и комфорта вашего питомца
      </h2>
      <p className='text_seven'>
      Покупайте у нас и убедитесь в этом сами!
      </p>
      </div>

      <div className='block_eight'> 
            <button className='btn-cart-box' onClick={navigateTo}>
                Продолжить покупки 
            </button>
      </div>

      </div>
    )
  }
  
  export default About;