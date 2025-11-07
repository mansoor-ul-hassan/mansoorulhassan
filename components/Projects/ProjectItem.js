import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const ProjectItem = ({ title, backgroundImg, tech, desc, sourceLink, demoLink }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ y: [-50, 0], opacity: 1, scale: 1 }}
            whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 50px rgba(30, 64, 175, 0.3)",
                transition: { duration: 0.3 }
            }}
            transition={{ duration: 0.7 }} 
            className='flex justify-center h-[540px] max-w-[530px] min-w-full my-1 shadow-xl shadow-gray-400 rounded-xl group overflow-hidden bg-gradient-to-br from-white to-gray-50'
        >
            <div className='my-0 py-0 min-w-full'>
                <motion.div 
                    className='my-3 overflow-hidden rounded-t-xl'
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image src={backgroundImg} alt={title} height={350} />
                </motion.div>
                <div className='px-8 text-center'>
                    <h6 className='text-1xl text-black tracking-wider text-center font-bold bg-gradient-to-r from-[#1e40af] to-[#0ea5e9] bg-clip-text text-transparent'>{title}</h6>
                    <p className='text-[14px] text-center text-gray-600 mb-2 max-w-[485px] ml-6'>{desc}</p>
                    <p className='pb-2 pt-2 text-black text-center text-[14px] font-semibold max-w-[485px] ml-6'>
                        Tech Stack: {tech}
                    </p>
                </div>

                <div className='flex justify-center items-center min-w-full'>
                    <Link href={demoLink} target='_blank' rel='noreferrer'>
                        <motion.button 
                            whileHover={{ scale: 1.1, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                            className='text-sm p-3 my-6 mx-5 w-[170px] min-[320px]:w-[100px] bg-gradient-to-r from-[#10b981] to-[#059669] hover:from-[#059669] hover:to-[#047857] transition-all duration-300'
                        >
                            View Live
                        </motion.button>
                    </Link>

                    <Link href={sourceLink} target='_blank' rel='noreferrer'>
                        <motion.button 
                            whileHover={{ scale: 1.1, rotate: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className='text-sm p-3 my-6 mx-5 max-[500px]:w-[120px] min-[320px]:text-sm'
                        >
                            Source Code
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectItem