import { motion } from "framer-motion";
import vexLogo from "../assets/VexLogo.png";

const Footer = () => {
    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
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
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const logoAnimation = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 100
            }
        }
    };

    const socialIcon = {
        hover: {
            y: -5,
            scale: 1.1,
            transition: { duration: 0.2 }
        },
        tap: {
            scale: 0.9
        }
    };

    return (  
        <motion.div 
            className='bg-[#420369] pt-10 md:pt-15 pb-5 px-5 md:px-30 flex flex-col justify-between h-auto md:h-80'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={container}
        >
            <div className='flex flex-col md:flex-row gap-8 md:gap-0 justify-between'>
                {/* vexCar */}
                <motion.div 
                    className='flex flex-col gap-5'
                    variants={container}
                >
                    <motion.img 
                        src={vexLogo} 
                        alt="VexCar Logo" 
                        className='w-32 md:w-40'
                        variants={logoAnimation}
                    />
                    <motion.div 
                        className='flex flex-col gap-3 md:gap-5 text-[#d6d6d6] font-poppins text-xs md:text-sm font-normal'
                        variants={container}
                    >
                        <motion.div 
                            className='flex items-center gap-1'
                            variants={item}
                            whileHover={{ x: 5 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 25" fill="none" className="w-4 h-4 md:w-6 md:h-6">
                                <path d="M12 14.1519C13.7231 14.1519 15.12 12.755 15.12 11.0319C15.12 9.30874 13.7231 7.91187 12 7.91187C10.2769 7.91187 8.88 9.30874 8.88 11.0319C8.88 12.755 10.2769 14.1519 12 14.1519Z" stroke="#D6D6D6" strokeWidth="1.5"/>
                                <path d="M3.62001 9.21193C5.59001 0.551926 18.42 0.561926 20.38 9.22193C21.53 14.3019 18.37 18.6019 15.6 21.2619C13.59 23.2019 10.41 23.2019 8.39001 21.2619C5.63001 18.6019 2.47001 14.2919 3.62001 9.21193Z" stroke="#D6D6D6" strokeWidth="1.5"/>
                            </svg>
                            <p>Lagos, Nigeria.</p>
                        </motion.div>
                        <motion.div 
                            className='flex items-center gap-1'
                            variants={item}
                            whileHover={{ x: 5 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 25" fill="none" className="w-4 h-4 md:w-6 md:h-6">
                                <path d="M21.97 19.0519C21.97 19.4119 21.89 19.7819 21.72 20.1419C21.55 20.5019 21.33 20.8419 21.04 21.1619C20.55 21.7019 20.01 22.0919 19.4 22.3419C18.8 22.5919 18.15 22.7219 17.45 22.7219C16.43 22.7219 15.34 22.4819 14.19 21.9919C13.04 21.5019 11.89 20.8419 10.75 20.0119C9.6 19.1719 8.51 18.2419 7.47 17.2119C6.44 16.1719 5.51 15.0819 4.68 13.9419C3.86 12.8019 3.2 11.6619 2.72 10.5319C2.24 9.39192 2 8.30192 2 7.26192C2 6.58192 2.12 5.93192 2.36 5.33192C2.6 4.72192 2.98 4.16192 3.51 3.66192C4.15 3.03192 4.85 2.72192 5.59 2.72192C5.87 2.72192 6.15 2.78192 6.4 2.90192C6.66 3.02192 6.89 3.20192 7.07 3.46192L9.39 6.73192C9.57 6.98192 9.7 7.21192 9.79 7.43192C9.88 7.64192 9.93 7.85192 9.93 8.04192C9.93 8.28192 9.86 8.52192 9.72 8.75192C9.59 8.98192 9.4 9.22192 9.16 9.46192L8.4 10.2519C8.29 10.3619 8.24 10.4919 8.24 10.6519C8.24 10.7319 8.25 10.8019 8.27 10.8819C8.3 10.9619 8.33 11.0219 8.35 11.0819C8.53 11.4119 8.84 11.8419 9.28 12.3619C9.73 12.8819 10.21 13.4119 10.73 13.9419C11.27 14.4719 11.79 14.9619 12.32 15.4119C12.84 15.8519 13.27 16.1519 13.61 16.3319C13.66 16.3519 13.72 16.3819 13.79 16.4119C13.87 16.4419 13.95 16.4519 14.04 16.4519C14.21 16.4519 14.34 16.3919 14.45 16.2819L15.21 15.5319C15.46 15.2819 15.7 15.0919 15.93 14.9719C16.16 14.8319 16.39 14.7619 16.64 14.7619C16.83 14.7619 17.03 14.8019 17.25 14.8919C17.47 14.9819 17.7 15.1119 17.95 15.2819L21.26 17.6319C21.52 17.8119 21.7 18.0219 21.81 18.2719C21.91 18.5219 21.97 18.7719 21.97 19.0519Z" stroke="#D6D6D6" strokeWidth="1.5" strokeMiterlimit="10"/>
                            </svg>
                            <p>+234 706 7770 855</p>
                        </motion.div>
                        <motion.div 
                            className='flex items-center gap-1'
                            variants={item}
                            whileHover={{ x: 5 }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 25" fill="none" className="w-4 h-4 md:w-6 md:h-6">
                                <path d="M17 21.2219H7C4 21.2219 2 19.7219 2 16.2219V9.22192C2 5.72192 4 4.22192 7 4.22192H17C20 4.22192 22 5.72192 22 9.22192V16.2219C22 19.7219 20 21.2219 17 21.2219Z" stroke="#D6D6D6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M17 9.72192L13.87 12.2219C12.84 13.0419 11.15 13.0419 10.12 12.2219L7 9.72192" stroke="#D6D6D6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <p>ifeoluwa.bankole05@gmail.com</p>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Mobile Accordion Layout */}
                <motion.div 
                    className='grid grid-cols-2 md:hidden gap-6'
                    variants={container}
                >
                    {/* product */}
                    <motion.div 
                        className='flex flex-col gap-2'
                        variants={item}
                    >
                        <h1 className='text-white font-poppins text-base font-medium'>Our Product</h1>
                        <ul className='flex flex-col gap-1 text-[#d6d6d6] font-poppins text-xs font-normal'>
                            {["Career", "Car", "Packages", "Features", "Priceline"].map((item, index) => (
                                <motion.li 
                                    key={index}
                                    whileHover={{ x: 3 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    
                    {/* Resources*/}
                    <motion.div 
                        className='flex flex-col gap-2'
                        variants={item}
                    >
                        <h1 className='text-white font-poppins text-base font-medium'>Resources</h1>
                        <ul className='flex flex-col gap-1 text-[#d6d6d6] font-poppins text-xs font-normal'>
                            {["Download", "Help Centre", "Guides", "Partner Network", "Cruises", "Developer"].map((item, index) => (
                                <motion.li 
                                    key={index}
                                    whileHover={{ x: 3 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    
                    {/* About */}
                    <motion.div 
                        className='flex flex-col gap-2'
                        variants={item}
                    >
                        <h1 className='text-white font-poppins text-base font-medium'>About Vxcars</h1>
                        <ul className='flex flex-col gap-1 text-[#d6d6d6] font-poppins text-xs font-normal'>
                            {["Why choose us", "Our Story", "Investor Relations", "Press Center", "Advertise"].map((item, index) => (
                                <motion.li 
                                    key={index}
                                    whileHover={{ x: 3 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    
                    {/* follow */}
                    <motion.div 
                        className='flex flex-col gap-2'
                        variants={item}
                    >
                        <h1 className='text-white font-poppins text-base font-medium'>Follow Us</h1>
                        <div className='flex gap-2'>
                            {[facebookIcon, instagramIcon, youtubeIcon].map((Icon, index) => (
                                <motion.div
                                    key={index}
                                    variants={socialIcon}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    <Icon />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Desktop Layout */}
                <motion.div 
                    className='hidden md:flex gap-8 justify-between w-[70%] px-5'
                    variants={container}
                >
                    {/* product */}
                    <motion.div 
                        className='flex flex-col gap-2'
                        variants={item}
                    >
                        <h1 className='text-white font-poppins text-xl font-medium'>Our Product</h1>
                        <ul className='flex flex-col gap-2 text-[#d6d6d6] font-poppins text-sm font-normal'>
                            {["Career", "Car", "Packages", "Features", "Priceline"].map((item, index) => (
                                <motion.li 
                                    key={index}
                                    whileHover={{ x: 5 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    
                    {/* Resources*/}
                    <motion.div 
                        className='flex flex-col gap-2'
                        variants={item}
                    >
                        <h1 className='text-white font-poppins text-xl font-medium'>Resources</h1>
                        <ul className='flex flex-col gap-2 text-[#d6d6d6] font-poppins text-sm font-normal'>
                            {["Download", "Help Centre", "Guides", "Partner Network", "Cruises", "Developer"].map((item, index) => (
                                <motion.li 
                                    key={index}
                                    whileHover={{ x: 5 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    
                    {/* About */}
                    <motion.div 
                        className='flex flex-col gap-2'
                        variants={item}
                    >
                        <h1 className='text-white font-poppins text-xl font-medium'>About Vxcars</h1>
                        <ul className='flex flex-col gap-2 text-[#d6d6d6] font-poppins text-sm font-normal'>
                            {["Why choose us", "Our Story", "Investor Relations", "Press Center", "Advertise"].map((item, index) => (
                                <motion.li 
                                    key={index}
                                    whileHover={{ x: 5 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                    
                    {/* follow */}
                    <motion.div 
                        className='flex flex-col gap-2'
                        variants={item}
                    >
                        <h1 className='text-white font-poppins text-xl font-medium'>Follow Us</h1>
                        <div className='flex gap-3'>
                            {[facebookIcon, instagramIcon, youtubeIcon].map((Icon, index) => (
                                <motion.div
                                    key={index}
                                    variants={socialIcon}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    <Icon size={40} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div 
                className='text-[#d6d6d6] font-poppins text-xs md:text-sm font-medium mt-8 md:mt-0 text-center md:text-left'
                variants={item}
            >
                <p>Copyright 2024 ・ Vxcars, All Rights Reserved</p>
            </motion.div>
        </motion.div>
    );
}

// Icon components for better reusability
const FacebookIcon = ({ size = 30 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M14 9.3V12.2H16.6C16.8 12.2 16.9 12.4 16.9 12.6L16.5 14.5C16.5 14.6 16.3 14.7 16.2 14.7H14V22H11V14.8H9.3C9.1 14.8 9 14.7 9 14.5V12.6C9 12.4 9.1 12.3 9.3 12.3H11V9C11 7.3 12.3 6 14 6H16.7C16.9 6 17 6.1 17 6.3V8.7C17 8.9 16.9 9 16.7 9H14.3C14.1 9 14 9.1 14 9.3Z" stroke="#D6D6D6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#D6D6D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const InstagramIcon = ({ size = 30 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#D6D6D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z" stroke="#D6D6D6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.6361 7H17.6477" stroke="#D6D6D6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const YoutubeIcon = ({ size = 30 }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M17 20H7C4 20 2 18 2 15V9C2 6 4 4 7 4H17C20 4 22 6 22 9V15C22 18 20 20 17 20Z" stroke="#D6D6D6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.4 9.50006L13.9 11.0001C14.8 11.6001 14.8 12.5001 13.9 13.1001L11.4 14.6001C10.4 15.2001 9.60001 14.7001 9.60001 13.6001V10.6001C9.60001 9.30006 10.4 8.90006 11.4 9.50006Z" stroke="#D6D6D6" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

// Icon components array
const facebookIcon = (props) => <FacebookIcon {...props} />;
const instagramIcon = (props) => <InstagramIcon {...props} />;
const youtubeIcon = (props) => <YoutubeIcon {...props} />;

export default Footer;