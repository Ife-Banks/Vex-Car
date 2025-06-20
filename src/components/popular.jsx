import { motion } from "framer-motion";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.png";
import car4 from "../assets/car4.png";

const Popular = () => {
  const cars = [
    { id: 1, image: car1, name: "Jaguar XE L'P250", price: 1800, flipped: false },
    { id: 2, image: car2, name: "Audi R8", price: 2100, flipped: false },
    { id: 3, image: car3, name: "BMW M3", price: 1600, flipped: false },
    { id: 4, image: car4, name: "Lamborghini Huracan", price: 2300, flipped: true },
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (  
    <motion.div 
      className='mt-10 flex flex-col gap-10 items-center justify-center px-4 sm:px-6 lg:px-8'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      {/* Header section */}
      <motion.div 
        className='flex flex-col gap-5 items-center text-center'
        variants={header}
      >
        <motion.span 
          className='text-[#A020F0] font-medium text-sm uppercase tracking-wider'
        >
          Popular Rental Deals
        </motion.span>
        <motion.h2 
          className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#292929]'
        >
          Most popular cars rental deals
        </motion.h2>
      </motion.div>
      
      {/* Cards container */}
      <motion.div 
        className='flex flex-wrap justify-center gap-4 w-[70%] max-w-7xl mx-auto'
        variants={container}
      >
        {cars.map((car) => (
          <motion.div 
            key={car.id}
            className='flex flex-col gap-3 justify-between rounded-xl p-4 shadow-lg border border-gray-200 
                       w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(25%-1rem)] 
                       hover:shadow-xl transition-all duration-300 hover:border-[#A020F0]/30'
            variants={item}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className='flex items-center justify-center p-2'>
              <motion.img 
                src={car.image} 
                alt={car.name} 
                className={`w-full max-w-[200px] h-auto ${car.flipped ? 'scale-x-[-1]' : ''}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              <p className='text-[#262626] font-poppins text-md font-medium text-center'>{car.name}</p>
            </div>
            
            <div className='flex flex-col gap-3 border-t-2 pt-3 border-[#E0E0E0]'>
              <div className='flex justify-between'>
                <p className='font-medium text-sm text-[#595959]'>Price</p>
                <p>
                  <span className='font-semibold text-[#292929]'>${car.price.toLocaleString()}</span>
                  <span className='text-sm text-[#9c9c9c] font-medium'> /day</span>
                </p>
              </div>
              
              <motion.button 
                className='p-2 bg-[#A020F0] w-full rounded-lg flex items-center justify-center gap-2 text-white 
                          hover:bg-[#8a1ad1] transition-colors duration-300'
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0px 5px 15px rgba(160, 32, 240, 0.3)"
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span>Rent Now</span>
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 20 20" 
                  fill="none"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <path d="M12.025 4.94168L17.0833 10L12.025 15.0583" stroke="white" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.91666 10H16.9417" stroke="white" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </motion.svg>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Popular;

