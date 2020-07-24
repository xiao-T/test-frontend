/**
 * Image compoent
 * Fri Jul 24 15:15:17 2020
 * by xiaoT
 */

import React, { FC } from 'react'

import './image.scss'

interface ImageProps {
  placeholder?: string;
  src: string;
}

const Image: FC<ImageProps> = ({ placeholder, src }) => {
  return (
    <div className='image-container'>
      <img className='image' data-lazy={placeholder} src={src} alt='' />
    </div>
  )
}

export default Image
