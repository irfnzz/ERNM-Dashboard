import React from 'react';
import { useState } from 'react';
import { send } from 'emailjs-com';
// import { SMTPClient } from 'emailjs';


function ForgotPasswordRequest() {

  const [toSend, setToSend] = useState({
    email: '',
    phone_number:'',
   });

   const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_annpzqd', // service id from mailjs
      'template_wmq5nh9', // template id from emailjs
      toSend,
      'user_kNDBI2BrGUrBJJvMI3bJj' // user id from emailjs
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
   };

   const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
   };

   return (
          
    <div className='row p-3 mb-5'>

    <div className='col col-md-6 offset-md-3'>
      <h1 className='text-center sign__typo'>Forgot Your Password?</h1>

        <form onSubmit={onSubmit}>

         <div className="form-group">
          <b>
            <label htmlFor='email'>Email</label>
          </b>
          <input
          type='email'
          className="form-control"
          name='email'
          placeholder='Your email'
          value={toSend.reply_to}
          onChange={handleChange}
          />
         </div>

         <div className='form-group'>
          <b>
            <label htmlFor='phonenumber'>Phone Number</label>
          </b>
          <input
          type='text'
          className="form-control"
          name='phone_number'
          placeholder='Phone Number'
          value={toSend.phone_number}
          onChange={handleChange}
          />
         </div>

         <button type='submit' className='btn btn-primary btn-block'>
          Send Reset Link
         </button>

        </form>
    </div>
  </div> 

  )
}

export default ForgotPasswordRequest;
