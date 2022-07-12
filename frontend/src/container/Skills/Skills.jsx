import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

import './Skills.scss'

const Skills = () => {
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])
  const [isOpen, setIsOpen] = useState([])

  useEffect(() => {
    const query = '*[_type == "experiences"]'
    const skillsQuery = '*[_type == "skills"]'

    client.fetch(query).then((data) => {
      setExperience(data)
    })

    client.fetch(skillsQuery).then((data) => {
      setSkills(data)
    })
  }, [])
  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>
      <p className='disclaimer-text'>*Hover over position for more details</p>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill, index) => (
            <div className='app__skills-item app-flex' key={skill.index}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 10px 3px #03152C'
                }}
                whileTap={{
                  scale: 0.98,
                  boxShadow: '0 0 5px 2px #03152C'
                }}
                whileInView={{ opacity: [0, 1] }}
                transition={{ type: 'spring', stiffness: 100 }}
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </motion.div>
              <p className='p-text'>{skill.name}</p>
            </div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experience.map((experience) => (
            <motion.div className='app__skills-exp-item' key={experience.year}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work, index) => (
                  <div className='app__skills-exp-work'>
                      <motion.div
                        layout
                        transition={{ type: 'spring' }}
                        style={{
                          borderRadius: '1rem',
                          boxShadow: ' 0px 10px 30px rgba(0, 0, 0, 0.5)'
                        }}
                        onClick={() => setIsOpen(!isOpen)}
                        className='card'
                        key={work.name}>
                        <motion.h2 layout='position'>{work.name}</motion.h2>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}>
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
)
