import React , { useState } from 'react'
import {BsChevronCompactLeft,BsChevronCompactRight } from "react-icons/bs";
import {RxDotFilled } from "react-icons/rx";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from './AdsImg';
import Card from './Card';
import SingleCarousel from './SingleCarousel';

function Content() {

  const textFAQ = [
    {
      title : "Apa yang harus dilakukan jika tertarik menggunakan jasa Desain Interior Pengrajin.com?",
      decs : "Cukup daftarkan diri Anda di laman berikut Formulir Pendaftaran Proyek Desain Interior Pengrajin.com. Selanjutnya, Tim Pengrajin.com akan menghubungi Anda untuk mengatur jadwal konsultasi. Konsultasi ini GRATIS, tidak dipungut biaya apapun. Setelah selesai melakukan konsultasi pertama, Anda cukup membayar booking fee sesuai nominal penawaran harga yang disebutkan oleh Tim Pengrajin.com agar pengerjaan desain dapat segera dimulai. Nominal penawaran harga akan dikirimkan oleh Tim Pengrajin.com dalam waktu 10-14 hari kerja. Untuk mengetahui lebih lanjut mengenai detail prosedur Proyek Desain Interior Pengrajin.com, Anda dapat membacanya di laman berikut Prosedur Proyek Desain Interior"
    },
    {
      title : "Apa Syarat & Ketentuan pengerjaaan proyek Desain Interior oleh Pengrajin.com",
      decs : "1. Lokasi proyek berada di area Bandung\n2. Tidak ada permohonan pengerjaan sipil, kecuali pengerjaan gypsum/partisi\n3. Lokasi proyek tidak dalam masa pembangunan atau sedang berlangsung proses renovasi.\n4. Status lokasi proyek adalah kepemilikan pribadi atau sudah serah terima dan siap huni.\n\nSyarat dan Ketentuan terkait pengerjaan proyek desain interior dapat berubah sewaktu-waktu"
    },
    {
      title : "Berapa lama durasi pengerjaan proyek Desain Interior oleh Pengrajin.com?",
      decs : "Durasi proyek desain interior terbagi menjadi dua fase, yaitu (1) fase desain dan (2) fase produksi, termasuk instalasinya. Fase desain kurang lebih membutuhkan waktu hingga 2 bulan, tergantung dengan luasan proyek, jumlah revisi desain, dan tanggapan dari klien. Selanjutnya fase produksi dan proses instalasi membutuhkan waktu hingga 8 minggu. Namun apabila dalam proyek terdapat penggunaan material duco maupun pekerjaan kamar mandi, maka durasi proyek dapat berubah hingga 10-12 minggu pengerjaan. Perhitungan durasi pengerjaan proyek akan diinformasikan terlebih dahulu kepada klien sebelum penandatanganan kontrak pelaksanaan proyek."
    },
    {
      title : "Apa saja style desain yang diusung oleh Pengrajin.com dalam proyek Desain Interiornya?",
      decs : "Japandi merupakan signature style Pengrajin.com yang terbagi ke dalam empat sub-style, yaitu (1) Japandi Natural, (2) Japandi Industrial, (3) Japandi Modern, dan (4) Japandi Classic yang tentunya dapat disesuaikan dengan preferensi dan kebutuhan klien. Informasi lengkap terkait Japandi signature style desain Pengrajin.com dapat Anda baca pada laman berikut Interior Design Style of Pengrajin.com "
    },
    {
      title : "Apa yang terjadi jika desain pertama yang diberikan tidak sesuai dengan keinginan klien?",
      decs : "Dalam proses pengerjaan proyek desain interior, Pengrajin.com memberikan kesempatan sebanyak 3 (tiga) kali revisi desain yang mencakup style desain, budget, dan pilihan produk serta material."
    },

  ]

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
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    const imageSlide = sildes.map((items) =>
      <Image url={items.url}/>
    )

    const categoryCard = categories.map((items) =>
      <Card url={items.url} title={items.title} decs={items.decs}/>
    )

    const faq = textFAQ.map((items) =>
    <details className='py-5'>
        <summary className="py-2 font-bold text-xl cursor-pointer">{items.title}</summary>
        <div className="px-4 pb-4">
          <p className='whitespace-break-spaces text-justify'>{items.decs}</p>
        </div>
    </details>
    )
      

  return (
  
    <div>
        <div className="hero-container min-h-0 max-h-full bg-hero-texture bg-fixed bg-center bg-cover -z-10 relative">
            <section className="hero-container bg-teal-600/90 py-20 h-[500px] md:h-[600px]">
            <div className='img-container hidden md:inline text-white pl-20 pb duration-300'>
                    <p class="font-semibold text-2xl mt-5 mb-10">Design Interior</p>
                    <p class="font-bold text-4xl"><a className='text-yellow-400'>Design Hunian</a> Untuk</p>
                    <p class="font-bold text-4xl mb-10">Kebiasaan Barumu</p>
                <p class="font-medium text-2xl"><a className='text-yellow-400'>3000+</a> hunian impian telah terwujud</p>
                </div>
            </section>
            <section className="hero-container h-[1400px] md:h-[600px] bg-white"></section>
            <section className="hero-container h-[1000px] md:h-[800px] bg-teal-600"></section>



        </div>
  <div className='w-full -mt-[2950px] md:-mt-[1950px] z-[6]' >
            <div>
              <SingleCarousel img={sildes.url} ></SingleCarousel>
              
              </div>
              <div className='hidden md:inline'>
                <Carousel responsive={responsive} className=' img-carousel pl-[0%] lg:pl-[35%] md:pl-[0%] pt-20'>
                    {imageSlide}
                </Carousel>
                <div className='flex top-4 justify-center'>
                    {
                    sildes.map((sildes, slideIndex) => (
                    <div index={slideIndex} onClick={()=> goToSlide(slideIndex)} className=' text-2xl text-white mt-10
                        cursor-pointer'>
                        <RxDotFilled />
                    </div>
                    ))}
                </div>
            </div>

            <div className='shadow-lg rounded-lg w-full md:w-3/4 px-10 bg-white m-auto  my-5 md:my-10 '>
                <div className='grid grid-row-2 '>
                    <p class="text-2xl md:text-4xl font-bold py-5 m-auto">Hitung Estimasi Biayamu!</p>

                    <form>
                        <div class="mb-4 grid  grid-cols-1   md:grid-cols-4 gap-5">
                            <div>
                                <label className="block text-gray-700/70 text-sm font-bold mb-2" for="username">
                                    Username
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-3 px-6 text-gray-700 leading-tight   focus:outline-none focus:shadow-outline"
                                    id="username" type="text" placeholder="Misalkan, Dedi" />
                            </div>
                            <div>
                                <label className="block text-gray-700/70 text-sm font-bold mb-2" for="phone">
                                    Phone
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phone" type="number" placeholder="+62 812 XXX XXX" />
                            </div>
                            <div>
                                <label className="block text-gray-700/70 text-sm font-bold mb-2" for="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-3 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email" type="text" placeholder="Misalkan, dedi@mail.com" />
                            </div>
                            <div>
                                <button
                                    class="mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-10 w-full  rounded focus:outline-none focus:shadow-outline duration-300"
                                    type="button">
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
                            <p className='font-bold text-m text-gray-400'>Desain space-saving oleh desainer propesional
                            </p>

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
            <div className='container '>
              <div className='grid  md:grid-cols-2 grid-cols-1 mt-[130px] md:mt-[200px] gap-10 '>
                <div className='grid grid-cols-4 gap-4  text-center'>
                  <div src="" className='border border-solid border-1 rounded-lg px-5 py-6 shadow-lg'>
                    <img className='m-auto' src='https://media.dekoruma.com/homepage/interior/banks/mandiri.png?dpr=1&fit=bounds&format=png8&optimize=high&quality=20' alt='mandiri'></img>
                  </div>
                  <div src="" className='border border-solid border-1 rounded-lg px-5 py-6 shadow-lg'> 
                    <img className='m-auto' src='https://media.dekoruma.com/homepage/interior/banks/bni.png?dpr=1&fit=bounds&format=png8&optimize=high&quality=20' alt=''></img>
                  </div>
                  <div src="" className='border border-solid border-1 rounded-lg px-5 py-6 shadow-lg'> 
                    <img className='m-auto' src='https://media.dekoruma.com/homepage/interior/banks/bca.png?dpr=1&fit=bounds&format=png8&optimize=high&quality=20'></img>
                  </div>
                  <div src="" className='border border-solid border-1 rounded-lg px-5 py-6 shadow-lg'> 
                    <img className='m-auto' src='https://media.dekoruma.com/homepage/interior/banks/bri.png?dpr=1&fit=bounds&format=png8&optimize=high&quality=20'></img>
                  </div>
                  <div src="" className='border border-solid border-1 rounded-lg px-5 py-6 shadow-lg'>
                    <img className='m-auto' src='https://media.dekoruma.com/homepage/interior/banks/maybank.png?dpr=1&fit=bounds&format=png8&optimize=high&quality=20'></img>
                  </div>
                  <div src="" className='border border-solid border-1 rounded-lg px-5 py-6 shadow-lg'> 
                    <img className='m-auto' src='https://media.dekoruma.com/homepage/interior/banks/citibank.png?dpr=1&fit=bounds&format=png8&optimize=high&quality=20'></img>
                  </div>
                  <div src="" className='border border-solid border-1 rounded-lg px-5 py-6 shadow-lg'> 
                    <img className='m-auto' src='https://media.dekoruma.com/homepage/interior/banks/ocbc.png?dpr=1&fit=bounds&format=png8&optimize=high&quality=20'></img>
                  </div>
                  <div src="" className='border border-solid border-1 rounded-lg px-5 py-6 shadow-lg'> 
                    <img className='m-auto' src='https://media.dekoruma.com/homepage/interior/banks/hsbc.png?dpr=1&fit=bounds&format=png8&optimize=high&quality=20'></img>
                  </div>
                  <div src="" className='border border-solid border-1 rounded-lg px-5 py-6 shadow-lg'>
                    <img className='m-auto' src='https://media.dekoruma.com/homepage/interior/banks/mnc.png?dpr=1&fit=bounds&format=png8&optimize=high&quality=20'></img>
                  </div>
                  <div src="" className='border border-solid border-1 rounded-lg px-5 py-6 shadow-lg'> 
                    <img className='m-auto' src='https://media.dekoruma.com/homepage/interior/banks/bukopin.png?dpr=1&fit=bounds&format=png8&optimize=high&quality=20'></img>
                  </div>
                  <div src="" className='border border-solid border-1 rounded-lg px-5 py-6 shadow-lg'> 
                    <img className='m-auto' src='https://media.dekoruma.com/homepage/interior/banks/panin.png?dpr=1&fit=bounds&format=png8&optimize=high&quality=20'></img>
                  </div>
                  <div src="" className='border border-solid border-1 rounded-lg px-5 py-6 shadow-lg'> 
                    <img className='m-auto' src='https://media.dekoruma.com/homepage/interior/banks/permata.png?dpr=1&fit=bounds&format=png8&optimize=high&quality=20'></img>
                  </div>
                        
                </div>
                <div className='px-5'>
                  <p className='text-5xl font-bold mb-5'>Cicilan 0% Hingga 36 Bulan</p>
                  <p className='font-medium text-2xl text-gray-400'>Kamu bisa melakukan cicilan 0% dalam waktu 3, 6, 12, 18, 24, hingga 36 bulan</p>
                  <button
                    class="mt-6 border-teal-600 border-2  text-teal-600 font-bold py-3 px-10  rounded focus:outline-none focus:shadow-outline duration-300"
                    type="button">
                    Lihat Selengkapnya
                  </button>
                </div>
                
              
              </div>
            </div>
            <section className="mt-5">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">FAQ</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			{faq}
		</div>
	</div>
</section>
        </div>

    </div>
  )
}

export default Content