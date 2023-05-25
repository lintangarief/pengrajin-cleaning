import React, { useState } from 'react'
import { Menu, Close } from 'react-ionicons'
function Header() {
  let Links =[
    {name:"Product",link:"/"},
    {name:"Cara Kerja",link:"/"},
    {name:"Portofolio",link:"/"},
    {name:"Area Jangkauan",link:"/"},
    {name:"Thudio Untuk Desainer",link:"/"},
  ];
  let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-[3]'>
      <div className='md:flex items-center justify-start bg-white py-8 md:px-10 px-5'>
      <div className='font-bold text-sm cursor-pointer flex items-center 
      text-gray-800'>
        <span className='font-bold  mr-1 pt-2'>
        </span>
        Pengrajin.com
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-5xl absolute right-8 top-4 cursor-pointer md:hidden'>
      {open ?  <Close  color={'#00000'} height="50px" width="50px" /> :  <Menu  color={'#00000'} height="50px" width="50px" />
      }     
      </div>

      <ul className={`md:flex md:items-center pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-15 ':'top-[-450px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 font-bold text-sm md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-teal-600 duration-100'>{link.name}</a>
            </li>
          ))
        }
        
      </ul>
      </div>
    </div>
  )
}

export default Header