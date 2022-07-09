import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './Navbar.scss'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      <motion.div
        className='app__navbar-logo'
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={ 0.5 }
        whileHover={{ scale: 1.03, rotate: 1.2 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
        <img src={images.logo} alt='logo' draggable='false'/>
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

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            initial={{ x: 300 }}
            whileInView={{ x: [300, 0] }}
            transition={{ type: 'spring', duration: 0.25, ease: 'easeIn' }}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li className='app__flex p-text' key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
