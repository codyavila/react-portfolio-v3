import React from 'react'
import { motion } from 'framer-motion'

const NavigationDots = ({ active }) => {
  return (
    <motion.div className='app__navigation' layout>
      {/* {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: '#d62828' } : {}}
        />
      ))} */}
    </motion.div>
  )
}

export default NavigationDots
