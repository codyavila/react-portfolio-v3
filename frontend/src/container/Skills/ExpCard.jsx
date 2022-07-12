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
            <ExpCardClicked work= {work}/>

          // <>
          //   <motion.div
          //     whileInView={{ opacity: [0, 1] }}
          //     transition={{ duration: 0.5 }}
          //     className='app__skills-exp-work'
          //     data-tip
          //     data-for={work.name}
          //     key={work.name}>
          //     <h4 className='bold-text'>{work.name}</h4>
          //     <p className='p-text'>{work.company}</p>
          //   </motion.div>
          //   <ReactTooltip
          //     id={work.name}
          //     effect='solid'
          //     arrowColor='#eae2b7'
          //     className='skills-tooltip'>
          //     {work.desc}
          //   </ReactTooltip>
          // </>
        ))}
      </motion.div>

  )
}

export default ExpCard
