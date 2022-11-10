import React, { useState, useEffect } from 'react';
import Layout from '../../layout/components';
import './contacts.scss'

const Contact = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    window.innerWidth < 600 ? setIsMobile(true) : setIsMobile(false);
  }, [window.innerWidth]);
  

  return (
    <Layout>
      <div className='contact'>
        <h1 className='contact_tittle'>Contact Form</h1>
        <form action="" className='contact__form'> 
          <div className='contact__form_userInfo'>
            <label>
              Name
              <input type="text" placeholder='...'/>
            </label>
            <label>
              Email
              <input type="email" placeholder='...@example.com'/>
            </label>
            <label>
              Subject
              <input type="text" placeholder='...'/>
            </label>
            { isMobile === false &&
              <div className='contact__form_buttons'>
                <input className='form-btn' type="submit" value="Send" />
                <button className='form-btn'>Safe draft</button>
              </div>
            }
          </div>
          <div className='contact__form_message'>
            <label>
              Message
              <textarea name="message" id="" placeholder='...'></textarea>
            </label>
          </div>
            {
              isMobile === true &&
              <div className='contact__form_buttons'>
                <input className='form-btn' type="submit" value="Send" />
                <button className='form-btn'>Safe draft</button>
              </div>
            }
        </form>

      </div>
    </Layout>
  );
};

export default Contact;