import React from 'react'


const footer = () => {
  return (
    <div className=' mt-[100px] mx-auto pb-1 bg-[#e5e7ea]'>
        
            <div className='flex mx-[44px] max-[770px]:flex-col max-[770px]:gap-5'>

                <div className='w-[90%] mx-[auto] pt-10'>
                    <div className='font-bold text-2xl mb-4'>Company</div>
                    <div className='mb-3 text-[20px] text-[#474747]'>About Us</div>
                    <div  className='mb-3 text-[20px] text-[#474747]'>Sell on Ecoyaan</div>
                    <div className='mb-3 text-[20px] text-[#474747]'>Careers</div>
                  
                </div>

                <div className='w-[90%] mx-[auto] pt-10'>
                    <div className='font-bold text-2xl mb-4'>Links</div>
                    <div className='mb-3 text-[20px] text-[#474747]'>Privacy Policy </div>
                    <div className='mb-3 text-[20px] text-[#474747]'>Terms of use</div>
                </div>

                <div className='w-[90%] mx-[auto] pt-10'>
                    <div className='font-bold text-2xl mb-4'>Follow Us</div>
                    <div className='flex gap-4'>
                        <a href=""  target='_blank'>
                        <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#c13584]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                            </svg>
                        </span>
                        </a>

                        <a href=" "   target='_blank'>
                            <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-black">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 512 512">
                                <path
                                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                            </span>
                        </a>

                        <a href="https://www.linkedin.com/in/selva-kumar-m-430bb2267/"  target='_blank'>
                            <span class="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path
                                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                </svg>
                            </span>
                        </a>
                    </div>
                    
                </div>

                <div  className='w-[90%] mx-[auto] pt-10'>
                <div className='text-xl mb-7'>Subscribe to receive updates on blogs, future launches and more !</div>
                <input className='px-6 py-2 rounded-[8px] mb-3' type="email" placeholder='Your Email Address'/>
                <div className='text-[14px]'>By subscribing, you agree to receive notifications</div>
                <div  className='text-[14px] text-[#4040fe] mb-4'>Privacy Policy</div>
                <button className=' text-white border bg-[#16A34A] py-2 px-4 rounded-[12px]  text-center  mb-[100px]'>Subscribe</button>
                
               

            </div>
            </div>
            
            <div className='border w-[90%] mx-[auto] border-[#7b7a7a] mb-11'> </div>
            
           

            <div className='flex w-[90%] mx-[auto] pt-10 gap-10 max-[770px]:flex-col max-[770px]:gap-5'>
                <div className=''>
                            <div className='font-bold text-2xl mb-4 '>Registered Address:</div>
                            <div className='mb-3 text-[20px] text-[#474747]'>1-N-12T-781/1</div>
                            <div  className='mb-3 text-[20px] text-[#474747]'>Sri Krishna Vilasa,</div>
                            <div className='mb-3 text-[20px] text-[#474747]'>Urvastores</div>
                            <div className='mb-3 text-[20px] text-[#474747]'>Ashoknagar(MR),</div>

                            <div className='mb-3 text-[20px] text-[#474747]'>Mangalore,</div>

                            <div className='mb-3 text-[20px] text-[#474747]'>Dakshina Kannada- 575006,</div>

                            <div className='mb-3 text-[20px] text-[#474747]'>Karnataka, India</div>

                        
                </div>

                    <div className=''>
                            <div className='font-bold text-2xl mb-4'>Legal Business Name:</div>
                            <div className='mb-3 text-[20px] text-[#474747]'>Kindkarma E-Retail Private Limited</div>
                            <div  className='mb-3 text-[20px] text-[#474747]'></div>
                            <div className='mb-3 text-[20px] text-[#474747]'>CIN: U47912KA2023PTC182592</div>
                            <div className='mb-3 text-[20px] text-[#474747]'>Telephone: +91 9980490777</div>

                        
                    </div>
            </div>
           

           <div className='py-2 mx-2 text-center text-white bg-black text-2xl' >© 2023 - 2024, Ecoyaan <sup>TM</sup> </div>

           <button className='text-white bg-[#16A34A] fixed bottom-2 right-10 py-3 px-5 rounded-tl-[50%] rounded-bl-[50%] rounded-br-[50%] rounded-tr-[2px] mx-3 my-8 z-50'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                </svg>

           </button>
    </div>

    
  )
}

export default footer