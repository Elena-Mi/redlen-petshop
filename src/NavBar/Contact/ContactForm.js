import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("xnqelnej");
  if (state.succeeded) {
      return <p>Спасибо за вопрос!</p>;
  }
  return (
    <div className='form_container'>

      <form onSubmit={handleSubmit}>

      <label htmlFor="email" className='form-title'>
        Связаться с нами
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Ваша почта....'
        className='form-email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Ваше сообщение...'
        className='fill-form'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='btn-form'>
        Отправить
      </button>
    </form>
    </div>
  );
}
export default ContactForm;