import React, { useState } from 'react'

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import { motion } from 'framer-motion'

import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const { name, email, message } = formData
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({ ...FormData, [name]: value })
  }

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }
    client.create(contact).then(() => {
      setLoading(false)
      setIsFormSubmitted(true)
    })
  }

  return (
    <>
      <h2 className='head-text'>Have a coffee chat with me</h2>

      <div className='app__footer-cards'>
        <motion.div
          className='app__footer-card'
          whileHover={{
            scale: 0.98,
            boxShadow: 'inset 0 0 10px 2px #702a18'
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 100 }}>
          <img src={images.email} alt='email' />
          <a href='mailto:cody.sanders.developer@gmail.com' className='p-text'>
            cody.sanders.developer@gmail.com
          </a>
        </motion.div>
        <motion.div
          className='app__footer-card'
          whileHover={{
            scale: 0.98,
            boxShadow: 'inset 0 0 10px 2px #6a3e1a'
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 100 }}>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +1 (727)871-8709' className='p-text'>
            (727) 871-8709
          </a>
        </motion.div>
      </div>

      <div className='app__footer-form app__flex'>
        <motion.div
          whileHover={{ scale: 0.98, boxShadow: '0 0 20px 5px #0a1940' }}
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
          whileHover={{ scale: 0.98, boxShadow: '0 0 20px 5px #0a1940' }}
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
          whileHover={{ scale: 0.98, boxShadow: '0 0 20px 5px #0a1940' }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: 'spring', stiffness: 140 }}>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value='Your Message'
            name={message}
            onChange={handleChange}
          />
        </motion.div>

        {!isFormSubmitted ? (
          <motion.button
            whileHover={{
              scale: 0.98,
              boxShadow: 'inset 0 0 7px 1px #6a3e1a'
            }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 100 }}
            type='button'
            className='p-text'
            onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
          </motion.button>
        ) : (
          <motion.button
            whileHover={{
              scale: 0.95,
              boxShadow: 'inset 0 0 6px 2px #6a3e1a'
            }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 160 }}
            type='button'
            className='p-text'
            onClick={handleSubmit}>
            Sent. Talk to you soon!
          </motion.button>
        )}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
