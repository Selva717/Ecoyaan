import React from 'react'
import img4 from '../img/heroContent/img4.png'

import Value from '../components/Value'
import Footer from '../components/footer'
import Team from '../components/Team'
const About = () => {
  return (
    <>
        <div  className='w-[auto] px-[80px] py-[80px] mx-auto  bg-[#F0F8FF]' >
            <div className='flex gap-3  max-[700px]:flex-col mb-[100px]'>
                
                <div >
                    <div className='font-bold text-3xl  text-left mb-10 max-[400px]:text-xl'>Join our community in creating a more sustainable future for everyone</div>
                    <div  className=' mb-10 text-justify  text-[22px]  max-[400px]:text-[16px]'>At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.</div>
                    <div  className=' mb-10  text-justify  text-[22px]   max-[400px]:text-[16px]'>Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</div>
                </div>
                
                <img className='w-[50%] h-[300px] object-cover max-[700px]:w-[90%]  hover:scale-[0.95] duration-150 max-[700px]:h-[160px] max-[700px]:object-contain  max-[700px]:mb-[100px]' src={img4} alt="" />
            </div>

        </div>

        <Value/>
        <Team/>
        <Footer/>

    </>
  )
}

export default About