import React from 'react'
import './nextButton.css'

const nextButton = ({name}) => {
  return (
    <div>
      <button className='nextButton__props'>{name}</button>
    </div>
  )
}

export default nextButton
