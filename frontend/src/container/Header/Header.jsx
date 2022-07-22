import React from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'

import { images } from '../../constants'

import './Header.scss'

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div className='app__header-intro'>
        <motion.h2>Hello! I'm Cody, a developer of sorts.</motion.h2>
        <motion.p>
          Frontend developer, backend capable. I always start with that because
          while I am a fullstack developer, I have an obsession for building
          user-friendly, simple, and delightful websites for all users.
        </motion.p>
        <motion.p>
          I was a student at General Assembly where I spent 420 hours learning
          the fundamentals of frontend and backend web development. I ended up
          working at General Assembly as a teaching assistant where I helped
          students grow, grasp, and solidify their understanding of developing
          software.
        </motion.p>
        <motion.p>
          Through these experiences, I had the opportunity to work with many
          developers, teams across different time zones, and developed a working
          style that leans towards flexibility, clarity, and collaboration.
        </motion.p>
        <motion.p>
          I'm currently looking for a new role as a developer. Hire me?
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
      <div className='app__header-img'>
        <motion.img
          className='profile-pic'
          src={images.profile}
          alt='my profile'
          style={{ boxShadow: ' 0 0 25px rgba(0, 0, 0, 0.4)' }}
        />
      </div>
    </div>
  )
}

export default AppWrap(Header, 'home')
