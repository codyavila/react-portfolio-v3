import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MenuButton } from './MenuButton.tsx'

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

        stiffness: 200,
        damping: 20,
        staggerChildren: 0.17,
        staggerDirection: 1
      }
    },
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.06,
        staggerDirection: -1
      }
    }
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
      <motion.div className='app__navbar-logo'>
        <a href='#home' draggable='false'>
          <div className='container'>
            <div className='box'>
              <div className='title'>
                <span className='block'></span>
                <h1>
                  Cody Avila<span></span>
                </h1>
              </div>

              <div className='role'>
                <div className='block'></div>
                <p>A Fully Stacked Dev</p>
              </div>
            </div>
          </div>
        </a>
      </motion.div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          <motion.li
            variants={variants}
            className='app__flex p-text'
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            key={`link-${item}`}>
            <div />
            <motion.a variants={itemVariants} href={`#${item}`}>
              {item}
            </motion.a>
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
              onClick={() => {
                setOpen(!isOpen)
                setToggle(!toggle)
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              variants={itemVariants}
              key={`link-${item}`}
              href={`#${item}`}>
              {item}
            </motion.a>
          ))}
        </motion.div>
      </motion.nav>
      <MenuButton
        className='toggle-button'
        isOpen={isOpen}
        onClick={() => {
          setOpen(!isOpen)
          setToggle(!toggle)
        }}
        strokeWidth='5'
        color='#181818'
        lineProps={{ strokeLinecap: 'round' }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        width='24'
        height='19'
        style={menuButtonStyle}
      />
    </nav>
  )
}

export default Navbar
