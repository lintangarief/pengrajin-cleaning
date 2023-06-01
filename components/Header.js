import React, { useState } from 'react'
import { Menu, Close,CartOutline,SearchOutline,PersonOutline,HeartOutline } from 'react-ionicons'
function Header() {
  let Links =[
    {name:"The Goods",link:"/"},
    {name:"The Service",link:"/"},
    {name:"The Company",link:"/"},
  ];
  let [open,setOpen]=useState(false);
  return (
    <div className=' w-full fixed top-0 left-0 z-[3]'>
      <div className='md:flex grid grid-cols-5 bg-white py-8 md:px-10 px-5'>
      <div className='menu md:flex md:items-center'>
              <ul className={`lg:flex lg:items-center pb-0 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-[90px] ':'top-[-450px]'}`}>
              {
                Links.map((link)=>(
                  <li key={link.name} className=' ml-0 lg:ml-10 font-normal text-sm lg:my-0 my-5'>
                    <a href={link.link} className='text-gray-800 hover:text-teal-600 duration-100'>{link.name}</a>
                  </li>
                ))
              } 
            </ul>
          </div>
          <div className='col-span-3 m-auto'>
            <p className='text-xl font-semibold '>PENGRAJIN WASH</p>
          </div>
          <div>
            <div className='icon grid  gap-5 lg:gap-0 grid-cols-2 lg:grid-cols-10 flex items-center'>
            <div className='lg:inline hidden col-span-6'>
            <button className="border-solid border-2 border-pengrajin-blue text-pengrajin-blue text-lg font-bold py-1 px-8 mx-2 rounded-full">Check Delivery Area</button>
              </div>
              <div className='lg:inline hidden cursor-pointer '>
              <PersonOutline  
                color={'#00000'} 
                height="25px" 
                width="25px" />
              </div>
              <div className='lg:inline hidden cursor-pointer '>
                <HeartOutline   
                color={'#00000'} 
                height="25px" 
                width="25px" />
 
              </div>
              <div className='cursor-pointer '>
                <SearchOutline  
              color={'#00000'} 
              height="25px" 
              width="25px" />
 
              </div>
              <div className='cursor-pointer '>
                <CartOutline  
                color={'#00000'} 
                height="25px" 
                width="25px" />
              </div>
                
                
            </div>
          </div>
      
          <div onClick={()=>setOpen(!open)} className='text-5xl absolute top-5 cursor-pointer lg:hidden'>
      {open ?  <Close  color={'#00000'} height="50px" width="50px" /> :  <Menu  color={'#00000'} height="50px" width="50px" />
      }     
      </div>

      
      </div>
    </div>
  )
}

export default Header