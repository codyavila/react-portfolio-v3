import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'

import { images } from '../../constants'

import './Header.scss'

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div>
        <motion.div className='app__header-intro'>
          <motion.h2>Hello! I'm Cody, a developer of sorts.</motion.h2>
          <motion.p>
            Quisquam culpa qui, impedit et explicabo provident ea quos nihil
            excepturi officia fugit voluptas rem deleniti iusto ipsum aut atque
            inventore iure.
          </motion.p>
          <motion.p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            culpa qui, impedit et explicabo provident ea quos nihil excepturi
            officia fugit voluptas rem deleniti iusto ipsum aut atque inventore
            iure.
          </motion.p>
          <motion.p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </motion.p>

          <div className='app__header-cards'>
            <a href='linkedin.com' className='p-text'>
              <motion.div
                className='app__header-card-linkedin'
                whileHover={{
                  scale: 0.98,
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 100 }}>
                View Linkedin
              </motion.div>
            </a>
            <a href='github.com' className='p-text'>
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
        <motion.div className='app__header-img'>
          <motion.img src={images.profile} alt='my profile' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
