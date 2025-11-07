import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div id='home' className='w-full h-screen text-center relative overflow-hidden'>
            {/* Animated Background */}
            <motion.div 
                className='absolute inset-0 opacity-10'
                animate={{
                    background: [
                        'radial-gradient(circle at 20% 50%, #1e40af 0%, transparent 50%)',
                        'radial-gradient(circle at 80% 50%, #0ea5e9 0%, transparent 50%)',
                        'radial-gradient(circle at 20% 50%, #1e40af 0%, transparent 50%)',
                    ]
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />
            
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center relative z-10'>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p 
                        className='uppercase text-sm tracking-widest text-gray-600'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        LET&apos;S BUILD SOMETHING TOGETHER
                    </motion.p>
                    <motion.h1 
                        className='py-4 text-gray-700 text-3xl md:text-5xl'
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Hi, I&apos;m <motion.span 
                            className='bg-gradient-to-r from-[#1e40af] via-[#7c3aed] to-[#0ea5e9] bg-clip-text text-transparent font-bold'
                            animate={{ 
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{ 
                                duration: 5,
                                repeat: Infinity,
                            }}
                            style={{ backgroundSize: '200% 200%' }}
                        >
                            Mansoor Ul Hassan
                        </motion.span>
                    </motion.h1>
                    <h1 className='py-2 text-gray-700 text-2xl md:text-5xl'>
                        <Typewriter
                            options={{
                                strings: [
                                    'Project Manager',
                                    'Business Analyst',
                                    'IT Consultant',
                                    'Digital Transformation Leader'
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <motion.p 
                        className='py-4 text-gray-600 sm:max-w-[70%] m-auto'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        I&apos;m focused on delivering strategic IT solutions and leading digital transformation projects.
                    </motion.p>
                    <motion.div 
                        className='flex items-center justify-between max-w-[330px] m-auto py-4'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <Link
                            href='https://www.linkedin.com/in/mansoor-ul-hassan/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <motion.div 
                                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-gradient-to-br from-blue-50 to-blue-100'
                                whileHover={{ 
                                    scale: 1.2, 
                                    rotate: 360,
                                    boxShadow: '0 10px 30px rgba(30, 64, 175, 0.4)'
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <FaLinkedinIn className='text-[#1e40af]' />
                            </motion.div>
                        </Link>
                        <Link
                            href='https://github.com/mansoor-ul-hassan'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <motion.div 
                                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-gradient-to-br from-gray-50 to-gray-100'
                                whileHover={{ 
                                    scale: 1.2, 
                                    rotate: -360,
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <FaGithub className='text-gray-800' />
                            </motion.div>
                        </Link>
                        <Link href='/#contact'>
                            <motion.div 
                                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-gradient-to-br from-green-50 to-green-100'
                                whileHover={{ 
                                    scale: 1.2, 
                                    rotate: 360,
                                    boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)'
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <AiOutlineMail className='text-green-600' />
                            </motion.div>
                        </Link>
                        <Link href='/my_cv.pdf' target='_blank' rel='noreferrer'>
                            <motion.div 
                                className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer bg-gradient-to-br from-purple-50 to-purple-100'
                                whileHover={{ 
                                    scale: 1.2, 
                                    rotate: -360,
                                    boxShadow: '0 10px 30px rgba(124, 58, 237, 0.4)'
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                <BsFillPersonLinesFill className='text-purple-600' />
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero