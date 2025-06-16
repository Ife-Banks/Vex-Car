import Nav from './Nav';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import VioletCar from '../assets/4c17c6172d647b877fa43f78c5952bef7b21de99 (1).png';
import z from '../assets/z.png'

const Hero = () => {
    return ( 
        <div className='overflow-hidden'>
            <Nav/>
            {/* main hero part */}
            <div className='flex items-center gap-8 border justify-end'>
            {/* text area */}
                <div className='border w-[30%] flex p-1'>
                <LazyLoadImage src={z} alt="" className='h-5 mt-3'/>
                    <div className='border'>
                    <div className='flex border'> 
                    <h1 className='text-[#242424] font-semibold text-5xl '>Find, book and </h1>
                    <LazyLoadImage src={z} alt="" className='h-5 mt-4'/>
                    </div>
                    <div className='flex gap-2'><p className='text-[#242424] font-semibold text-5xl '>rent a car</p> <span className='flex flex-col font-semibold text-5xl'><p className='text-[#A020F0]'>Easily</p>
                    
            <svg xmlns="http://www.w3.org/2000/svg" width="130" height="20" viewBox="0 0 135 20" fill="none">
            <path d="M134.398 2.4454C57.1256 -2.591 23.8505 5.91265 1.51269 9.43271C1.16554 12.3701 1.29738 14.786 0.927661 19.4527C60.8229 -0.00292444 100.753 3.19434 134.353 4.43374C134.367 4.06427 134.357 3.55381 134.398 2.4454Z" fill="#A020F0"/>
            </svg></span>
</div>
                    <p>Get a car where and whenever you need it with your IOS and Andriod device</p>
                    {/* buttons wrapper*/}
                    <div>
                    {/* one button */}
                        <div>
                            <img src="" alt="" srcset="" />
                            <div>
                                <p>Get it on</p>
                                <h1>Google Play</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='border p-0 m-0 -mr-30 pl-20'>
                    <LazyLoadImage src={VioletCar} alt="" srcset="" className='border object-cover '/>
                </div>
            </div>
            {/* locator */}
            <div></div>
        </div>
     );
}
 
export default Hero;