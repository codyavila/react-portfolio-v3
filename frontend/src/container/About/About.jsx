import React, { useState, useEffect } from 'react'
import './About.scss'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'

const About = () => {
  const [about, setAbout] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query).then((data) => setAbout(data))
  }, [])

  return (
    <>
      <h2 className='head-text'>
        <span>Great Development</span>, That Comes With
        <br />
        <span> Great Responsibility</span>
        <br />
        <p className='fun-h5'>Now Thats a Package</p>
      </h2>

      <div className='app__profiles'>
        {about.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 160, damping: 20 }}
            className='app__profile-item'
            key={about.title + index}>
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='about-title' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', 'app__whitebg')
