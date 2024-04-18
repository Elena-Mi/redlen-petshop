

import ContactForm from './ContactForm';
import './contact.css'
const Contact = () => {
    return(
        <div>
            <div>
                <h2 className="contact_title"> как с нами связаться</h2>
                <p className='contact-text'> Если у вас есть вопросы, то вы можете связаться с нами заполнив форму отправки сообщений и мы свяжимся с вами в ближайшее время. Либо можете написать нам в любую из социальных сетей</p>
           
            </div>
            <ContactForm/>
        </div>

       
    )
}
export default Contact;