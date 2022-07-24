import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'

import { images } from '../../constants'

import './Header.scss'

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        className='app__header-intro'
        whileInView={{ opacity: [0, 1], delay: 0.5, staggerChildren: 0.5 }}
        transition={{ delay: 0.5, staggerChildren: 0.5 }}>
        <motion.h2>Hello! I'm Cody, a developer of sorts.</motion.h2>
        <motion.p>
          Front-end developer, back-end capable. Introducing myself this way allows me to show that I am passionate about building user-friendly, simple, and
          captivating web apps for all users while also being able to hold my own with back-end environments.
        </motion.p>
        <motion.p>
          As a software engineering student at General Assembly, I compiled 420
          hours of training in the fundamentals of front-end and back-end development. Upon
          graduation, I joined General Assembly as a teaching assistant where I
          assist students in learning, understanding, and reinforcing software
          development skills.
        </motion.p>
        <motion.p>
          As a result of these experiences, I had the opportunity to work with a
          variety of developers and teams across several time zones. This has
          allowed me to develop a working style that emphasizes flexibility,
          clarity, and collaboration.
          </motion.p>
        <motion.p>
          I am seeking a new position as a developer. Hire me?
        </motion.p>

        <div className='app__header-cards'>
          <a
            href='https://www.linkedin.com/in/cody-software-engineer/'
            target='_blank'
            rel='noreferrer'
            className='p-text'>
            <motion.div
              className='app__header-card-linkedin'
              whileHover={{
                scale: 0.98,
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)'
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 100 }}>
              View Linkedin
            </motion.div>
          </a>
          <a
            href='https://github.com/sanderscody26'
            target='_blank'
            rel='noreferrer'
            className='p-text'>
            <motion.div
              className='app__header-card-github'
              whileHover={{
                scale: 0.98,
                transition: { type: 'spring', stiffness: 150, damping: 10 },
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 100 }}>
              View Github
            </motion.div>
          </a>
        </div>
      </motion.div>
      <motion.div className='app__header-img' whileInView={{ opacity: [0, 1] }}>
        <motion.img
          className='profile-pic'
          src={images.profile}
          alt='my profile'
          style={{ boxShadow: ' 0 0 25px rgba(0, 0, 0, 0.4)' }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 160, damping: 20 }}
        />
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
