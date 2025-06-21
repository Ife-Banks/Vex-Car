import { motion } from "framer-motion";
import phoneImage from "../assets/d67bebad63f555a22306293c60170338bd2a33ae.png";
import play from "../assets/image 2.png";
import apple from "../assets/image 3.png";

const Download = () => {
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

    const phoneAnimation = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "backOut"
            }
        }
    };

    const pulseAnimation = {
        initial: { scale: 1 },
        animate: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (  
        <motion.div 
            className='flex flex-col md:flex-row items-center justify-around py-10 md:py-0 md:h-100 px-4 md:px-20 overflow-hidden'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={container}
        >
            {/* Left Content */}
            <div className='w-full md:w-[30%] flex flex-col gap-6 md:gap-10 mb-8 md:mb-0'>
                <motion.div 
                    className='flex flex-col gap-3'
                    variants={container}
                >
                    <motion.button 
                        className='flex items-center px-5 py-2 bg-[rgba(160,32,240,0.5)] rounded-xl w-fit hover:bg-[rgba(160,32,240,0.7)] transition-colors'
                        variants={item}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0px 5px 15px rgba(160, 32, 240, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Download
                    </motion.button>
                    
                    <motion.h1 
                        className='text-[#282828] text-3xl md:text-4xl font-space font-semibold'
                        variants={item}
                    >
                        Download Vxcar App for <motion.span 
                            className='text-[#A020F0]'
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            FREE
                        </motion.span>
                    </motion.h1>
                </motion.div>
                
                <motion.p 
                    className='text-[#3e3e3e] font-poppins text-sm md:text-base font-normal'
                    variants={item}
                >
                    For faster, easier booking and exclusive deals.
                </motion.p>
                
                <motion.div 
                    className='flex gap-3'
                    variants={container}
                >
                    <motion.img 
                        src={play} 
                        alt="Download on Google Play" 
                        className='w-32 md:w-40 cursor-pointer hover:opacity-90 transition-opacity'
                        variants={item}
                        whileHover={{ 
                            y: -5,
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    />
                    <motion.img 
                        src={apple} 
                        alt="Download on App Store" 
                        className='w-32 md:w-40 cursor-pointer hover:opacity-90 transition-opacity'
                        variants={item}
                        whileHover={{ 
                            y: -5,
                            scale: 1.05,
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    />
                </motion.div>
            </div>

            {/* Right Image */}
            <motion.div 
                className=' md:block md:w-[50%]'
                variants={phoneAnimation}
            >
                <motion.img 
                    src={phoneImage} 
                    alt="Vxcar App Preview" 
                    className='w-full h-180 object-cover'
                    variants={pulseAnimation}
                    initial="initial"
                    animate="animate"
                />
            </motion.div>
        </motion.div>
    );
}

export default Download;