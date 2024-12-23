import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Result = () => {


  const [image, setImage] = useState(assets.sample_img_1)
  const [isimageLoaded, setisimageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const onSubmitHandler = async (e) =>{

  }



  return (
    <form  onSubmit={onSubmitHandler} className='flex flex-col min-h-[90vh] justify-center items-center'>
    <div>
      <div className='relative'>
        <img className='max-w-sm rounded' src={image} alt="" />
        <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`}></span>
      </div>
      <p className={!loading ? 'hidden':''}>Loading........</p>
    </div>

    {!isimageLoaded && 
    <div className='flex w-full max-w-xl text-white bg-neutral-500 text-sm p-0.5 mt-10 rounded-full'>
      <input onChange={e=>setInput(e.target.value)} value={input} className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20' type="text" placeholder='Describe what you want to generate' name="" id="" />
      <button className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full placeholder-color' type='submit'>Generate</button>
    </div>
}
{isimageLoaded && 
    <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'>
      <p onClick={()=>{setisimageLoaded(false)}} className='bg-transparent border border-zinc-900
text-black px-8 py-3 rounded-full cursor-pointer'>Generate Another</p>
      <a download className='bg-zinc-900 px-10 py-3 rounded-full
cursor-pointer' href={image}>Download</a>
    </div>
}
    </form>
  )
}

export default Result