import React from 'react'
import p1 from '../img/heroContent/p1.png'
import p2 from '../img/heroContent/p2.png'
import p3 from '../img/heroContent/p3.png'
import p4 from '../img/heroContent/p4.png'
import p5 from '../img/heroContent/p5.png'
import p6 from '../img/heroContent/p6.png'


const Datas = [
    {
        "img":p1,
        "name":"SHRUTHI",
        "Stream":"SOCIAL MEDIA",
        "dec":"Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business"

    },
    {
        "img":p2,
        "name":"URMIL",
        "Stream":"SOCIAL MEDIA",
        "dec":"Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion. Check out her business"

    },
    {
        "img":p3,
        "name":"DIVYA",
        "Stream":"UX DESIGN",
        "dec":"Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on"

    },
    {
        "img":p4,
        "name":"PRASHANITH",
        "Stream":"ENGINEERING",
        "dec":"Prashanith is our front-end engineer, who brings the UX designs to life"

    },
    {
        "img":p5,
        "name":"SAI ABHILASH",
        "Stream":"ENGINEERING",
        "dec":"Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform"

    },
    {
        "img":p6,
        "name":"???",
        "Stream":"TEAM ECOYAAN",
        "dec":"This spot awaits you. Check out our"

    }
]

const Team = () => {
  return (
    <div className=' w-[90%] mx-[auto]'>
        <div className='font-bold text-3xl mb-4'>Our Team</div>
        <div className='flex justify-evenly items-center gap-7 flex-wrap'>
            {
                Datas.map((data=>(
                    <>
                        <div className='flex flex-col justify-center items-center w-[400px]'>
                            <img className='w-[100px] mb-10' src={data.img} alt="" />
                            <div className='font-bold text-xl mb-5'>{data.name}</div>
                            <div className=' text-[#d45050] text-xl mb-3'>{data.Stream}</div>
                            <div>{data.dec}</div>
                        </div>
                    </>
                )))
            }
        </div>
    </div>
  )
}

export default Team