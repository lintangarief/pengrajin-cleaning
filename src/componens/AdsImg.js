import React from 'react'

function AdsImg(props) {
  return (
    <div>
    <div className='img-wrapper shadow-lg img-cover bg-cover bg-center' style={{backgroundImage: `url(${props.url})`}} ></div>
    </div>
  )
}

export default AdsImg