import React, { useState } from 'react'
import { motion } from 'framer-motion'

const ExpCard = (props) => {
  const experience = props.experience
  // const experienceYear = props.experienceYear
  // const experienceWorks = props.experienceWorks

  //   const [experience, setExperience] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  return (
      <motion.div className='app__skills-exp-works'>
        {experience.works.map((work) => (
          <div className='app__skills-exp-work' key={`work-${work.name}`}>
            <motion.div
              layout
              transition={{ type: 'spring' }}
              style={{
                borderRadius: '1rem',
                boxShadow: ' 0px 10px 30px rgba(0, 0, 0, 0.5)'
              }}
              onClick={() => setIsOpen(!isOpen)}
              className='card'>
              <motion.h2 layout='position'>{work.name}</motion.h2>
              {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <p className='p-text'>{work.company}</p>
                  <p className='p-text'>{work.desc}</p>
                </motion.div>
              )}
            </motion.div>
          </div>

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
