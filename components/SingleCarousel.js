import React from 'react'
import { Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const sildes = [
    {
      url : 'https://i.ytimg.com/vi/eceIzncLEgc/maxresdefault.jpg'
    },
    {
      url : 'https://cdn-2.tstatic.net/jateng/foto/bank/images/ragam-rabu.jpg'
    },
    {
      url : 'https://images.tokopedia.net/img/cache/1200/BgtCLw/2021/8/27/d040e4b4-0cab-4f38-ad3f-4e44b7534abd.jpg'
    },
    {
      url : 'https://awsimages.detik.net.id/community/media/visual/2023/03/04/simpati-furniture.jpeg?w=900'
    }  
  ];

  const imageSlide = sildes.map((items) =>
  
    <div>

  <div className='w-full'>
      <div className='bg-transparant'>
           <div className='img-wrapper shadow-lg img-cover bg-cover bg-center mt-[50px]  w-full h-[500px] ' style={{backgroundImage: `url(${items.url})`}} ></div>
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