import { motion } from 'framer-motion';
import locator from "../assets/location.svg";
import calendar from "../assets/calendar.svg";

const Locator = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hover: { 
            scale: 1.05, 
            boxShadow: "0px 5px 15px rgba(160, 32, 240, 0.4)" 
        },
        tap: { 
            scale: 0.98 
        }
    };

    return ( 
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className='text-black flex flex-col md:flex-row gap-5 md:gap-10 w-[95%] md:w-[85%] lg:w-[75%] mx-auto p-4 shadow-[0px_6px_12px_0px_rgba(19,94,172,0.12)] rounded-xl bg-white justify-between'
        >
            {/* Location selector */}
            <motion.div 
                variants={itemVariants}
                className='flex items-center gap-3 w-full md:w-[20%]'
            >
                <motion.img 
                    src={locator} 
                    alt="Location icon" 
                    className='w-10'
                    whileHover={{ scale: 1.1 }}
                />
                <div className='flex flex-col'>
                    <h3 className='text-[#3E3E3E] font-poppins text-base md:text-lg font-medium'>Location</h3>
                    <p className='text-sm font-medium text-[#B6B6B6] font-poppins'>Search your Location</p>
                </div>
            </motion.div>
            
            {/* Pickup date */}
            <motion.div 
                variants={itemVariants}
                className='flex items-center gap-3 w-full md:w-[20%] border-t-2 md:border-t-0 md:border-l-2 border-[#ACACAC] pt-3 md:pt-0 md:pl-3'
            >
                <motion.img 
                    src={calendar} 
                    alt="Calendar icon" 
                    className='w-10'
                    whileHover={{ scale: 1.1 }}
                />
                <div className='flex flex-col'>
                    <h3 className='text-[#3E3E3E] font-poppins text-base md:text-lg font-medium'>Pickup date</h3>
                    <p className='text-sm font-medium text-[#B6B6B6] font-poppins'>Tue 15 Feb, 09:00</p>
                </div>
            </motion.div>
            
            {/* Return date */}
            <motion.div 
                variants={itemVariants}
                className='flex items-center gap-3 w-full md:w-[20%] border-t-2 md:border-t-0 md:border-l-2 border-[#ACACAC] pt-3 md:pt-0 md:pl-3'
            >
                <motion.img 
                    src={calendar} 
                    alt="Calendar icon" 
                    className='w-10'
                    whileHover={{ scale: 1.1 }}
                />
                <div className='flex flex-col'>
                    <h3 className='text-[#3E3E3E] font-poppins text-base md:text-lg font-medium'>Return date</h3>
                    <p className='text-sm font-medium text-[#B6B6B6] font-poppins'>Thu 16 Feb, 11:00</p>
                </div>
            </motion.div>
            
            {/* Search button */}
            <motion.button 
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                type="button"
                className='shadow-md bg-[#A020F0] text-white px-6 py-2 rounded-lg cursor-pointer self-start md:self-center w-full md:w-auto text-center'
                variants={buttonVariants}
            >
                Search
            </motion.button>
        </motion.div>
    );
};

export default Locator;
