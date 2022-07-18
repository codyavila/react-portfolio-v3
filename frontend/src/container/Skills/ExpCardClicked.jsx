import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ExpCardClicked = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const work = props.work

  return (
    <motion.div className='app__skills-exp-work' key={`work-${work.name}`}>
      <motion.div
        layout
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{
          borderRadius: '1rem',
          boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)'
        }}
        onClick={() => setIsOpen(!isOpen)}
        className='card'>
        <motion.h2 items-center='true' layout='position'>
          {work.name}
        </motion.h2>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <p className='p-text'>{work.company}</p>
            <p className='p-text'>{work.desc}</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default ExpCardClicked
