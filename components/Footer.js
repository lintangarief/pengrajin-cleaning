import React from 'react'
import { LogoLinkedin,LogoInstagram, LogoFacebook,LogoPinterest,LogoTwitter} from 'react-ionicons'


function Footer() {
  return (
    <div>
        <div className='w-full border-t-4 border-stone-300'>
            <div className=' py-[50px] '>
                <div className='m-auto w-full md:w-3/4  px-2 md:px-0 grid grid-cols-1 md:grid-cols-6 mb-5 '>
                    <div className='hidden md:inline '>
                        <p className=' font-bold text-m mb-5'>Pengrajin.com</p>
                        <p className=' font-normal text-m mb-5'>Tanya Harga</p>
                        <p className=' font-normal text-m mb-5'>Kitchen Dama</p>
                        <p className=' font-normal text-m mb-5'>Lemari Custom Fima</p>
                        <p className=' font-normal text-m mb-5'>How It Works</p> 
                    </div>
                    <div className='hidden md:inline'>
                        <p className=' font-bold text-m mb-5'>Dekoruma Desain Interior</p>
                        <p className=' font-normal text-m mb-5'>Tanya Harga</p>
                        <p className=' font-normal text-m mb-5'>Kitchen Dama</p>
                        <p className=' font-normal text-m mb-5'>Lemari Custom Fima</p>
                        <p className=' font-normal text-m mb-5'>How It Works</p>  
                    </div>
                    <div className='hidden md:inline'>
                        <p className=' font-bold text-m mb-5'>Company</p>
                        <p className=' font-normal text-m mb-5'>Tentang Kami</p>
                        <p className=' font-normal text-m mb-5'>Help Center</p>
                        <p className=' font-normal text-m mb-5'>Artikel</p>
                        <p className=' font-normal text-m mb-5'>Merchant Central</p>  
                        <p className=' font-normal text-m mb-5'>Thudio</p> 
                    </div>
                    <div className='col-span-2'>
                        <p className=' font-bold text-m mb-5'>Be in the know</p>
                        <p className=' font-normal text-m mb-5'>Get the latest products, promotions, and design tips in your inbox. Sign up and get 25% off your first month.</p>
                        <input className="shadow appearance-none border rounded w-1/2 md:w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="zipcode" type="text" placeholder="Email"></input>
                        <button className="border-solid border-2 border-pengrajin-blue text-pengrajin-blue text-lg font-bold py-2 px-6 mx-5 rounded-full">Submit</button>
                    </div>
                    <div>
                    </div>
                </div>
                <div className=' w-auto grid grid-cols-1 m-auto md:hidden inline'>
                    
                    <div className='w-1/2 m-auto grid grid-cols-5 mb-5' >
                            
                    <LogoFacebook
                    color={'#00000'} 
                    height="25px"
                    width="25px"
                    />
                    <LogoInstagram
                    color={'#00000'} 
                    height="25px"
                    width="25px"
                    />
                    <LogoTwitter
                    color={'#00000'} 
                    height="25px"
                    width="25px"
                    />
                    <LogoLinkedin
                    color={'#00000'} 
                    height="25px"
                    width="25px"
                    />
                    <LogoPinterest
                     color={'#00000'} 
                     height="25px"
                     width="25px"
                    />
                        </div>
                        <div className='mb-5'>
                        <p className='text-normal text-center'>© 2017-2023 Pengrajin | Terms of Use & Privacy Policy</p>
                    </div>
                </div>
                <div className='hidden md:inline'>
                <div className='m-auto w-3/4 flex justify-between '>
                    <div className='order-first'>
                    <p>© 2017-2023 Pengrajin | Terms of Use & Privacy Policy</p>
                    </div>
                    <div className='order-last'>
                        
                        <div className=' grid grid-cols-5 gap-5' >
                            
                    <LogoFacebook
                            color={'#00000'} 
                            height="25px"
                            width="25px"
                            />
                           <LogoInstagram
                            color={'#00000'} 
                            height="25px"
                            width="25px"
                            />
                           <LogoTwitter
                            color={'#00000'} 
                            height="25px"
                            width="25px"
                            />
                           <LogoLinkedin
                            color={'#00000'} 
                            height="25px"
                            width="25px"
                          />
                           <LogoPinterest
                            color={'#00000'} 
                            height="25px"
                            width="25px"
                          />
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer