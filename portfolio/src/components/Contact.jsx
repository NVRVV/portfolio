import React from 'react'
import { useRef } from 'react';

export const Contact = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6338mca', 'template_bgxaddb', form.current, {
        publicKey: 'etwsD3wzT9UG1XE2s',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me</span></h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="main">
            <div className="input-box">
              <input type="text" name="from_name" placeholder='Enter Name' />
              <input type="email" name="from_email" placeholder='Enter Email'/>
              <textarea name="message" placeholder='Message' />
            </div>
            <input type="submit" value="Send Message" className="btn"/>
          </div>
          
        </form>
      </section>
        
      <footer className="footer">
        <div className="social">
            <a href="https://www.linkedin.com/in/venkata-ram-vishal-varma-namepalli">
                <i className='bx bxl-linkedin' id="linkedin"></i>
            </a>
            <a href="https://github.com/NVRVV">
                <i className='bx bxl-github' ></i>
            </a>
            <a href="https://www.instagram.com/mr.vv_003/">
                <i className='bx bxl-instagram-alt' ></i>
            </a>
        </div>

        <ul className="list">
            <li>
                <a href="#contact">FAQ</a>
            </li>

            <li>
                <a href="#home">About Me</a>
            </li>

            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
        <p className="copyright">
            &#169; Varma Namepalli | All Rights Reserved
        </p>
    </footer>

    </div>
  )
}

export default Contact
