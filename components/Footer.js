import React from 'react'

function Footer() {
  return (
    <div>
        <div className='w-full bg-pengrajin-blue'>
            <div className='m-auto w-3/4 py-[50px]'>
                <div className='grid grid-cols-1 md:grid-cols-4'>
                    <p className='text-3xl font-bold  text-white col-span-3 mb-5'>Siap Wujudkan Interior Impianmu?</p>
                    <button class=" bg-white text-center text-pengrajin-blue font-bold py-3 px-10 rounded w-full" type="button">
                    Tanya Harga
                    </button>
                </div>
            </div>
            <div className='bg-pengrajin-blue-dark py-[50px] '>
                <div className='m-auto w-3/4 grid grid-cols-1 md:grid-cols-4'>
                    <div>
                        <p className='text-white font-bold text-2xl'>Pengrajin.com</p>
                        <p className='text-white font-medium text-m mb-5'>Rumah Impian Jadi Kenyataan</p>
                        <p className='text-white font-medium text-m mb-5'>Senin - Jumat</p>
                        <p className='text-white font-medium text-m mb-5'>09.00 - 18.00</p>
                        <p className='text-white font-medium text-m mb-5'>(021) 5098-6977</p>
                        <p className='text-white font-medium text-m mb-5'>hello@pengrajin.com</p>  
                    </div>
                    <div>
                        <hr className='mb-5 block md:hidden'></hr>
                        <p className='text-white/70  font-medium text-m mb-5'>Dekoruma Desain Interior</p>
                        <p className='text-white font-medium text-m mb-5'>Tanya Harga</p>
                        <p className='text-white font-medium text-m mb-5'>Kitchen Dama</p>
                        <p className='text-white font-medium text-m mb-5'>Lemari Custom Fima</p>
                        <p className='text-white font-medium text-m mb-5'>How It Works</p>  
                        <p className='text-white font-medium text-m mb-5'>Proyek Saya</p>  
                        <p className='text-white font-medium text-m mb-5'>Syarat & Ketentuan</p>  
                        <p className='text-white font-medium text-m mb-5'>FAQ</p>  
                        <p className='text-white font-medium text-m mb-5'>Interior Untuk Bisnismu</p>  
                    </div>
                    <div>
                        <hr className='mb-5 block md:hidden'></hr>
                        <p className='text-white/70  font-medium text-m mb-5'>Portofolio</p>
                        <p className='text-white font-medium text-m mb-5'>Semua Portofolio</p>
                        <p className='text-white font-medium text-m mb-5'>Kitchen Set</p>
                        <p className='text-white font-medium text-m mb-5'>Desain Interior Apartemen</p>
                        <p className='text-white font-medium text-m mb-5'>Desain Interior Rumah</p>  
                        <p className='text-white font-medium text-m mb-5'>Walk-in Closet</p>  
                        <p className='text-white font-medium text-m mb-5'>Office</p>  
                        <p className='text-white font-medium text-m mb-5'>Developer</p>  
                        <p className='text-white font-medium text-m mb-5'>Hospitality & Retail</p>  
                    </div>
                    <div>
                        <hr className='mb-5 block md:hidden'></hr>
                        <p className='text-white/70  font-medium text-m mb-5'>Company</p>
                        <p className='text-white font-medium text-m mb-5'>Tentang Kami</p>
                        <p className='text-white font-medium text-m mb-5'>Help Center</p>
                        <p className='text-white font-medium text-m mb-5'>Artikel</p>
                        <p className='text-white font-medium text-m mb-5'>Merchant Central</p>  
                        <p className='text-white font-medium text-m mb-5'>Thudio</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer