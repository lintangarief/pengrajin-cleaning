import React from 'react'
import { Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const sildes = [
    {
      url : 'https://www.pengrajin.com/static-images/login-3.png'
    },
    {
      url : 'https://www.pengrajin.com/static-images/login-3.png'
    },
    {
      url : 'https://www.pengrajin.com/static-images/login-3.png'
    },
    {
      url : 'https://www.pengrajin.com/static-images/login-3.png'
    }  
  ];

  const imageSlide = sildes.map((items) =>
  
    <div>

  <div className='w-full'>
      <div className='bg-transparant'>
           <div className='img-wrapper shadow-lg bg-contain bg-center bg-no-repeat mt-[50px]  w-full h-[500px] ' style={{backgroundImage: `url(${items.url})`}} ></div>
      </div>
  </div>
  
    </div>
 
)
function SingleCarousel(props) {
  return (
    <Carousel autoPlay className='inline md:hidden'>
   {imageSlide}
    </Carousel>
  )
}

export default SingleCarousel