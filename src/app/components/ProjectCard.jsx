import { useState } from 'react'

function ProjectCard({ imgPath, title, description, tags }) {
  return (
    <div>
        {/* Image */}
        <div 
            className='h-52 md:h-72 rounded-t-xl relative group'
            style={{ background: `url(${imgPath})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
        </div>
        {/* Details */}
        <div className='text-secondary rounded-b-xl bg-gray-100 py-6 px-4'>
            <h3 className="text-xl font-semibold mb-2"> { title } </h3>
            <p className="text-secondary"> { description } </p>
        </div>
    </div>
  )
}

export default ProjectCard