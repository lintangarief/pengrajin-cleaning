import React, { useState } from 'react'
import { Menu, Close,CartOutline,SearchOutline,PersonOutline,HeartOutline } from 'react-ionicons'
function Header() {

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


  let Links =[
    {name:"The Goods",link:"/"},
    {name:"The Service",link:"/"},
    {name:"The Company",link:"/"},
  ];
  let [open,setOpen]=useState(false);
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
    <div className={`w-full h-screen z-[10] bg-pengrajin-wash fixed ${cekCode ? 'hidden ':'inline'}`}>
      <div onClick={()=>setcekCode(!cekCode)} className='cursor-pointer absolute top-0 right-0 '>
        <Close  color={'#00000'} height="50px" width="50px" /> 
      </div>
        <p className='text-center font-bold mt-20 lg:text-4xl text-2xl'>Enter your zip code to confirm we are delivering to your area.</p>
      <div className='lg:w-2/12 w-1/2 m-auto' >
        <form className='flex flex-col' onSubmit={handleFormChecker}>
        <input className=" shadow appearance-none border mt-5 rounded w-1/2 m-auto lg:w-auto py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={inputData} onChange={handleInputChange} id="zipcode" type="text" placeholder="Zip Code"></input>
        <button className="border-solid border-2 mt-5 border-pengrajin-blue text-pengrajin-blue  text-lg font-bold py-2 px-6 mx-5 rounded-full  hover:bg-pengrajin-blue hover:text-white transition-all duration-100 ease-in" type='submit'>Submit</button>
        </form>
      </div>
              <div className={`  ${isAppeared ? 'inline' : 'hidden'}`}> 
                  {isDataFounded ? <p className=' mt-5 text-center'>Zip Code exists!</p> : <p className=' mt-5 text-center'>Zip Code does not exist!</p>}
              </div>
           
    </div>
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
              <button onClick={()=>setcekCode(!cekCode)} className="border-solid border-2 border-pengrajin-blue inline lg:hidden text-pengrajin-blue text-lg font-bold py-1 px-8 mx-2 mb-5 rounded-full hover:bg-pengrajin-blue hover:text-white transition-all duration-100 ease-in">Check Delivery Area</button>
            </ul>
          </div>
          <div className='col-span-3 m-auto'>
            <p className='text-xl font-semibold '>PENGRAJIN CLEANING</p>
          </div>
          <div>
            <div className='icon grid  gap-5 lg:gap-0 grid-cols-2 lg:grid-cols-10 flex items-center'>
            <div className='lg:inline hidden col-span-6'>
            <button onClick={()=>setcekCode(!cekCode)} className="border-solid border-2 border-pengrajin-blue text-pengrajin-blue text-lg font-bold py-1 px-8 mx-2 rounded-full hover:bg-pengrajin-blue hover:text-white transition-all duration-100 ease-in">Check Delivery Area</button>
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
    </>
  )
}

export default Header