'use client';

import React from 'react'
import { motion, useScroll } from 'framer-motion'

function CircleIcon({reference}) {

    const { scrollYProgress } = useScroll(
        {
          target: reference,
          offset: ["center end", "center center"],
          layoutEffect: false
        }
      )

  return (
    <figure className='absolute left-0 stroke-secondary'>
        <svg className='-rotate-90'
            width="75" height="75" viewBox='0 0 100 100'
        >
            <circle cx="75" cy="50" r="20" className='stroke-blue stroke-1 fill-none'/>
            <motion.circle cx="75" cy="50" r="20" className='stroke-[4px] fill-primary'
                style = {{
                    pathLength : scrollYProgress
                }}
                strokeLinecap="round"
            />
            <circle cx="75" cy="50" r="10" className='stroke-1 fill-blue'/>
        </svg>
    </figure>
  )
}

export default CircleIcon