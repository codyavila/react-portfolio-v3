import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import { AppWrap } from '../../wrapper'

import { images } from '../../constants'

import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  const constraintRef = useRef(null)
  return (
    <motion.div ref={constraintRef} className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className='app__header-info'>
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <motion.span
              animate={{ rotate: [-3, 17, -3, 17, 5, 0, 0 ,0 ,-1] }}
              transition={{ type: 'spring',  duration: 1, yoyo: Infinity }}>
              👋
            </motion.span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello there! My name is</p>
              <h1 className='head-text'>Cody</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Fullstack Software Engineer</p>
            <p className='p-text'>UI/UX Design</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1], delayChildren: 0.5 }}
        transition={{ duration: 2 }}
        className='app__header-img'>
        <img src={images.profile} alt='profile_bg'></img>
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'>
        <p className='p-text'>Drag my skills around!</p>
        {[images.react, images.node, images.sass].map((circle, index) => (
          <motion.div
            drag
            dragConstraints={constraintRef}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='circle-cmp app__flex'
            key={`circle-${index}`}>
            <img src={circle} alt='circle' draggable='false' />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default AppWrap(Header, 'home')
