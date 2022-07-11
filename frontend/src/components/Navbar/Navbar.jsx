import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MenuButton } from './MenuButton.tsx'

import { images } from '../../constants'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [isOpen, setOpen] = React.useState(false)

  const menuButtonStyle = {
    marginLeft: '2rem'
  }

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        staggerChildren: 0.17,
        staggerDirection: 1
      }
    },
    closed: { opacity: 0, x: '100%' }
  }

  const itemVariants = {
    closed: {
      opacity: 0
    },
    opened: { opacity: 1 }
  }

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
      }
    },
    opened: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  }

  return (
    <nav className='app__navbar'>
      <motion.div
        className='app__navbar-logo'
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.5}
        whileHover={{ scale: 1.03, rotate: 1.2 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
        <img src={images.logo} alt='logo' draggable='false' />
      </motion.div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <motion.li
            className='app__flex p-text'
            whileHover={{ y: -3 }}
            key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </motion.li>
        ))}
      </ul>

      <motion.nav
        className='app__navbar-menu'
        initial='closed'
        animate={toggle ? 'opened' : 'closed'}
        variants={variants}
        transition={{ duration: 0.5 }}>
        <motion.div variant={sideVariants} className='inner-nav'>
          {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
            <motion.a
              onClick={() => setToggle((toggle) => !toggle)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={itemVariants}
              href={`#${item}`}>
              {item}
            </motion.a>
          ))}
        </motion.div>
      </motion.nav>
      {/* <motion.button
        className='toggle'
        onClick={() => setToggle((toggle) => !toggle)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        toggle button
      </motion.button> */}
      <MenuButton
        className='toggle-button'
        isOpen={isOpen}
        onClick={() => { setOpen(!isOpen); setToggle(!toggle)}}
        strokeWidth='6'
        color='#ff6666'
        lineProps={{ strokeLinecap: 'round' }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        width='24'
        height='30'
        style={menuButtonStyle}
      />
    </nav>
  )
}

export default Navbar
