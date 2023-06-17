import React , { useState } from 'react'
import { PlayForward, BagCheck, Cash, Pricetag,Close } from 'react-ionicons'
import { Splide, SplideSlide } from '@splidejs/react-splide';

function content() {
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

  
  const kodePosBdg = [
    40184, 40182, 40183, 40184, 40181, 40184, 40291, 40291, 40291, 40291, 40293, 40294, 40293, 40293, 40241,
    40241, 40243, 40242, 40242, 40243, 40222, 40223, 40227, 40224, 40225, 40221, 40266, 40287, 40267, 40256,
    40212, 40212, 40214, 40214, 40215, 40213, 40215, 40211, 40114, 40115, 40116, 40275, 40273, 40275, 40271,
    40274, 40272, 40274, 40273, 40232, 40232, 40231, 40233, 40231, 40239, 40238, 40236, 40235, 40237, 40234,
    40287, 40286, 40286, 40286, 40191, 40122, 40124, 40123, 40121, 40124, 40125, 40192, 40121, 40125, 40614,
    40614, 40615, 40615, 40172, 40174, 40173, 40173, 40171, 40175, 40142, 40141, 40143, 40294, 40294, 40294,
    40294, 40131, 40135, 40132, 40132, 40133, 40134, 40294, 40294, 40294, 40294, 40283, 40281, 40282, 40284,
    40281, 40285, 40262, 40265, 40261, 40263, 40262, 40261, 40264, 40195, 40195, 40195, 40195, 40614, 40614,
    40614, 40614, 40292, 40292, 40295, 40292, 40254, 40251, 40252, 40253, 40255, 40254, 40252, 40162, 40161,
    40162, 40163, 40164, 40153, 40154, 40151, 40152, 40117, 40111, 40112, 40113, 40611, 40617, 40619, 40616, 40618
  ];


  const sildeProducts = [
    {
      name: 'Reese 3-Piece Sofa, Platinum',
      rent : '130K/bulan',
      price : '500K to buy',
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2Fs1loq7n6pnppivv6b5l3qaxli6fv%2Fmedium%2F2669_Reese-3-piece-sofa_platinum_front.jpg&w=2400&q=90'
    },
    {
      name: 'Reese 3-Piece Sofa, Platinum',
      rent : '130K/bulan',
      price : '500K to buy',
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2Fsxfdkycnkdnpgvt1kzqvhle1s18m%2Fmedium%2F2573_Charlie-sofa-mid-gray_front.jpg&w=2400&q=90'
    },
    {
      name: 'Reese 3-Piece Sofa, Platinum',
      rent : '130K/bulan',
      price : '500K to buy',
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2F54kqv0ras035t3lwg2ys61xb53qy%2Fmedium%2Fsheeting.jpg&w=2400&q=90'
    },
    {
      name: 'Reese 3-Piece Sofa, Platinum',
      rent : '130K/bulan',
      price : '500K to buy',
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2Fwkhuie3g73318nowegrklh5j1t8a%2Fmedium%2F2570_Madison-sofa-gray_front.jpg&w=2400&q=90'
    },
    {
      name: 'Reese 3-Piece Sofa, Platinum',
      rent : '130K/bulan',
      price : '500K to buy',
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2Fs5qw3pvp5tbtvdxwkmdrog39w8nu%2Fmedium%2F2516_Camila-Rug-7-10x10_Top-Corner.jpg&w=2400&q=90'
    },
    {
      name: 'Reese 3-Piece Sofa, Platinum',
      rent : '130K/bulan',
      price : '500K to buy',
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2Fixh6m6kd8rx8tq7gr31vjduqhj8m%2Fmedium%2F2513_Sadie-Rug-7-10x10_Top-Corner.jpg&w=2400&q=90'
    },
    {
      name: 'Reese 3-Piece Sofa, Platinum',
      rent : '130K/bulan',
      price : '500K to buy',
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2Fmrrwelabd1ip78yqvwvlxp67sujf%2Fmedium%2F2512_Sadie-Rug-5-3x7-9_Top-Corner.jpg&w=2400&q=90'
    },
    {
      name: 'Reese 3-Piece Sofa, Platinum',
      rent : '130K/bulan',
      price : '500K to buy',
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2F11r21va0wlo32rvth0m0kjsyj88a%2Fmedium%2F2514_Karma-Rug-5-3x7-9_Top-Corner.jpg&w=2400&q=90'
    }
  ];

  const sildes = [
    {
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2FuRLVkoQRLhQpJJSgkBZWPJtR%2Flarge%2F_mooreaseal_IRL.jpg&w=2400&q=90'
    },
    {
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2F71Gwca4eA8r3uNMdHcogqGZw%2Flarge%2F_amber108_Feed.jpg&w=2400&q=90'
    },
    {
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2FSF6151oWX6aXbCQzrifrpMjY%2Flarge%2F_hayleaulaw_IRL.jpg&w=2400&q=90'
    },
    {
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2FNg9Kr5TdTuwtP8KRSF9quGrE%2Flarge%2F222445688_180495384132164_4557011500009750171_n.jpg&w=2400&q=90'
    },
    {
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2F7JjMTjxRqvCbYHNEQnLu6PL8%2Flarge%2F3A4B9189-B746-4498-9487-03499DEE62C5-25782-000009A71E9FE2A2.jpg&w=2400&q=90'
    },
    {
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2FprfNyrdHoaYReJAVso6afdi2%2Flarge%2F149088011_180882150061451_641171367964678593_n.jpg&w=2400&q=90'
    },
    {
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2FJX3E82YWhYxP1e8zYEqe3JjG%2Flarge%2F_sophiaparker_IRL.jpg&w=2400&q=90'
    },
    {
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2FyWcbn98Xb1r1xXSr4YibdxRp%2Flarge%2F_withlovesummer_IRL_2.jpg&w=2400&q=90'
    },
    {
      url : 'https://fernish.com/_next/image?url=https%3A%2F%2Ffernish.com%2Fmedia%2FdhEu2PUXkXF1cUGikYE418Vi%2Flarge%2F_dez_taan_IRL_2.JPG&w=2400&q=90'
    }
  ];


  const faq = textFAQ.map((items) =>
  <details className='py-5'>
      <summary className="py-2 font-normal text-xl cursor-pointer">{items.title}</summary>
      <div className="px-4 pb-4">
        <p className='whitespace-break-spaces text-justify'>{items.decs}</p>
      </div>
  </details>)

  const slideImg = sildes.map((items) =>
  <SplideSlide>
    <div className="max-w-m rounded overflow-hidden bg-white">
      <img className="w-full h-[200px] lg:h-[430px] bg-black" src={items.url}></img>
      <div className=" py-4">
        <p>@nameInstagram</p>
      </div>
    </div>
  </SplideSlide> 
  )

const slideProduct = sildeProducts.map((items) =>
<SplideSlide>
  <div className="max-w-m rounded overflow-hidden bg-white">
    <img className="w-full h-[200px] lg:h-[300px] bg-black" src={items.url}></img>
    <div className=" py-4">
      <p>{items.name}</p>
      <p><a className='font-bold'>{items.rent}</a> - {items.price}</p>
    </div>
  </div>
</SplideSlide> 
)

let [cekCode,setcekCode]=useState(true);

 
const [inputData, setInputData] = useState(null);
const [isDataFounded, setIsDataFounded] = useState(false);
const [isAppeared, setIsAppeared] = useState(false);
  
const handleInputChange = (event) => {
    setInputData(event.target.value);
}

const handleFormChecker = (event) =>{
  event.preventDefault();
  setIsAppeared(true)
  setIsDataFounded(kodePosBdg.includes(parseInt(inputData)));
}


  return (
   <>
 
    <div className='w-full h-auto bg-pengrajin-wash relative'>
      <div className='h-[700px] grid grid-cols-1 lg:grid-cols-3 '>
        <div className='m-auto'>
          <div className='pl-[60px]  md:pl-[120px] lg: pl-[140px] px-32'>
            <p className='font-semibold text-3xl md:text-4xl lg:text-4xl '>75% off – our biggest sale of the year.</p>
              <br/><br/>
                <p className='font-normal text-lg'>Save big on your first month of furniture and décor rental, just in time for the summer moving season.*</p>
                <br/><br/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-4 px-6 rounded-full">Start Shopping</button>
              </div>
            </div>
          <div className=' col-span-2  relative bg-cover bg-no-repeat bg-center  h-full w-full lg:inline hidden'>
            <img className='h-full w-full absolute' src='https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg'></img>
        </div>
      </div>
      <img className='h-full w-full relative inline lg:hidden' src='https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg'></img>
    </div>
    
    <div className='xl:w-3/4 w-full m-auto '>
        <div className='my-10'>
          <div className='grid grid-cols-2 lg:grid-cols-4'>
              <div className='grid grid-cols-1 lg:grid-cols-4 p-5 '>
                <div className='m-auto'>
                  <PlayForward 
                  color={'#007bff'} 
                  height="50px"
                  width="50px" />
                </div>
                <p className=' col-span-3 m-auto font-bold text-m'>Fast, free delivery & assembly</p>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-4 p-5 '>
                <div className='m-auto'>
                  <BagCheck 
                  color={'#007bff'} 
                  height="50px"
                  width="50px" />
                </div>
                <p className=' col-span-3 m-auto font-bold text-m '>Convenient rent or buy options</p>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-4 p-5 '>
                <div className='m-auto'>
                  <Cash 
                  color={'#007bff'} 
                  height="50px"
                  width="50px" />
                </div>
                <p className=' col-span-3 m-auto font-bold text-m '>Low upfront costs for all rentals</p>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-4 p-5 '>
                <div className='m-auto'>
                  <Pricetag 
                  color={'#007bff'} 
                  height="50px"
                  width="50px" />
                </div>
                <p className=' col-span-3 m-auto font-bold text-m '>Flexibility to buy out rental items later</p>
              </div>
          </div>
        </div>
      </div>
      <div className='xl:w-3/4 w-full m-auto '>
        <div className=' grid grid-cols-1 lg:grid-cols-2'>
        <div className=''>
      <img  className='w-full h-full bg-cover bg-no-repeat bg-center' src='https://fernish.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice_area_widget.3cb6f965.jpg&w=2400&q=75'></img>
        </div>

          <div className='p-2 pl-2 lg:pl-10'>
            <p className='font-semibold text-5xl'>Fernish delivers to:</p>
            <ul className="pl-5 my-5 list-disc text-xl">
              <li> NYC area</li>
              <li> DC area (plus parts of MD & VA)</li>
              <li> Los Angeles area</li>
              <li> Orange County area</li>
              <li> San Diego area</li>
              <li> Seattle area</li>
              <li> Austin area</li>
              <li> Dallas-Fort Worth area</li>
            </ul>
            <div className='w-full text-xl bg-pengrajin-wash m-auto h-auto py-6 te xt-center px-10'>
              <p><a className='font-bold'>Enter your ZIP code</a> to see if we deliver to your area or let us know where you’d like us to go next.</p>
              <div className='w-3/4  m-auto my-2'>
                <form className=' grid grid-cols-4 border-2' onSubmit={handleFormChecker}>
                <input class="col-span-2 cols-inline shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={inputData} onChange={handleInputChange} id="zipcode" type="text" placeholder="Zip Code"></input>
                <button class=" col-span-2 inline bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold p-2 mx-5 rounded-full" type='submit'>Submit</button>
                </form>
              </div>
              <div className={`  ${isAppeared ? 'inline' : 'hidden'}`}> 
                  {isDataFounded ? <p className=' mt-5 text-center'>Zip Code exists!</p> : <p className=' mt-5 text-center'>Zip Code does not exist!</p>}
              </div>
           
            </div>
          </div>
        </div>
       
        <div className='grid grid-cols-1 lg:grid-cols-3  text-2xl text-center'>
              <div className='p-20 m-auto'>
                <p className=' '>“It's like Rent-the-Runway, but for sofas.”</p>
                <br/><br/>
                <p className='font-mono tracking-widest'>FAST COMPANY</p>
              </div>
              <div className='p-20 m-auto  lg:inline hidden'>
                <p className=''>“Upscale furniture without going all-in on expensive long term purchases.”</p>
                <br/>
                <p className='font-mono tracking-widest'>THE NEW YORK TIMES</p>
              </div>
              <div className='p-20 m-auto  lg:inline hidden '>
                <p className=' '>“The trendiest online furniture-rental company.”</p>
                <br/><br/>
                <p className='font-mono tracking-widest'>NEW YORK MAGAZINE</p>
              </div>
          </div>
          
          <p className='text-4xl font-semibold my-5'>Shop by room</p>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className="max-w-m  rounded overflow-hidden bg-white">
                <img className=" w-full h-[200px] lg:h-[300px] bg-black" src="https://cdn.pixabay.com/photo/2019/04/23/09/04/indoor-4148892_1280.jpg"></img>
                <div className=" py-4">
                <div className=" text-xl mb-2">Living Room</div>
              </div>
            </div>
            <div className="max-w-m rounded overflow-hidden bg-white ">
              <img className="w-full h-[200px] lg:h-[300px] bg-black" src="https://cdn.pixabay.com/photo/2014/09/26/07/13/dining-tables-461863_1280.jpg"></img>
              <div className=" py-4">
                <div className=" text-xl mb-2">Dining Room</div>
              </div>
            </div>
            <div className="max-w-m rounded overflow-hidden bg-white lg:inline hidden">
              <img className="w-full h-[300px] bg-black" src="https://cdn.pixabay.com/photo/2019/12/15/08/17/bedroom-4696556_1280.jpg"></img>
              <div className=" py-4">
                <div className=" text-xl mb-2">Bedroom</div>
              </div>
            </div>
            <div className="max-w-m rounded overflow-hidden bg-white lg:inline hidden">
              <img className="w-full h-[300px] bg-black" src="https://cdn.pixabay.com/photo/2016/11/18/13/03/apple-1834328_1280.jpg"></img>
              <div className=" py-4">
                <div className=" text-xl mb-2">Office</div>
              </div>
            </div>
          </div>
          <p className='text-4xl font-semibold my-5'>Shop most popular</p>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
            <div className="max-w-m  rounded overflow-hidden bg-white">
                <img className=" w-full h-[200px] lg:h-[300px] bg-black" src="https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg"></img>
                <div className=" py-4">
                <div className=" text-xl mb-2">Beds</div>
              </div>
            </div>
            <div className="max-w-m rounded overflow-hidden bg-white ">
              <img className="w-full h-[200px] lg:h-[300px] bg-black" src="https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_1280.jpg"></img>
              <div className=" py-4">
                <div className=" text-xl mb-2">Dining Tables</div>
              </div>
            </div>
            <div className="max-w-m rounded overflow-hidden bg-white lg:inline hidden">
              <img className="w-full h-[300px] bg-black" src="https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg"></img>
              <div className=" py-4">
                <div className=" text-xl mb-2">Seating</div>
              </div>
            </div>
            <div className="max-w-m rounded overflow-hidden bg-white lg:inline hidden">
              <img className="w-full h-[300px] bg-black" src="https://cdn.pixabay.com/photo/2017/03/28/12/17/chairs-2181994_1280.jpg"></img>
              <div className=" py-4">
                <div className=" text-xl mb-2">Desks</div>
              </div>
            </div>
          </div>
          <div className='bg-pengrajin-wash h-auto mb-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='inline lg:hidden'>
              <img className="w-full bg-cover bg-center" src="https://fernish.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvp-delivery.2de22874.jpg&w=2400&q=75"></img>
              </div>
              <div className='m-auto text-mono  p-20'>
                <p className='font-medium text-6xl'>Hassle free.</p>
                <br/>
                <p className='font-normal text-lg'>We do the heavy lifting. Free delivery and assembly in as soon as 7 days.</p>
              </div>
              <div className='lg:inline hidden'>
              <img className="w-full bg-cover bg-center" src="https://fernish.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvp-delivery.2de22874.jpg&w=2400&q=75"></img>
              </div>
            </div>
          </div>
          <div className='bg-sky-100 h-auto mb-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div>
              <img className="w-full bg-cover bg-center" src="https://fernish.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvp-rent-to-own.8612ee6b.jpg&w=2400&q=75"></img>
              </div>
              <div className='m-auto text-mono p-20'>
                <p className='font-medium text-6xl'>Risk free.</p>
                <br/>
                <p className='font-normal text-lg'>Furniture three ways. Rent, rent-to-own, or buy. Your furniture is as flexible as you need it to be.</p>
              </div>
            </div>
          </div>
          <div className='bg-pengrajin-wash h-auto mb-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='lg:hidden inline'>
                <img className="w-full bg-cover bg-center" src="https://fernish.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvp-waste-free.e08ff78b.jpg&w=2400&q=75"></img>
              </div>
              <div className='m-auto text-mono  p-20'>
                <p className='font-medium text-6xl'>Waste free.</p>
                <br/>
                <p className='font-normal text-lg'>Last year we saved 522 tons of furniture from landfills. With your help, we can do even more.</p>
                <br/>
              <img className='absolute w-8/12 md:w-auto' src="https://fernish.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freduce-refurbish-relove.4f0d6570.png&w=375&q=75"></img>

              </div>
              <div className='lg:inline hidden'>
              <img class="w-full bg-cover bg-center" src="https://fernish.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvp-waste-free.e08ff78b.jpg&w=2400&q=75"></img>
              </div>
            </div>
          </div>
          <div className='bg-sky-100 h-auto mb-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div>
              <img className="w-full bg-cover bg-center" src="https://fernish.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvp-lowcost.e76ff62e.jpg&w=2400&q=75"></img>
              </div>
              <div className='m-auto text-mono p-20'>
                <p className='font-medium text-6xl'>Home free.</p>
                <br/>
                <p className='font-normal text-lg'>It’s never been easier to create your space, with flexible pricing from $149/month.</p>
              </div>
            </div>
          </div>
          <div className='bg-pengrajin-wash h-auto mb-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='inline lg:hidden'>
              <img className="w-full bg-cover bg-center" src="https://fernish.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvp-quality.2952fe08.jpg&w=2400&q=75"></img>
              </div>
              <div className='m-auto text-mono  p-20'>
                <p className='font-medium text-5xl'>Rent the brands you’d love to own.</p>
                <br/>
                <p className='font-normal text-lg'>Spruce up your living space, liven up your walls, or set up your home office - all with curated designer furniture.</p>
                <br/>
              <img className='absolute w-8/12 md:w-auto' src="https://fernish.com/_next/static/media/vp-logos.2110ed43.svg"></img>

              </div>
              <div className='lg:inline hidden'>
              <img className="w-full bg-cover bg-center" src="https://fernish.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvp-quality.2952fe08.jpg&w=2400&q=75"></img>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full bg-pengrajin-wash h-auto mb-20'>
          <div  className='w-3/4 m-auto py-20'>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
              <div className='m-auto'>
                <p className='font-medium text-5xl '>
                Discover the perfect look for your home.
                </p>
                <br/>
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-3 px-6 rounded-full mb-5">Browser the gallery</button>
              </div>
              <div className='m-auto mb-5'>
                <img  className='w-80 bg-contain bg-center' src="https://fernish.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcozy-corner.015d252c.jpg&w=2400&q=75"></img>
              </div>
              <div className='m-auto'>
                <img  src="https://fernish.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdream-bedroom.2cb24eb9.jpg&w=2400&q=75"></img>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-3/4 h-auto m-auto'>
          <p className='text-center font-medium text-3xl my-10 '>Get inspired by real Fernish customers.</p>
            <Splide 
                    options={ {
                      perPage: 3,
                      breakpoints: {
                        640: {
                          perPage: 2,
                        },
                      },
                      rewind : true,
                      gap    : '1rem',
                    } }
                    >
               {slideImg}
 
            </Splide>

          <div className='content-faq'>
            <div className="container flex flex-col justify-center p-4 mx-auto lg:p-8">
              <h2 className="mb-12 text-1xl font-normal leading-none text-center sm:text-3xl">Frequently Asked Questions</h2>
              <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                {faq}
              </div>
              </div>
              <p className='text-xl font-bold text-center underline decoration-4 cursor-pointer '> <a className='hover:text-pengrajin-blue-dark'>See all FAQs</a></p>
          </div> 

            <Splide 
                    options={ {
                      perPage: 4,
                      breakpoints: {
                        640: {
                          perPage: 2,
                        },
                      },
                      rewind : true,
                      gap    : '1rem',
                    } }
                    >
               {slideProduct}
            </Splide>
        </div>

   </>
  )
}

export default content 