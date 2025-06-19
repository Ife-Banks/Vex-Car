import { motion } from "framer-motion";
import whiteCar from "../assets/Whitecar.png";
import lighting from "../assets/Chooselogo.png";

const Choose = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const carImage = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "anticipate"
      }
    }
  };

  const lightingEffect = {
    hidden: { scale: 0.8, opacity: 0, rotate: -15 },
    visible: {
      scale: 1,
      opacity: 0.6,
      rotate: -5,
      transition: {
        duration: 1,
        ease: "backOut"
      }
    }
  };

  return (
    <motion.div 
      className='py-10 flex justify-between gap-3 items-center'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      {/* Left side with images */}
      <div className='w-[50%] relative flex items-start justify-start'>
        <motion.img 
          src={whiteCar} 
          alt="White car" 
          className='w-150 absolute -left-10' 
          variants={carImage}
        />
        <motion.img 
          src={lighting}
          className="absolute inset-y-0 -left-30 -top-10 w-80 h-80 object-cover filter blur-sm z-9 -rotate-5"
          variants={lightingEffect}
        />
      </div>
      
      {/* Right side with content */}
      <motion.div 
        className='w-[40%] mx-auto flex flex-col gap-5'
        variants={container}
      >
        {/* "How it Works" tag */}
        <motion.div 
          className='text-[#A020F0] px-5 py-2 rounded-[8px] bg-[rgba(21,114,211,0.1)] w-fit'
          variants={item}
        >
          <p>How it Works</p>
        </motion.div>
        
        {/* Main heading */}
        <motion.div 
          className='w-[70%]'
          variants={item}
        >
          <h1 className='text-[#333] font-space text-4xl font-medium text-left leading-13'>
            We offer the best experience with our rental deals
          </h1>
        </motion.div>
        
        {/* Features list */}
        <motion.div 
          className='flex flex-col gap-7'
          variants={container}
        >
          {/* Feature 1 */}
          <motion.div 
            className='flex gap-5 items-center'
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className='rounded-[8px] bg-[rgba(21,114,211,0.1)] w-fit p-3 items-center flex'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.94 2.21001L9.53 7.82001H7.12C6.72 7.82001 6.33 7.85001 5.95 7.93001L6.95 5.53001L6.99 5.44001L7.05 5.28001C7.08 5.21001 7.1 5.15001 7.13 5.10001C8.29 2.41001 9.59 1.57001 11.94 2.21001Z" fill="#A020F0"/>
                <path d="M18.73 8.09002L18.71 8.08002C18.11 7.91002 17.5 7.82002 16.88 7.82002H10.62L12.87 2.59002L12.9 2.52002C13.04 2.57002 13.19 2.64002 13.34 2.69002L15.55 3.62002C16.78 4.13002 17.64 4.66002 18.17 5.30002C18.26 5.42002 18.34 5.53002 18.42 5.66002C18.51 5.80002 18.58 5.94002 18.62 6.09002C18.66 6.18002 18.69 6.26002 18.71 6.35002C18.86 6.86002 18.87 7.44002 18.73 8.09002Z" fill="#A020F0"/>
                <path d="M12.52 17.66H12.77C13.07 17.66 13.32 17.39 13.32 17.06C13.32 16.64 13.2 16.58 12.94 16.48L12.52 16.33V17.66Z" fill="#A020F0"/>
                <path d="M18.29 9.52001C17.84 9.39001 17.37 9.32001 16.88 9.32001H7.12C6.44 9.32001 5.8 9.45001 5.2 9.71001C3.46 10.46 2.24 12.19 2.24 14.2V16.15C2.24 16.39 2.26 16.62 2.29 16.86C2.51 20.04 4.21 21.74 7.39 21.95C7.62 21.98 7.85 22 8.1 22H15.9C19.6 22 21.55 20.24 21.74 16.74C21.75 16.55 21.76 16.35 21.76 16.15V14.2C21.76 11.99 20.29 10.13 18.29 9.52001ZM13.28 15.5C13.74 15.66 14.36 16 14.36 17.06C14.36 17.97 13.65 18.7 12.77 18.7H12.52V18.92C12.52 19.21 12.29 19.44 12 19.44C11.71 19.44 11.48 19.21 11.48 18.92V18.7H11.39C10.43 18.7 9.64 17.89 9.64 16.89C9.64 16.6 9.87 16.37 10.16 16.37C10.45 16.37 10.68 16.6 10.68 16.89C10.68 17.31 11 17.66 11.39 17.66H11.48V15.97L10.72 15.7C10.26 15.54 9.64 15.2 9.64 14.14C9.64 13.23 10.35 12.5 11.23 12.5H11.48V12.28C11.48 11.99 11.71 11.76 12 11.76C12.29 11.76 12.52 11.99 12.52 12.28V12.5H12.61C13.57 12.5 14.36 13.31 14.36 14.31C14.36 14.6 14.13 14.83 13.84 14.83C13.55 14.83 13.32 14.6 13.32 14.31C13.32 13.89 13 13.54 12.61 13.54H12.52V15.23L13.28 15.5Z" fill="#A020F0"/>
                <path d="M10.68 14.14C10.68 14.56 10.8 14.62 11.06 14.72L11.48 14.87V13.54H11.23C10.92 13.54 10.68 13.81 10.68 14.14Z" fill="#A020F0"/>
              </svg>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='title'>Best price guaranteed</h1>
              <p className='descrip text-left w-[75%]'>Find a lower price? We'll refund you 100% of the difference</p>
            </div>
          </motion.div>
          
          {/* Feature 2 */}
          <motion.div 
            className='flex gap-5 items-center'
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className='rounded-[8px] bg-[rgba(21,114,211,0.1)] w-fit p-3 items-center flex'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.94 2.21001L9.53 7.82001H7.12C6.72 7.82001 6.33 7.85001 5.95 7.93001L6.95 5.53001L6.99 5.44001L7.05 5.28001C7.08 5.21001 7.1 5.15001 7.13 5.10001C8.29 2.41001 9.59 1.57001 11.94 2.21001Z" fill="#A020F0"/>
                <path d="M18.73 8.09002L18.71 8.08002C18.11 7.91002 17.5 7.82002 16.88 7.82002H10.62L12.87 2.59002L12.9 2.52002C13.04 2.57002 13.19 2.64002 13.34 2.69002L15.55 3.62002C16.78 4.13002 17.64 4.66002 18.17 5.30002C18.26 5.42002 18.34 5.53002 18.42 5.66002C18.51 5.80002 18.58 5.94002 18.62 6.09002C18.66 6.18002 18.69 6.26002 18.71 6.35002C18.86 6.86002 18.87 7.44002 18.73 8.09002Z" fill="#A020F0"/>
                <path d="M12.52 17.66H12.77C13.07 17.66 13.32 17.39 13.32 17.06C13.32 16.64 13.2 16.58 12.94 16.48L12.52 16.33V17.66Z" fill="#A020F0"/>
                <path d="M18.29 9.52001C17.84 9.39001 17.37 9.32001 16.88 9.32001H7.12C6.44 9.32001 5.8 9.45001 5.2 9.71001C3.46 10.46 2.24 12.19 2.24 14.2V16.15C2.24 16.39 2.26 16.62 2.29 16.86C2.51 20.04 4.21 21.74 7.39 21.95C7.62 21.98 7.85 22 8.1 22H15.9C19.6 22 21.55 20.24 21.74 16.74C21.75 16.55 21.76 16.35 21.76 16.15V14.2C21.76 11.99 20.29 10.13 18.29 9.52001ZM13.28 15.5C13.74 15.66 14.36 16 14.36 17.06C14.36 17.97 13.65 18.7 12.77 18.7H12.52V18.92C12.52 19.21 12.29 19.44 12 19.44C11.71 19.44 11.48 19.21 11.48 18.92V18.7H11.39C10.43 18.7 9.64 17.89 9.64 16.89C9.64 16.6 9.87 16.37 10.16 16.37C10.45 16.37 10.68 16.6 10.68 16.89C10.68 17.31 11 17.66 11.39 17.66H11.48V15.97L10.72 15.7C10.26 15.54 9.64 15.2 9.64 14.14C9.64 13.23 10.35 12.5 11.23 12.5H11.48V12.28C11.48 11.99 11.71 11.76 12 11.76C12.29 11.76 12.52 11.99 12.52 12.28V12.5H12.61C13.57 12.5 14.36 13.31 14.36 14.31C14.36 14.6 14.13 14.83 13.84 14.83C13.55 14.83 13.32 14.6 13.32 14.31C13.32 13.89 13 13.54 12.61 13.54H12.52V15.23L13.28 15.5Z" fill="#A020F0"/>
                <path d="M10.68 14.14C10.68 14.56 10.8 14.62 11.06 14.72L11.48 14.87V13.54H11.23C10.92 13.54 10.68 13.81 10.68 14.14Z" fill="#A020F0"/>
              </svg>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='title'>Easy cancellation</h1>
              <p className='descrip text-left w-[75%]'>Flexible plans that allow you to cancel anytime</p>
            </div>
          </motion.div>
          
          {/* Feature 3 */}
          <motion.div 
            className='flex gap-5 items-center'
            variants={item}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className='rounded-[8px] bg-[rgba(21,114,211,0.1)] w-fit p-3 items-center flex'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.94 2.21001L9.53 7.82001H7.12C6.72 7.82001 6.33 7.85001 5.95 7.93001L6.95 5.53001L6.99 5.44001L7.05 5.28001C7.08 5.21001 7.1 5.15001 7.13 5.10001C8.29 2.41001 9.59 1.57001 11.94 2.21001Z" fill="#A020F0"/>
                <path d="M18.73 8.09002L18.71 8.08002C18.11 7.91002 17.5 7.82002 16.88 7.82002H10.62L12.87 2.59002L12.9 2.52002C13.04 2.57002 13.19 2.64002 13.34 2.69002L15.55 3.62002C16.78 4.13002 17.64 4.66002 18.17 5.30002C18.26 5.42002 18.34 5.53002 18.42 5.66002C18.51 5.80002 18.58 5.94002 18.62 6.09002C18.66 6.18002 18.69 6.26002 18.71 6.35002C18.86 6.86002 18.87 7.44002 18.73 8.09002Z" fill="#A020F0"/>
                <path d="M12.52 17.66H12.77C13.07 17.66 13.32 17.39 13.32 17.06C13.32 16.64 13.2 16.58 12.94 16.48L12.52 16.33V17.66Z" fill="#A020F0"/>
                <path d="M18.29 9.52001C17.84 9.39001 17.37 9.32001 16.88 9.32001H7.12C6.44 9.32001 5.8 9.45001 5.2 9.71001C3.46 10.46 2.24 12.19 2.24 14.2V16.15C2.24 16.39 2.26 16.62 2.29 16.86C2.51 20.04 4.21 21.74 7.39 21.95C7.62 21.98 7.85 22 8.1 22H15.9C19.6 22 21.55 20.24 21.74 16.74C21.75 16.55 21.76 16.35 21.76 16.15V14.2C21.76 11.99 20.29 10.13 18.29 9.52001ZM13.28 15.5C13.74 15.66 14.36 16 14.36 17.06C14.36 17.97 13.65 18.7 12.77 18.7H12.52V18.92C12.52 19.21 12.29 19.44 12 19.44C11.71 19.44 11.48 19.21 11.48 18.92V18.7H11.39C10.43 18.7 9.64 17.89 9.64 16.89C9.64 16.6 9.87 16.37 10.16 16.37C10.45 16.37 10.68 16.6 10.68 16.89C10.68 17.31 11 17.66 11.39 17.66H11.48V15.97L10.72 15.7C10.26 15.54 9.64 15.2 9.64 14.14C9.64 13.23 10.35 12.5 11.23 12.5H11.48V12.28C11.48 11.99 11.71 11.76 12 11.76C12.29 11.76 12.52 11.99 12.52 12.28V12.5H12.61C13.57 12.5 14.36 13.31 14.36 14.31C14.36 14.6 14.13 14.83 13.84 14.83C13.55 14.83 13.32 14.6 13.32 14.31C13.32 13.89 13 13.54 12.61 13.54H12.52V15.23L13.28 15.5Z" fill="#A020F0"/>
                <path d="M10.68 14.14C10.68 14.56 10.8 14.62 11.06 14.72L11.48 14.87V13.54H11.23C10.92 13.54 10.68 13.81 10.68 14.14Z" fill="#A020F0"/>
              </svg>
            </div>
            <div className='flex flex-col gap-2'>
              <h1 className='title'>Premium vehicles</h1>
              <p className='descrip text-left w-[75%]'>Top-quality cars maintained to the highest standards</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Choose;