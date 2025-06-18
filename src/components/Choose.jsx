import whiteCar from "../assets/Whitecar.png";
import lighting from "../assets/Chooselogo.png";
const Choose = () => {
    return ( 
        <div className='py-10 flex  h-100 justify-between gap-3 items-center'>
            <div className='w-[50%] relative  flex items-start justify-start'>
                <img src={whiteCar} alt="" className='w-150 absolute -left-10' />
               <img src={lighting} 
                className="absolute inset-y-0 -left-30 -top-10 w-80 h-80 object-cover filter blur-sm z-9 -rotate-5 "/>
            </div>
            <div className='w-[40%] mx-auto flex flex-col gap-5'> 
                 <div 
                    className='text-[#A020F0] px-5 py-2 rounded-[8px] bg-[rgba(21,114,211,0.1)] w-fit'
                >
                    <p>How it Works</p>
                </div>
                <div className='w-[70%] '>
                    <h1 className='text-[#333] font-space text-4xl font-medium text-left leading-13'>We offer the best experience with our rental deals</h1>
                </div>
                <div>

                </div>
            </div>
        </div>
     );
}
 
export default Choose;