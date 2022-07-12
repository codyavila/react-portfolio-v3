import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'
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
      <h2 className='head-text'>Skills & Experience</h2>
      <p className='disclaimer-text'>*Hover over position for more details</p>
      <motion.div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <div
              className='app__skills-item app-flex'
              key={`skill-${skill.name}`}>
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
        <ExpCardYear experience={experience} experienceWorks={experience.works} />
      </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
)
