import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ExpCardClicked from './ExpCardClicked'

const ExpCard = (props) => {
  const experience = props.experience
  console.log(experience)
  // const experienceYear = props.experienceYear
  // const experienceWorks = props.experienceWorks

  //   const [experience, setExperience] = useState([])

  return (
      <motion.div className='app__skills-exp-works'>
        {experience.works.map((work) => (
            <ExpCardClicked key={work.name} work={work}/>
        ))}
      </motion.div>

  )
}

export default ExpCard
