import React from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a
        href='https://www.linkedin.com/in/cody-software-engineer/'
        target='_blank'
        rel='noreferrer'>
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a
        href='https://github.com/sanderscody26'
        target='_blank'
        rel='noreferrer'>
        <div>
          <FaGithub />
        </div>
      </a>
      <a
        href='https://www.instagram.com/im_cody_slamders/'
        target='_blank'
        rel='noreferrer'>
        <div>
          <BsInstagram />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia
