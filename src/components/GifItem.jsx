import React from 'react'

const GifItem = ({imageUrl, id, title}) => {
// const{url, id , title}=image

  return (
    <div className='card'>
      <img src={imageUrl} alt="" />
      <p>{title}</p>
    </div>
  )
}

export default GifItem