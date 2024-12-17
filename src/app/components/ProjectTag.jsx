import React from 'react'

function ProjectTag({ name, icon, onClick, isSelected }) {
    const buttonStyles = isSelected 
    ? 'border-blue px-4 py-1  cursor-pointer' 
    : 'border-emphasis hover:border-secondary px-4 py-1 cursor-pointer';

  return (
    <button
        className={`${buttonStyles} flex justify-center items-center gap-2 rounded-full border-2`}
        onClick={() => onClick(name)}
    >
        <icon /> { name }
    </button>
  )
}

export default ProjectTag