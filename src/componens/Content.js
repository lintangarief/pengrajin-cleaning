import React , { useState } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight } from "../../node_modules/react-icons/bs";
import {RxDotFilled } from "../../node_modules/react-icons/rx";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Content() {
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

    const [imgIndex, setimgIndex] = useState(3)

    const goToSlide = (slideIndex) => {
        setimgIndex(slideIndex)

    }
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  return (
    <div className="hero-container min-h-0 max-h-full bg-hero-texture bg-fixed bg-center bg-cover">
        <section className="hero-container bg-teal-600/90 py-20 ">
            <div className='img-container text-white pl-20 '>
                <p class="font-semibold text-2xl mb-10">Design Interior</p>
                <p class="font-bold text-4xl"><a className='text-yellow-400'>Design Hunian</a> Untuk</p>
                <p class="font-bold text-4xl mb-10">Kebiasaan Barumu</p>
                <p class="font-medium text-2xl"><a className='text-yellow-400'>3000+</a> hunian impian telah terwujud</p>
            </div>         
                  <Carousel responsive={responsive} className='img-carousel pt-20'>
                  <div className='img-wrapper shadow-lg mr-2 img-cover bg-cover bg-center' style={{backgroundImage: `url(${sildes[0].url})`}} ></div>
                  <div className='img-wrapper shadow-lg mr-2 img-cover bg-cover bg-center' style={{backgroundImage: `url(${sildes[1].url})`}} ></div>
                  <div className='img-wrapper shadow-lg mr-2 img-cover bg-cover bg-center' style={{backgroundImage: `url(${sildes[2].url})`}} ></div>
                  <div className='img-wrapper shadow-lg mr-2 img-cover bg-cover bg-center' style={{backgroundImage: `url(${sildes[3].url})`}} ></div>
                  <div className='img-wrapper shadow-lg mr-2 img-cover bg-cover bg-center' style={{backgroundImage: `url(${sildes[3].url})`}} ></div>
                  </Carousel>;
                
              <div className='flex top-4 justify-center py-2'>
                            { 
                    sildes.map((sildes, slideIndex) => (
                      
                        <div index={slideIndex} onClick={() => goToSlide(slideIndex)} className=' text-2xl text-white cursor-pointer'>
                            <RxDotFilled/>
                        </div>
                        
                    ))}
            </div>
          
        </section>

    </div>
  )
}

export default Content