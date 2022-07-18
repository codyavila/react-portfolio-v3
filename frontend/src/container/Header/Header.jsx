import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { AppWrap } from '../../wrapper'

import { images } from '../../constants'

import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div>
        <motion.div className='app__header-intro'>
          <motion.h2>Hello! I'm Cody, a developer of sorts.</motion.h2>
          <motion.p>
            Quisquam culpa qui, impedit et explicabo provident ea quos nihil
            excepturi officia fugit voluptas rem deleniti iusto ipsum aut atque
            inventore iure.
          </motion.p>
          <motion.p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            culpa qui, impedit et explicabo provident ea quos nihil excepturi
            officia fugit voluptas rem deleniti iusto ipsum aut atque inventore
            iure.
          </motion.p>
          <motion.p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </motion.p>

          <div className='app__header-cards'>
            <a href='linkedin.com' className='p-text'>
              <motion.div
                className='app__header-card-linkedin'
                whileHover={{
                  scale: 0.98,
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 100 }}>
                View Linkedin
              </motion.div>
            </a>
            <a href='github.com' className='p-text'>
              <motion.div
                className='app__header-card-github'
                whileHover={{
                  scale: 0.98,
                  transition: { type: 'spring', stiffness: 150, damping: 10 },
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 100 }}>
                View Github
              </motion.div>
            </a>
          </div>
        </motion.div>
        <motion.div className='app__header-img'>
          <motion.img src={images.profile} alt='my profile' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')

// const constraintRef = useRef(null)
// <motion.div ref={constraintRef} className='app__header app__flex'>
//   <motion.div
//     whileInView={{ x: [-100, 0], opacity: [0, 1] }}
//     transition={{ type: 'spring' }}
//     className='app__header-info'>
//     <div className='app__header-badge'>
//       <motion.div
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className='badge-cmp app__flex'>
//         <motion.span
//           animate={{ rotate: [-3, 17, -3, 17, -3, 0, 0, 0, 0, 0, 0] }}
//           transition={{  duration: 1.3, yoyo: Infinity }}>
//           👋
//         </motion.span>
//         <motion.div whileHover={{ scale: 1.05 }} style={{ marginLeft: 20 }}>
//           <p className='p-text'>Hello there! My name is</p>
//           <motion.h1 className='head-text'>Cody</motion.h1>
//         </motion.div>
//       </motion.div>
//       <motion.div
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         className='tag-cmp app__flex'>
//         <p className='p-text'>Fullstack Software Engineer</p>
//         <p className='p-text'>UI/UX Design</p>
//       </motion.div>
//     </div>
//   </motion.div>

//   <motion.div
//     whileInView={{ opacity: [0, 1], delayChildren: 0.5 }}
//     transition={{ duration: 2 }}
//     className='app__header-img'>
//     <img src={images.profile} alt='profile_bg'></img>
//     <motion.img
//       whileInView={{ scale: [0, 1] }}
//       transition={{ duration: 1, ease: 'easeInOut' }}
//       src={images.circle}
//       alt='profile_circle'
//       className='overlay_circle'
//     />
//   </motion.div>

//   <motion.div
//     variant={scaleVariants}
//     whileInView={scaleVariants.whileInView}
//     className='app__header-circles'>
//     <p className='p-text'>Drag my skills around!</p>
//     {[images.react, images.node, images.sass].map((circle, index) => (
//       <motion.div
//         drag
//         dragConstraints={constraintRef}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.95 }}
//         className='circle-cmp app__flex'
//         key={`circle-${index}`}>
//         <img src={circle} alt='circle' draggable='false' />
//       </motion.div>
//     ))}
//   </motion.div>
// </motion.div>
