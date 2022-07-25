import React, { useState, useEffect } from 'react'
import { LayoutGroup, motion } from 'framer-motion'
import ExpCardYear from './ExpCardYear'

import { AppWrap, MotionWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

import './Skills.scss'

const Skills = () => {
  const [experience, setExperience] = useState([])
  const [skills, setSkills] = useState([])

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
      <LayoutGroup>
        <motion.h2 layout className='head-text'>
          Skills & Experience
        </motion.h2>
        <motion.p layout className='disclaimer-text'>
          *Tap on position for more details
        </motion.p>
        <motion.div layout className='app__skills-container'>
          <motion.div layout className='app__skills-list'>
            {skills.map((skill) => (
              <motion.div
                layout
                className='app__skills-item app-flex'
                key={`skill-${skill.name}`}>
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0px 10x 15px rgba(0, 0, 0, 0.2)'
                  }}
                  whileTap={{
                    scale: 0.98,
                    boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2)'
                  }}
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ type: 'spring', stiffness: 100 }}
                  className='app__flex'
                  style={{
                    backgroundColor: skill.bgColor,
                    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.2)'
                  }}>
                  <img src={urlFor(skill.icon)} alt={skill.name} />
                </motion.div>
                <p className='p-text'>{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
          <ExpCardYear
            layout
            experience={experience}
            experienceWorks={experience.works}
          />
        </motion.div>
      </LayoutGroup>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__purplebg'
)
