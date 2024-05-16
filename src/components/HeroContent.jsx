import React from 'react'
import img1 from'../img/heroContent/img1.png'
import img2 from '../img/heroContent/img2.mp4'
import img3 from '../img/heroContent/img3.png'

const HeroContent = () => {
  return (
    <div className='w-[90%] my-[100px] mx-auto   mb-11' >
        <div className='flex gap-3 items-center max-[700px]:flex-col mb-[100px]'>
            
            <div>
                <div className='font-bold text-3xl text-left mb-10 max-[400px]:text-xl'>Join our community in creating a more sustainable future for everyone</div>
                <div  className=' mb-10 text-justify text-[22px] max-[400px]:text-[16px]'>At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.</div>
                <div  className=' mb-10  text-justify  text-[22px]  max-[400px]:text-[16px]'>Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</div>
            </div>
            
            <img className='w-[50%] max-[700px]:w-[90%] max-[700px]:h-[150px] hover:scale-[0.95] duration-150 max-[700px]:h-[160px] max-[700px]:object-contain  max-[700px]:mb-[100px]' src={img1} alt="" />
        </div>

        <div className='flex gap-3 items-center max-[700px]:flex-col mb-[100px]'>
            
            <div>
                <div className='font-bold text-3xl text-left mb-10 max-[400px]:text-xl'>Join our community in creating a more sustainable future for everyone</div>
                <div  className=' mb-10 text-justify   text-[22px]  max-[400px]:text-[16px]'>At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.</div>
                <div  className=' mb-10  text-justify   text-[22px]  max-[400px]:text-[16px]'>Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</div>
            </div>
            
            <video className='w-[50%] max-[700px]:w-[90%] max-[700px]:h-[150px] hover:scale-[0.95] duration-150 max-[700px]:h-[160px] max-[700px]:object-contain  max-[700px]:mb-[100px]' src={img2} autoplay loop muted playsinline></video>
        </div>

        <div className='flex gap-3 items-center max-[700px]:flex-col'>
            
            <div>
                <div className='font-bold text-3xl text-left mb-10 max-[400px]:text-xl'>Join our community in creating a more sustainable future for everyone</div>
                <div  className=' mb-10 text-justify   text-[22px]  max-[400px]:text-[16px]'>At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.</div>
                <div  className=' mb-10  text-justify   text-[22px]   max-[400px]:text-[16px]'>Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</div>
                
            </div>
            
            <img className='w-[50%] max-[700px]:w-[90%] max-[700px]:h-[150px] hover:scale-[0.95] duration-150 max-[700px]:h-[160px] max-[700px]:object-contain max-[700px]:mb-[100px]' src={img3} alt="" />
        </div>

        <button className=' text-white border bg-[#16A34A] py-2 px-4 rounded-[12px] w-[130px] text-center  mb-[100px]'>Contact Us</button>

    </div>
  )
}

export default HeroContent