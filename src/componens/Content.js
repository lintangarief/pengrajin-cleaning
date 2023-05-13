import React , { useState } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight } from "../../node_modules/react-icons/bs";
import {RxDotFilled } from "../../node_modules/react-icons/rx";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from './AdsImg';

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
        breakpoint: { max: 4000, min: 2500 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 2500, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 500, min: 0 },
        items: 1
      }
    };

    const imageSlide = sildes.map((items) =>
      <Image url={items.url}/>
    )
  return (
    <div> 
    <div className="hero-container min-h-0 max-h-full bg-hero-texture bg-fixed bg-center bg-cover">
        <section className="hero-container bg-teal-600/90 py-20 ">
            <div className='img-container hidden md:inline text-white pl-20 pb duration-300'>
                <p class="font-semibold text-2xl mt-5 mb-10">Design Interior</p>
                <p class="font-bold text-4xl"><a className='text-yellow-400'>Design Hunian</a> Untuk</p>
                <p class="font-bold text-4xl mb-10">Kebiasaan Barumu</p>
                <p class="font-medium text-2xl"><a className='text-yellow-400'>3000+</a> hunian impian telah terwujud</p>
            </div>         
                  <Carousel responsive={responsive} className='img-carousel pt-20'>
                  {imageSlide}
                  </Carousel>
                
              <div className='flex top-4 justify-center py-2'>
                            { 
                    sildes.map((sildes, slideIndex) => (
                        <div index={slideIndex} onClick={() => goToSlide(slideIndex)} className=' text-2xl text-white mt-10 cursor-pointer'>
                            <RxDotFilled/>
                        </div>         
                    ))}
            </div>
        </section>
        

    </div>
    <div className='shadow-lg rounded-lg w-full md:w-3/4 px-10 bg-white  m-auto z-[10] mb-10 py-5'>
        <div className='grid grid-row-2 '>
            <p class="text-2xl md:text-4xl font-bold py-5 m-auto">Hitung Estimasi Biayamu!</p>
          
            <form>
            <div class="mb-4 grid  grid-cols-1   md:grid-cols-4 gap-5">
              <div>
                <label className="block text-gray-700/70 text-sm font-bold mb-2" for="username">
                  Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-3 px-6 text-gray-700 leading-tight   focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Misalkan, Dedi"/>
              </div>
              <div>
                <label className="block text-gray-700/70 text-sm font-bold mb-2" for="phone">
                  Phone
                </label>
                <input className="shadow appearance-none border rounded w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="number" placeholder="+62 812 XXX XXX"/>
              </div>
              <div>
                <label className="block text-gray-700/70 text-sm font-bold mb-2" for="email">
                  Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Misalkan, dedi@mail.com"/>
              </div>
              <div>
              <button class="mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-10 w-full  rounded focus:outline-none focus:shadow-outline duration-300" type="button">
                  Tanya Harga
              </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className='container mx-auto flex grid justify-stretch  w-full md:w-3/4 '>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className='border border-solid border-1 rounded-lg px-5 py-6 shadow-lg'>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
              <span className='text-8xl lg:text-5xl grid  place-items-center '>
              <ion-icon name="cube"></ion-icon>
              </span>
            <div className='col-span-3'>
            
            <p className='font-bold text-xl'>Japanti Design</p>
            <p className='font-bold text-m text-gray-400'>Desain space-saving oleh desainer propesional</p>
            
            </div>
            </div>
          </div> 
          <div className='border border-solid border-1 rounded-lg px-5 py-6 shadow-lg'>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
              <span className='text-8xl lg:text-5xl grid  place-items-center '>
              <ion-icon name="wallet"></ion-icon>
              </span>
            <div className='col-span-3'>
             
            <p className='font-bold text-xl'>36x Cicilan</p>
            <p className='font-bold text-m text-gray-400'>bayar lebih ringan, transaksi jadi makain mudah</p>
          
            </div>
            </div>
          </div>
          <div className='border border-solid border-1 rounded-lg px-5 py-6 shadow-lg'>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
              <span className='text-8xl lg:text-5xl grid place-items-center'>
              <ion-icon name="time"></ion-icon>
              </span>
            <div className='col-span-3'>
              
            <p className='font-bold text-xl '>Garansi 2 Tahun</p>
            <p className='font-bold text-m  text-gray-400'>jaminan barang berkualitas bikin tenang & nyaman</p>
         
            </div>
            </div>
          </div>

        </div>


            <div className='m-auto py-20  '>
                
              <p className='text-4xl md:text-5xl font-bold text-center'>Upgrade Interior untuk Kebiasaan Barumu</p>
              </div>
      </div>
    </div>
    
  )
}

export default Content