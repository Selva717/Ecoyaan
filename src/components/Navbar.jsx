import React from 'react'
import { useState ,useEffect} from 'react'
import { Link,useLocation } from 'react-router-dom'

const Navbar = () => {
    const [onMobileScreen,setMobileScreen] = useState(false)
    const location = useLocation()

    function handleMenu(){
        setMobileScreen(!onMobileScreen)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [location.pathname])

    const homeloc = location.pathname === '/'? 'text-[white] font-bold bg-[#16A34A] px-2 py-3 rounded-[12px]':'text-[black]'

    const aboutloc = location.pathname === '/about'? 'text-[white] font-bold bg-[#16A34A] px-2 py-3 rounded-[12px]':'text-[black]'

    

    return (
    <div className='sticky top-0 z-50 bg-white'>
        <div className='flex items-center w-[100%] mx-[auto] justify-between px-[82px] py-[10px] relative'>
        <div className='flex gap-3 items-center'>
            <svg onClick={handleMenu}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" mobile-svg min-[791px]:hidden">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <div class="font-bold text-3xl hover:text-4xl smooth-transition text-[#16A34A]">Ecoyaan</div>
        </div>
        
        

        <div className='flex gap-10  font-medium text-xl max-[790px]:hidden'>
        
            <Link to='/' className={`hover:font-bold smooth-transition hover:text-2xl`}>Home</Link>
            <Link to='/about'  className={`hover:font-bold smooth-transition hover:text-2xl`}>About us</Link>
            <Link to='/'  className={`hover:font-bold smooth-transition hover:text-2xl`}>Sell on Ecoyaan</Link>
            <Link to='/' className={`hover:font-bold smooth-transition hover:text-2xl`}>Careers</Link>
        </div>

        
      </div>

      {
          onMobileScreen&&(
            <div className='absolute top-0 let-0 w-[300px] h-[100vh] bg-white  border-b border-r border-solid border-[#57565645]'>
              <div onClick={handleMenu} className='flex flex-col   font-medium px-20'>

                <div className=' flex gap-8 mt-[10px]  relative'>
                    <div class="font-bold text-xl text-[#16A34A]  mb-[70px]">Ecoyaan</div>
                    <svg  xmlns="http://www.w3.org/2000/svg"   class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv mobile-svg" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MenuOpenIcon"><path d="M3 18h13v-2H3zm0-5h10v-2H3zm0-7v2h13V6zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5z"></path></svg>
                </div>

                <Link onClick={handleMenu} to='/' className={`p-3 hover:font-bold ${homeloc}`}>Home</Link>
                <Link onClick={handleMenu} to='/about' className={`p-3 hover:font-bold ${aboutloc}`}>About us</Link>
                <Link onClick={handleMenu} to='/' className='p-3 hover:font-bold'>Sell on Ecoyaan</Link>
                <Link onClick={handleMenu} to='/' className='p-3 hover:font-bold'>Careers</Link>
                <Link onClick={handleMenu} to='/' className='p-3 hover:font-bold'>Privacy Policy</Link>
                <Link onClick={handleMenu} to='/' className='p-3 hover:font-bold'>Terms of use</Link>


              </div>
            </div>
          )
        }
    </div>
  )
}

export default Navbar