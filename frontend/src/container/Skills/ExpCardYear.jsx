import React, { useState } from 'react'
import { motion } from 'framer-motion'

import ExpCard from './ExpCard'

const ExpCardYear = (props) => {
  const experience = props.experience
  // const experienceYear = props.experienceYear
  // const experienceWorks = props.experienceWorks

  //   const [experience, setExperience] = useState([])
//   const [isOpen, setIsOpen] = useState(false)

  return (
    
    <motion.div className='app__skills-exp' key={experience.year}>
      {experience.map((experience) => (
        <motion.div className='app__skills-exp-item' key={experience.year}>
          <div className='app__skills-exp-year'>
            <p className='bold-text'>{experience.year}</p>
          </div>
          <ExpCard
            experience={experience}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ExpCardYear
