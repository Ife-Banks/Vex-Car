import { motion } from 'framer-motion';
import z from '../assets/z.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Nav = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
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
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hover: { scale: 1.05, boxShadow: "0px 5px 15px rgba(160, 32, 240, 0.3)" },
        tap: { scale: 0.98 }
    };

    const navLinks = [
        { text: "Become a renter", href: "#" },
        { text: "Rental deals", href: "#" },
        { text: "How it works", href: "#" },
        { text: "Why choose us", href: "#" }
    ];

    return (
        <motion.nav 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className='flex items-center w-[75%] mx-auto justify-between font-poppins py-4'
        >
            {/* Logo Section */}
            <motion.div 
                variants={itemVariants}
                className='flex gap-1 justify-between p-0 m-0 items-start'
            >
                <LazyLoadImage 
                    src={z} 
                    alt="Decoration" 
                    className='h-4 mt-1'
                    effect="opacity"
                />
                <p className='text-[#A020F0] font-medium text-3xl'>VexCar</p>
                <LazyLoadImage 
                    src={z} 
                    alt="Decoration" 
                    className='h-4 mt-1'
                    effect="opacity"
                />
            </motion.div>

            {/* Navigation Links */}
            <motion.ul 
                variants={containerVariants}
                className='text-black flex gap-10'
            >
                {navLinks.map((link, index) => (
                    <motion.li 
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, color: "#A020F0" }}
                        transition={{ duration: 0.2 }}
                    >
                        <a href={link.href} className="transition-colors duration-200">
                            {link.text}
                        </a>
                    </motion.li>
                ))}
            </motion.ul>

            {/* Auth Buttons */}
            <motion.div 
                variants={containerVariants}
                className='flex items-center gap-4'
            >
                <motion.a 
                    variants={itemVariants}
                    href="#" 
                    className='text-black hover:text-[#A020F0] transition-colors duration-200'
                    whileHover={{ scale: 1.05 }}
                >
                    Sign in
                </motion.a>
                <motion.button 
                    variants={itemVariants}
                    type="button" 
                    className='shadow-md bg-[#A020F0] text-white px-6 h-10 items-center rounded-lg cursor-pointer'
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                >
                    Sign up
                </motion.button>
            </motion.div>
        </motion.nav>
    );
};
 
export default Nav;