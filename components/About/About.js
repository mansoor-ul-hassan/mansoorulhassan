import React from 'react'
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center '>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileInView={{ x: [-250, 0], opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <p className='uppercase text-xl tracking-widest font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-[#1e40af] to-[#0ea5e9]'>
                            About
                        </p>
                        <h2 className='py-4'>Who I Am</h2>
                    </motion.div>
                    <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileInView={{ x: [-250, 0], opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <p className='py-2 text-gray-600'>
                            I&apos;m a Project Manager and Business Analyst with 17+ years of experience leading large-scale IT, security, and digital transformation projects. I specialize in process optimization, risk management, and data-driven decision-making to help organizations run smarter and more efficiently.
                        </p>
                        <p className='py-2 text-gray-600'>
                            I&apos;ve managed multimillion-dollar projects, led cross-functional teams, and worked with government, UN, and corporate clients. My expertise includes Agile project management, cybersecurity, business analysis, and enterprise IT solutions.
                        </p>
                        <p className='py-2 text-gray-600'>
                            If you&apos;re looking for someone who can turn complex challenges into clear, actionable results — I&apos;m here to help.
                        </p>
                        <p className='py-2 text-gray-600'>
                            I&apos;m a strategic and result-oriented Project Manager & Business Analyst with a passion for solving complex problems and optimizing systems. A quick learner with a continuous improvement mindset — I love leading tech-driven solutions and delivering real impact. 🚀
                        </p>
                        <a download href='/my_cv.pdf'
                            alt="alt text"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className='text-sm p-3 my-6 hover:scale-105 ease-in duration-300'>
                                Download Resume
                            </button>
                        </a>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='w-full h-auto m-auto flex items-center justify-center hover:scale-105 ease-in duration-300'>
                    <Avatar 
                        alt="Mansoor"
                        src="/assets/pic.png"
                        sx={{ width: 400, height: 600 }}
                    />
                </motion.div>
            </div >
        </div>
    )
}

export default About