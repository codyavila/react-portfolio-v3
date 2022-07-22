import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import { motion } from 'framer-motion'

import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        'service_pjmfyeq',
        'template_szapo02',
        form.current,
        '8lra3CMMTMLjXT17X'
      )
      .then(
        (result) => {
          setLoading(false)
          setIsFormSubmitted(true)
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  const { name, email, message } = formData
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({ ...FormData, [name]: value })
  }

  // const handleSubmit = () => {
  //   setLoading(true)

  //   const contact = {
  //     _type: 'contact',
  //     name: name,
  //     email: email,
  //     message: message
  //   }
  //   client.create(contact).then(() => {
  //     setLoading(false)
  //     setIsFormSubmitted(true)
  //   })
  // }

  return (
    <>
      <h2 className='head-text'>Have a coffee chat with me</h2>

      <div className='app__footer-cards'>
        <a href='mailto:cody.sanders.developer@gmail.com' className='p-text'>
          <motion.div
            className='app__footer-card'
            whileHover={{
              scale: 0.98,
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)'
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200 }}>
            <img src={images.email} alt='email' />
            <p>cody.sanders.developer@gmail.com</p>
          </motion.div>
        </a>
        <a href='tel: +1 (727)871-8709' className='p-text'>
          <motion.div
            className='app__footer-card'
            whileHover={{
              scale: 0.98,
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)'
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 200 }}>
            <img className='phone-img' src={images.mobile} alt='mobile' />
            <p>(727) 871-8709</p>
          </motion.div>
        </a>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className='app__footer-form app__flex'>
        <motion.div
          whileHover={{
            scale: 0.98,
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)'
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 140 }}
          className='app__flex'>
          <input
            className='p-text'
            type='text'
            placeholder='Your Name'
            name='name'
            value={name}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div
          className='app__flex'
          whileHover={{
            scale: 0.98,
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)'
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 140 }}>
          <input
            className='p-text'
            type='email'
            placeholder='Your Email'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </motion.div>
        <motion.div
          whileHover={{
            scale: 0.98,
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)'
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 140 }}>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            name='message'
            onChange={handleChange}
          />
        </motion.div>
        {/* <motion.button>
          <input type='submit' value='Send' />
        </motion.button>{' '} */}
        {!isFormSubmitted ? (
          <motion.button
            whileHover={{
              scale: 0.98,
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)'
            }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 200 }}
            type='submit'
            value='Send'
            className='p-text'>
            {loading ? 'Sending' : 'Send Message'}
          </motion.button>
        ) : (
          <motion.button type='button' className='p-text button-sent'>
            Sent. Talk to you soon!
          </motion.button>
        )}
      </form>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__blackbg'
)
