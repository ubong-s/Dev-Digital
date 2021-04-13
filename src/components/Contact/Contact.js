import React from 'react';
import styled from 'styled-components';
import contact from '../../images/contact.svg';

const Contact = () => {
  return (
    <ContactConatiner id='contact'>
      <div className='container'>
        <img src={contact} alt='contact' />
        <div className='contact-form'>
          <h2>Get In Touch</h2>
          <p>
            Our support available to help you 24 hours a day & 7 days a week.
          </p>
          <form className='form'>
            <div className='form-control'>
              <input type='text' name='name' placeholder='Your Name' />
              <input type='email' name='email' placeholder='Your Email' />
            </div>
            <div className='form-control'>
              <input type='number' name='phone' placeholder='Phone' />
              <input type='text' name='website' placeholder='Your Website' />
            </div>
            <textarea
              name='message'
              rows='6'
              placeholder='Your Message'
            ></textarea>
            <button type='submit' className='btn'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </ContactConatiner>
  );
};

export default Contact;

const ContactConatiner = styled.section`
  text-align: center;
  padding: 4rem 0;
  background-color: #fffcf6;

  img {
    max-width: 350px;
    max-height: 350px;
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 1024px) {
    padding: 7rem 0;

    .container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas: 'form img';
      align-items: start;
      gap: 4rem;
    }

    img {
      max-width: unset;
      max-height: unset;
      grid-area: img;
    }

    .contact-form {
      text-align: left;
      grid-area: form;
    }
  }

  .form {
    input {
      width: 100%;
      height: 2.75rem;
      padding: 0.5rem 0.75rem;
      margin: 0.5rem 0;
      border: 1px solid #e7e7e7;
      background-color: #fff;
      font-family: 'Source Sans Pro', sans-serif;
    }

    textarea {
      width: 100%;
      padding: 0.5rem 0.75rem;
      margin: 0.5rem 0 0;
      border: 1px solid #e7e7e7;
      background-color: #fff;
      font-family: 'Source Sans Pro', sans-serif;
    }

    input:focus,
    textarea:focus {
      outline: #fe6247 solid 1px;
    }

    .form-control {
      @media screen and (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }
    }

    .btn {
      margin-top: 1rem;
    }
  }
`;
