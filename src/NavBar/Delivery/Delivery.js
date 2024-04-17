import React from 'react'
import { motion } from "framer-motion";
import './delivery.css'
import { CiDeliveryTruck } from "react-icons/ci";
import { serviceData } from '../../Data/dataProduct';
import { Accordion } from '../../Accordion/Accordion';



const  Delivery =()=> {
    return (
      <div>
      {/* //sectionon1// */}
        <section className='services'>
                {serviceData.map((item, index) => (
                    <motion.div whileHover={{scale: 1.1}} className='services-item' key={index} style={{background: `${item.bg}`}}>
                        <motion.span
                          animate={{rotate:360}}
                          transition={{
                            delay: 2,
                            duration:2,
                            repeat: Infinity,
                            repeatDelay: 2
                          }}
                        >
                            <i> <CiDeliveryTruck  size='30'/></i>
                        </motion.span>
                        <div>
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div> 
                    </motion.div>
                ))
                }
            </section>

           <div  className='box_container'>

              <div className='delivery_flight_container'>
                <h2 className='delF_title'>
                    Доставка самолетом 
                 </h2>
                <p className='delF_textOne'> Осуществляется за 3 дня до Москвы. От Москвы колличество дней доставки до вашего региона будет расчитываться от расстояния. Также отдельно будет рассчитываться доставка от Москвы до вашего города </p>
                <p className='delF_textTwo'> Оплату можно произвести как в рублях, так и в юанях. Вы платите напрямую транспортной компании</p>
                <p className='delF_textThree'> Стоимость 180 юаней</p>
               </div>

            

              <div className="delivery_kargo_container"> 
                <h2 className='delK_title'> Доставка Карго </h2> 
                <p className='delK_text_One'> Производиться от 15 до 25 дней до Москвы. От Москвы Идет отдельная доставка до вашего региона</p>
                <p className='delK_text_Two'> Оплата производится в рублях и юанях.Расчет производится в долларах Через наш магазин или на прямую транспортной компании. Расчет доставки производиться от именования категории товара. </p>
                <p className='delK_text_Three' > Стоимость от 2 - 5 $</p>
                
              </div>
          </div>
          <div  className='box_container'>
            
              <div className="delivery_cdek_container"> 
                <h2 className='delC_title'> Доставка СДЕК </h2> 
                <p className='delC_text_One'>Производится в течении 14 дней до двери</p>
                <p className='delC_text_Two'>Регионы распределены на зоны. От зоны зависит стоимость доставки. Цены увеличиваются от каждого киллограма</p>
               
                <motion.button whileHover={{scale: 1.1}}  className='delC_text_Three' > 
                <a href='https://www.std-express.com/russia/rc_priceAll.jsp' rel="_blank"> Более подробно ознакомиться с тарифами вы можете на официальном сайте компании</a>
                </motion.button>
                <br/>
              </div> 

              <div className='delivery_china_container'>

                <h2 className='delCi_title'> Доставка по Китаю </h2> 
                <p className='delCi_text_One'> Производиться в течении 5-7 дней до нашего офиса в зависимости от работы магазинов</p>
                 <p className='delCi_text_Two'> Оплата производится в юанях и расчет доставки будет расчитываться от колличество киллограм </p>
                <p className='delCi_text_Three' > Стоимость 18 юаней/кг</p>
              </div>
            
            </div>


            {/* //sectionon4// */}
            <div className="paymentMethod">
              <h2 className="paymentTitle" > Как оплачивать доставку? </h2>
              
              <div className='payment_boxOne'>

              <span className='methodNumber'> 1</span>
              <p  className="paymentTextOne"> - Сначала вы оплачиваете стоимость товара. Ниже есть онлайн конвертор, вы можете расчитать 
              примерную стоимость доставки. После подсчета стоимость мы отправляем вам программу, в которой 
              вы можете поменять рубли на юани. И отправляете нам чек об оплате. Эта процедура занимает 
              5 минут вашего времени. Также мы сами можем перевести валюту за вас</p>
              </div>

              <div className='payment_boxTwo'>

              <span className='methodNumber'> 2</span>
              <p  className="paymentTextTwo"> - После получения товара мы расчитываем стоимость доставки по китаю 
              и смоимость достави до вашего города. И оплата производится точно также, как было описано выше</p>
              </div>

              <div className='payment_boxThree'>

              <span className='methodNumber'> 3</span>
              <p  className="paymentThree">- Если вы оформляете доставку карго, мы может сделать заказ товара на адрсес 
              транспортной компании и запросить проверку товара за дополнительную стоимость. И тогда доставка по Китаю
               будет бесплатна</p>
               </div>
            </div>
            <br/>

            <Accordion/>
            
      </div>
    )
  }
  
  export default Delivery;