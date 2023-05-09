import React from 'react'
function Header() {
  return (
<div className='header-container shadow-lg'>

 <ul className='flex justify-start px-8 py-4'>
    <li className='mr-3' ><a className='text-xs inline-block  px-2 font-bold' href='#'>Pengrajin.Com</a> |</li> 
    <li className='mr-3' ><a className='text-xs inline-block  px-2 font-bold' href='#'>Product</a></li> 
    <li className='mr-3' ><a className='text-xs inline-block   px-2 font-bold' href='#'>Cara Kerja</a></li> 
    <li className='mr-3' ><a className='text-xs inline-block  px-2 font-bold' href='#'>Portofolio</a></li> 
    <li className='mr-3' ><a className='text-xs inline-block   px-2 font-bold' href='#'>Area Jangkauan</a></li> 
    <li className='mr-3' ><a className='text-xs inline-block   px-2 font-bold' href='#'>Thudio Untuk Desainer</a></li> 
 </ul>
</div>
  )
}

export default Header