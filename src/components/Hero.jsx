import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Nav from './Nav';
import VioletCar from '../assets/4c17c6172d647b877fa43f78c5952bef7b21de99 (1).png';
import google from "../assets/image 2.png";
import ios from "../assets/image 3.png";
import z from '../assets/z.png';
import Locator from './locator';
import zbg from '../assets/bakcgroundLayer.png'
import zbg2 from "../assets/Untitled-1 4.png"

const Hero = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const underlineVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const leftImageVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const rightImageVariants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 0.3,
                ease: "easeOut"
            }
        }
    };


    return ( 
        <div className='overflow-hidden py-5 flex flex-col gap-2 relative'>
            <Nav/>
            
            {/* Main hero part */}
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className='flex items-center gap-15 justify-end m-0 p-0'
            >
                {/* Text area */}
                <motion.div 
                    variants={containerVariants}
                    className='w-[35%] flex p-1 -mt-5'
                >
                    <motion.div variants={itemVariants} className='w-10'>
                        <LazyLoadImage 
                            src={z} 
                            alt="Decoration" 
                            className='h-6  mt-3 '
                            effect="opacity"
                        />
                    </motion.div>
                    
                    <div className='flex flex-col '>
                        <motion.div 
                            variants={itemVariants}
                            className='flex '
                        > 
                            <h1 className='text-[#242424] font-semibold text-5xl font-space'>
                                Find, book and 
                            </h1>
                            <LazyLoadImage 
                                src={z} 
                                alt="Decoration" 
                                className='h-6 mt-4'
                                effect="opacity"
                            />
                        </motion.div>
                        
                        <motion.div 
                            variants={itemVariants}
                            className='flex gap-2'
                        >
                            <p className='text-[#242424] font-semibold text-5xl font-space'>
                                rent a car
                            </p> 
                            <span className='flex flex-col font-semibold text-5xl'>
                                <motion.p 
                                    variants={itemVariants}
                                    className='text-[#A020F0]'
                                >
                                    Easily
                                </motion.p>
                                
                                <motion.div
                                    variants={underlineVariants}
                                    initial="hidden"
                                    animate="visible"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="130" height="20" viewBox="0 0 135 20" fill="none">
                                        <path d="M134.398 2.4454C57.1256 -2.591 23.8505 5.91265 1.51269 9.43271C1.16554 12.3701 1.29738 14.786 0.927661 19.4527C60.8229 -0.00292444 100.753 3.19434 134.353 4.43374C134.367 4.06427 134.357 3.55381 134.398 2.4454Z" fill="#A020F0"/>
                                    </svg>
                                </motion.div>
                            </span>
                        </motion.div>
                        
                        <motion.p 
                            variants={itemVariants}
                            className='text-[#272727] text-lg w-full font-medium mt-3 font-poppins'
                        >
                            Get a car where and whenever you need it with your iOS and Android device
                        </motion.p>
                        
                        {/* Buttons wrapper */}
                        <motion.div 
                            variants={containerVariants}
                            className='flex gap-3 mt-5'
                        >
                            {/* Google Play button */}
                            <motion.a 
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <LazyLoadImage 
                                    src={google} 
                                    alt="Get on Google Play" 
                                    className='w-40'
                                    effect="opacity"
                                />
                            </motion.a>
                            
                            {/* App Store button */}
                            <motion.a 
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <LazyLoadImage 
                                    src={ios} 
                                    alt="Download on the App Store" 
                                    className='w-40'
                                    effect="opacity"
                                />
                            </motion.a>
                        </motion.div>
                    </div>
                </motion.div>
                
                {/* Car image */}
                <motion.div 
                    variants={imageVariants}
                    className='p-0 m-0 -mr-33 pl-20'
                >
                    <img 
                        src={VioletCar} 
                        alt="Luxury car for rent" 
                        className='object-cover w-full max-w-[800px] h-auto'
                        effect="opacity"
                    />
                </motion.div>
            </motion.div>
            
            {/* Locator */}
            <Locator/>
            <motion.img 
                src={zbg} 
                alt="Decorative background element"
                className="absolute -left-28 -bottom-15 w-70 h-70 object-cover filter blur-sm"
                initial="hidden"
                animate="visible"
                variants={leftImageVariants}
                whileHover={{ opacity: 0.9 }}
            />
            <motion.img 
                src={zbg2} 
                alt="Decorative background element"
                className="absolute -right-0 -bottom-0 w-50 h-50 object-cover filter blur-xs"
                initial="hidden"
                animate="visible"
                variants={rightImageVariants}
                whileHover={{ opacity: 0.9 }}
            />
        </div>
    );
}

export default Hero;