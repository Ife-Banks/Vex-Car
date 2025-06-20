import { motion } from "framer-motion";
import man from "../assets/man.jpg";
import woman from "../assets/woman.jpg";

const Testimony = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                when: "beforeChildren"
            }
        }
    };

    const item = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const header = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const quoteMark = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 0.1,
            transition: {
                duration: 1,
                ease: "backOut"
            }
        }
    };

    return (  
        <motion.div 
            className="bg-[#F9F0FF] pt-16 pb-20 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
        >
            {/* Decorative SVG elements */}
            <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="279" 
                height="227" 
                viewBox="0 0 279 227" 
                fill="none" 
                className='absolute right-0 md:right-40 -top-5 w-[150px] md:w-auto'
                variants={quoteMark}
            >
                <path opacity="0.1" d="M128.68 227V118.53C128.68 68.6 117.956 27.2783 96.5098 -5.43476C74.2053 -38.1478 42.0354 -59.6696 0 -70V-24.8044C25.736 -17.9174 44.1801 -5.00436 55.3323 13.9348C66.4845 32.0131 72.9185 55.687 74.6342 84.9565H25.736V227H128.68ZM279 227V118.53C279 68.6 268.277 27.2783 246.83 -5.43476C224.526 -38.1478 192.356 -59.6696 150.32 -70V-24.8044C176.056 -17.9174 194.5 -5.00436 205.653 13.9348C216.805 32.0131 223.239 55.687 224.954 84.9565H176.056V227H279Z" fill="#A020F0"/>
            </motion.svg>
            
            <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="292" 
                height="310" 
                viewBox="0 0 292 310" 
                fill="none" 
                className='absolute left-0 -z-0 w-[150px] md:w-auto'
                variants={quoteMark}
            >
                <path opacity="0.1" d="M157.324 310V196.783C157.324 144.667 168.547 101.536 190.993 67.3913C214.337 33.2463 248.006 10.7826 292 0V47.1739C265.065 54.3623 245.761 67.8406 234.089 87.6087C222.418 106.478 215.684 131.188 213.888 161.739H265.065V310H157.324ZM0 310V196.783C0 144.667 11.223 101.536 33.6689 67.3913C57.0127 33.2463 90.6816 10.7826 134.676 0V47.1739C107.74 54.3623 88.437 67.8406 76.7651 87.6087C65.0932 106.478 58.3594 131.188 56.5638 161.739H107.74V310H0Z" fill="#A020F0"/>
            </motion.svg>

            {/* Header section */}
            <motion.div 
                className='flex flex-col gap-5 items-center px-4 sm:px-6 lg:px-8'
                variants={header}
            >
                <motion.span 
                    className='bg-[rgba(160,32,240,0.1)] text-[#A020F0] uppercase px-5 py-2 rounded-lg text-sm font-medium'
                    whileHover={{ scale: 1.05 }}
                >
                    Testimonials
                </motion.span>
                <motion.h1 
                    className='text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#292929] max-w-2xl'
                >
                    What people say about us?
                </motion.h1>
            </motion.div>

            {/* Testimonial cards */}
            <div className='mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto'>
                {/* First testimonial */}
                <motion.div 
                    className="flex flex-col md:flex-row shadow-lg rounded-r-xl overflow-hidden h-full"
                    variants={item}
                    whileHover={{ y: -5 }}
                >
                    <motion.div 
                        className="w-full md:w-[50%] h-64 md:h-auto"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img 
                            src={man} 
                            alt="Jenny Wilson" 
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    
                    <div className="w-full md:w-[60%] p-6 md:p-8 flex flex-col justify-between gap-4 bg-white">
                        <div className="flex flex-col gap-2 text-[#383838]">
                            <motion.h1 
                                className="font-poppins text-4xl md:text-5xl font-medium"
                                whileHover={{ scale: 1.05 }}
                            >
                                5.0<span className="text-lg md:text-xl font-medium ml-1">stars</span>
                            </motion.h1>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.2, y: -3 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <StarIcon />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        
                        <motion.p 
                            className="text-[#282828] font-poppins text-base md:text-lg"
                            whileHover={{ x: 5 }}
                        >
                            "I have been using your services for 3 years. Your service is great, I will continue to use your service."
                        </motion.p>
                        
                        <motion.div
                            whileHover={{ x: 3 }}
                        >
                            <h2 className="text-[#252525] font-poppins text-base md:text-lg font-semibold">Jenny Wilson</h2>
                            <p className="text-[#838383] font-poppins text-sm">From New York, US</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Second testimonial */}
                <motion.div 
                    className="flex flex-col md:flex-row shadow-lg rounded-l-xl overflow-hidden h-full"
                    variants={item}
                    whileHover={{ y: -5 }}
                >
                    <motion.div 
                        className="w-full md:w-[50%] h-64 md:h-auto order-last md:order-first"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img 
                            src={woman} 
                            alt="Charlie Johnson" 
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    
                    <div className="w-full md:w-[60%] p-6 md:p-8 flex flex-col justify-between gap-4 bg-white">
                        <div className="flex flex-col gap-2 text-[#383838]">
                            <motion.h1 
                                className="font-poppins text-4xl md:text-5xl font-medium"
                                whileHover={{ scale: 1.05 }}
                            >
                                5.0<span className="text-lg md:text-xl font-medium ml-1">stars</span>
                            </motion.h1>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.2, y: -3 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <StarIcon />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        
                        <motion.p 
                            className="text-[#282828] font-poppins text-base md:text-lg"
                            whileHover={{ x: 5 }}
                        >
                            "Vxcar app is incredibly convenient, offering a seamless booking experience, a great selection of vehicles, and reliable service every time."
                        </motion.p>
                        
                        <motion.div
                            whileHover={{ x: 3 }}
                        >
                            <h2 className="text-[#252525] font-poppins text-base md:text-lg font-semibold">Charlie Johnson</h2>
                            <p className="text-[#838383] font-poppins text-sm">From New York, US</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

// Star icon component with animation
const StarIcon = () => (
    <motion.svg 
        className="w-4 h-4 md:w-5 md:h-5" 
        fill="#EFBF14" 
        viewBox="0 0 22 21"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.3, rotate: 15 }}
        transition={{ type: "spring", stiffness: 500 }}
    >
        <path d="M10.3274 0.862741C10.6026 0.305306 11.3974 0.305305 11.6726 0.862739L14.3522 6.29232C14.4615 6.51367 14.6726 6.6671 14.9169 6.7026L20.9088 7.57327C21.524 7.66266 21.7696 8.41864 21.3245 8.85254L16.9887 13.0789C16.8119 13.2512 16.7313 13.4994 16.773 13.7427L17.7965 19.7104C17.9016 20.3231 17.2585 20.7903 16.7083 20.501L11.349 17.6835C11.1305 17.5686 10.8695 17.5686 10.651 17.6835L5.29168 20.501C4.74146 20.7903 4.09839 20.3231 4.20347 19.7104L5.22701 13.7427C5.26874 13.4994 5.18807 13.2512 5.01131 13.0789L0.675535 8.85254C0.230397 8.41864 0.476029 7.66266 1.09119 7.57327L7.08309 6.7026C7.32737 6.6671 7.53854 6.51367 7.64779 6.29232L10.3274 0.862741Z"/>
    </motion.svg>
);

export default Testimony;