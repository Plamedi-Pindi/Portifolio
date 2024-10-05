import {motion} from 'framer-motion';

export default function MotionTest(){
    return (
        <div className='w-container h-96 bg-yellow-200 mx-auto relative'>
            <motion.div 
                className='w-20 h-20 bg-blue-300'
                whileHover={{ scale: 1.2 }}
                // whileTap={{ scale: 1.1, background: "red", transition: ".5s" }}
                // drag="x"
                // dragConstraints={{ left: -100, right: 100 }}
                animate={{ 
                    scale: [1, 2, 2, 1, 1],
                    rotate: [0, 0, 180, 180, 0],
                    borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                 }}
                 transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
            />
        </div>
    );
} 
    