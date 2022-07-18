import React from 'react'
import { motion } from 'framer-motion'

import ExpCard from './ExpCard'

const ExpCardYear = (props) => {
  const experience = props.experience

  return (
    <motion.div layout className='app__skills-exp' key={experience.year}>
      {experience.map((experiences) => (
        <motion.div
          layout
          className='app__skills-exp-item'
          key={experiences.year}>
          <motion.div layout className='app__skills-exp-year'>
            <motion.p layout className='bold-text'>
              {experiences.year}
            </motion.p>
          </motion.div>
          <ExpCard experience={experiences} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ExpCardYear
