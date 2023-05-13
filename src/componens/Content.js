import React , { useState } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight } from "react-icons/bs";
import {RxDotFilled } from "react-icons/rx";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from './AdsImg';
import Card from './Card';

function Content() {

    const categories = [
      {
        url : 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title :'Kitchen Set',
        decs :'Dapur yang bikin chef andalan keluarga selalu jadi ingin masak.'
      },
      {
        url : 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwbGl2aW5nJTIwcm9vbXxlbnwwfHwwfHw%3D&w=1000&q=80',
        title :'Rumah',
        decs :'Desain interior rumah jadi lebih leluasa untuk lakukan banyak aktivitas baru.'
      },
      {
        url : 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title :'Apartemen',
        decs :'Manfaatkan satu ruang untuk berbagai aktivitasmu dengan desain space-saving.'
      },
      {
        url : 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
        title :'Lemari Custom',
        decs :'Desain lemari yang paling pas buatmu. Semua jadi lebih rapi dan mudah dicari.'
      },
      {
        url : 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title :'Kantor',
        decs :'Tingkatkan performa bisnismu dengan interior kantor kreatif yang pas buat milenial.'
      },
      {
        url : 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        title :'Hotel',
        decs :'Berikan pengalaman terbaik untuk customermu dan raih kesuksesan bisnis.'
      },
    ]

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

    const categoryCard = categories.map((items) =>
      <Card url={items.url} title={items.title} decs={items.decs}/>
    )
  return (
  <div> 
    <div className="hero-container min-h-0 max-h-full bg-hero-texture bg-fixed bg-center bg-cover -z-10 relative">
        <section className="hero-container bg-teal-600/90 py-20 h-[600px]">
            <div className='img-container hidden md:inline text-white pl-20 pb duration-300'>
                <p class="font-semibold text-2xl mt-5 mb-10">Design Interior</p>
                <p class="font-bold text-4xl"><a className='text-yellow-400'>Design Hunian</a> Untuk</p>
                <p class="font-bold text-4xl mb-10">Kebiasaan Barumu</p>
                <p class="font-medium text-2xl"><a className='text-yellow-400'>3000+</a> hunian impian telah terwujud</p>
            </div>         
        </section>
        <section className="hero-container h-[1400px] md:h-[700px] bg-white"></section>
        <section className="hero-container h-[1000px] md:h-[800px] bg-teal-600"></section>

        

    </div>
  <div className='w-full -mt-[2950px] md:-mt-[2050px] z-[6]' >
      <div>

      <Carousel responsive={responsive} className='img-carousel pt-20'>
                      {imageSlide}
      </Carousel>
                      <div className='flex top-4 justify-center '>
                                { 
                        sildes.map((sildes, slideIndex) => (
                            <div index={slideIndex} onClick={() => goToSlide(slideIndex)} className=' text-2xl text-white mt-10 cursor-pointer'>
                                <RxDotFilled/>
                            </div>         
                        ))}
                </div>
      </div>
                
    <div className='shadow-lg rounded-lg w-full md:w-3/4 px-10 bg-white m-auto  my-10  py-5'>
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

      <div className='container'>
            <div className='m-auto py-20  '>
              <p className='text-4xl md:text-5xl font-bold text-center'>Upgrade Interior untuk Kebiasaan Barumu</p>
              </div>

        <div className='container flex grid justify-stretch'>

              <div className='grid grid-cols-2 md:grid-cols-3 gap-5'>
               {categoryCard}
              </div>
        </div>
        </div> 
      </div>
    </div>
    
  )
}

export default Content