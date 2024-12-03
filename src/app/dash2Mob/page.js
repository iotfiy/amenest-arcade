'use client'
import Mob2DashVenue from '@/components/Mob2DashVenue'
import MobDashMenu from '@/components/MobDashMenu'
import Image from 'next/image'
import React from 'react'

function Page() {
  return (
    <div className='px-2 mb-20 '>
         <div className="flex items-center justify-between  bg-custom-headpurple  px-2 py-2 rounded-xl my-1  ">
      <Image src="/ProfDash.svg" width={180} height={56} alt="Profile Icon"/>
      <Image src="/AddUserIcon.svg" width={43} height={43} alt="Add User Icon"/>
    </div>
    <div className='flex items-center justify-between  my-3 '>
      <h1 className="text-2xl  text-gray-700 font-bold ">Arcade Details</h1>
      <Mob2DashVenue />
    </div>

    
<div className="relative">
<img src="/Style1.svg" className=' z-2   '/>
    <div className='grid grid-cols-3  gap-y-2 p-2 gap-x-2 z-10 absolute top-0 left-4 '>
                <div className='border bg-custom-cardpeach border-gray-300 rounded-3xl  shadow-md   flex flex-col items-center justify-center  py-1 '>
                  <h1 className="text-md  ">Hard Play</h1>
                  <div className='flex items-center justify-center '>
                    <h1 className="text-md font-bold  text-2xl  ml-1" >60</h1>
                    <Image src="/Play.svg" height={40} width={40} />
                  </div>
                  <h1 className="text-lg" >Plays</h1>
                </div>

                <div className='border border-gray-300 bg-custom-cardgreen rounded-3xl  shadow-md   flex flex-col items-center justify-center   py-1 '>
                  <h1 className="text-md  ">Revenue</h1>
                  <div className='flex items-center justify-center  ml-1'>
                    <h1 className="text-md font-bold  text-2xl" >60</h1>
                    <Image src="/USD.svg" height={50} width={50} />
                  </div>
                  <h1 className="text-lg" >Dollar</h1>
                </div>


                <div className='border bg-custom-cardblue border-gray-300 rounded-3xl  shadow-md flex flex-col items-center justify-center  py-1 '>
                  <h1 className="text-md  ">Token</h1>
                  <div className='flex items-center justify-center'>
                    <h1 className="text-md font-bold  text-2xl ml-1" >60</h1>
                    <Image src="/coins.svg" height={20} width={20} />
                  </div>
                  <h1 className="text-lg" >Coin</h1>
                </div>
              </div>
    </div>


<div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-2 mt-2'>

<div className='bg-custom-headpurple rounded-2xl  mt-2'>
    <div className='flex p-2'>
    <h1 className='text-sm font-bold text-white '>ARCADE ID</h1>
    <p className='text-sm font-sm text-white ml-2'>SH-KHI-A001</p>
    </div>
    <div className="flex justify-between items-center ">
        
        <Image src="/coins.svg"  height={10} width={20}  className='ml-5'/>
        <h1 className='text-xl mr-5 font-thin '>Coins: <span>120</span></h1>
        <h1 className='text-2xl font-bold  mr-5'>60 $</h1>
        <button className='bg-[#675EBB] rounded-tl-2xl rounded-br-2xl  p-2 text-white font-bold text-sm py-2 px-4'>Play</button>
    </div>
</div>


 
<div className='bg-custom-headpurple rounded-2xl  mt-2'>
    <div className='flex p-2'>
    <h1 className='text-sm font-bold text-white '>ARCADE ID</h1>
    <p className='text-sm font-sm text-white ml-2'>SH-KHI-A001</p>
    </div>
    <div className="flex justify-between items-center ">
        
        <Image src="/coins.svg"  height={10} width={20}  className='ml-5'/>
        <h1 className='text-xl mr-5 font-thin '>Coins: <span>120</span></h1>
        <h1 className='text-2xl font-bold  mr-5'>60 $</h1>
        <button className='bg-[#675EBB] rounded-tl-2xl rounded-br-2xl  p-2 text-white font-bold text-sm py-2 px-4'>Play</button>
    </div>
</div>




 
<div className='bg-custom-headpurple rounded-2xl  mt-2'>
    <div className='flex p-2'>
    <h1 className='text-sm font-bold text-white '>ARCADE ID</h1>
    <p className='text-sm font-sm text-white ml-2'>SH-KHI-A001</p>
    </div>
    <div className="flex justify-between items-center ">
        
        <Image src="/coins.svg"  height={10} width={20}  className='ml-5'/>
        <h1 className='text-xl mr-5 font-thin '>Coins: <span>120</span></h1>
        <h1 className='text-2xl font-bold  mr-5'>60 $</h1>
        <button className='bg-[#675EBB] rounded-tl-2xl rounded-br-2xl  p-2 text-white font-bold text-sm py-2 px-4'>Play</button>
    </div>
</div>


<MobDashMenu/>


</div>


    </div>
  )
}

export default Page