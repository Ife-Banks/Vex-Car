import { motion, AnimatePresence } from 'framer-motion';
import z from '../assets/z.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Nav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
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

    const mobileMenuVariants = {
        hidden: { opacity: 0, x: '100%' },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '100%' }
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
            className="flex items-center w-full px-4 sm:px-6 lg:px-8 xl:w-[75%] mx-auto justify-between font-poppins py-4"
        >
            {/* Logo Section */}
            <motion.div 
                variants={itemVariants}
                className="flex gap-1 items-center"
            >
                <LazyLoadImage 
                    src={z} 
                    alt="Decoration" 
                    className="h-4"
                    effect="opacity"
                />
                <p className="text-[#A020F0] font-medium text-2xl sm:text-3xl">VexCar</p>
                <LazyLoadImage 
                    src={z} 
                    alt="Decoration" 
                    className="h-4"
                    effect="opacity"
                />
            </motion.div>

            {/* Desktop Navigation Links */}
            <motion.ul 
                variants={containerVariants}
                className="hidden md:flex text-black gap-6 lg:gap-10"
            >
                {navLinks.map((link, index) => (
                    <motion.li 
                        key={index}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, color: "#A020F0" }}
                        transition={{ duration: 0.2 }}
                    >
                        <a href={link.href} className="transition-colors duration-200 text-sm lg:text-base">
                            {link.text}
                        </a>
                    </motion.li>
                ))}
            </motion.ul>

            {/* Desktop Auth Buttons */}
            <motion.div 
                variants={containerVariants}
                className="hidden md:flex items-center gap-4"
            >
                <motion.a 
                    variants={itemVariants}
                    href="#" 
                    className="text-black hover:text-[#A020F0] transition-colors duration-200 text-sm lg:text-base"
                    whileHover={{ scale: 1.05 }}
                >
                    Sign in
                </motion.a>
                <motion.button 
                    variants={itemVariants}
                    type="button" 
                    className="shadow-md bg-[#A020F0] text-white px-4 h-10 items-center rounded-lg cursor-pointer text-sm lg:text-base lg:px-6"
                    whileHover="hover"
                    whileTap="tap"
                    variants={buttonVariants}
                >
                    Sign up
                </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
                variants={itemVariants}
                className="md:hidden text-2xl text-[#A020F0] focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </motion.button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                        transition={{ type: 'tween', ease: 'easeInOut' }}
                        className="fixed inset-0 bg-white z-50 md:hidden pt-20 px-6"
                    >
                        {/* Close Button - Top Right */}
                        <button
                            className="absolute top-6 right-6 text-2xl text-[#A020F0] focus:outline-none"
                            onClick={() => setMobileMenuOpen(false)}
                            aria-label="Close menu"
                        >
                            <FiX />
                        </button>

                        <motion.ul className="flex flex-col gap-8 text-xl mb-10">
                            {navLinks.map((link, index) => (
                                <motion.li 
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <a 
                                        href={link.href} 
                                        className="text-black hover:text-[#A020F0] transition-colors duration-200"
                                    >
                                        {link.text}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>

                        <div className="flex flex-col gap-4">
                            <motion.a 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                                href="#" 
                                className="text-black hover:text-[#A020F0] transition-colors duration-200 text-center py-3 border border-[#A020F0] rounded-lg"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Sign in
                            </motion.a>
                            <motion.button 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.1 + 0.1 }}
                                type="button" 
                                className="shadow-md bg-[#A020F0] text-white py-3 rounded-lg"
                                whileHover="hover"
                                whileTap="tap"
                                variants={buttonVariants}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Sign up
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};
 
export default Nav;