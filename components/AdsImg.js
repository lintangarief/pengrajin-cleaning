import React from 'react'

function AdsImg(props) {
  return (
    <div className=''>
    <div className='img-wrapper shadow-lg bg-contain bg-center bg-no-repeat  w-[550px] h-[300px] ' style={{backgroundImage: `url(${props.url})`}} ></div>
    </div>
  )
}

export default AdsImg