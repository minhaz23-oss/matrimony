import Image from 'next/image';
import React from 'react'

const Dashboard = () => {
  return (
    <section className=' w-full h-full p-4 pb-[80px]'>
      <div className='flex flex-col sm:flex-row justify-between gap-3 w-full'>
        <div className='w-full sm:w-1/3 h-[300px] bg-blue shadow-2xl rounded-md flex flex-col justify-center items-center text-white px-5'>
           <h1 className='text-[50px] font-bold leading-none'>0</h1>
           <p className=' text-[22px] font-semibold'>Connections available</p>
           <p className='text-center mt-1'>1 connections is required to view contact details of each biodata</p>
           <button className=' bg-white rounded-md px-5 py-2 text-black font-semibold mt-3 hover:bg-white/[50%] '>Buy more connections</button>
        </div>
        <div className='w-full sm:w-1/3 h-[300px] shadow-2xl rounded-md flex flex-col justify-center items-center text-blue px-5'>
        <h1 className='text-[50px] font-bold leading-none'>0</h1>
        <p className=' text-[22px] font-semibold'>Number of biodata visits</p>
        <p className='text-center mt-1'>Number of times your biodata has been visited</p>
        <div className=' w-full flex gap-2 mt-2'>
          <div className='width-1/3 bg-blue text-white p-2 rounded-md text-center'>
            <p>Last 30 days</p>
            <p className='font-bold'>0</p>
          </div>
          <div className='width-1/3 bg-blue text-white p-2 rounded-md text-center'>
            <p>Last 7 days</p>
            <p className='font-bold'>0</p>
          </div>
          <div className='width-1/3 bg-blue text-white p-2 rounded-md text-center'>
            <p>Today</p>
            <p className='font-bold'>0</p>
          </div>
        </div>
        </div>
        <div className='w-full sm:w-1/3 h-[300px]  shadow-2xl rounded-md flex flex-col justify-center items-center text-blue px-5 text-center'>
        <h1 className='text-[50px] font-bold leading-none'>0</h1>
        <p className=' text-[22px] font-semibold'>your biodata has been shortListed</p>
        <p className=' mt-1'>Those number of people shortListed your biodata</p>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row justify-between gap-3 w-full mt-2'>
        <div className='w-full sm:w-1/3 h-[200px] shadow-2xl rounded-md flex items-center justify-between px-5'>
           <Image src='/heart.png' width={40} height={40} alt='pic' />
           <div className=' text-right'>
           <h1 className='text-[50px] font-bold leading-none'>0</h1>
           <p className=' text-[22px] font-semibold'>your shortList</p>
           <p className=' mt-1'>All your shortlisted biodatas</p>
           </div>
        </div>
        <div className='w-full sm:w-1/3 h-[200px] shadow-2xl rounded-md flex items-center justify-between px-5'>
           <Image src='/ignore.png' width={40} height={40} alt='pic' />
           <div className=' text-right'>
           <h1 className='text-[50px] font-bold leading-none'>0</h1>
           <p className=' text-[22px] font-semibold'>your ignoreList</p>
           <p className=' mt-1'>All your ignoreListed biodatas</p>
           </div>
        </div>
        <div className='w-full sm:w-1/3 h-[200px] shadow-2xl rounded-md flex items-center justify-between px-5'>
           <Image src='/purchase.png' width={40} height={40} alt='pic' />
           <div className=' text-right'>
           <h1 className='text-[50px] font-bold leading-none'>0</h1>
           <p className=' text-[22px] font-semibold'>your purchases</p>
           <p className=' mt-1'>All your purchase history</p>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard;
