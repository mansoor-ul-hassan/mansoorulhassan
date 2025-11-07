import React from 'react'
import { motion } from 'framer-motion'
import ProjectItem from './ProjectItem'
import mingoImg from '../../public/assets/movie-recomendation-system.png'
import blinkImg from '../../public/assets/store.png'
import expensoImg from '../../public/assets/mcqs-generater.png'
import fraudImg from '../../public/assets/mcqs-generater (1).png'

const Projects = () => {
    return (
        <div id='projects' className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <motion.p 
                        className='text-xl tracking-widest uppercase font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-[#1e40af] via-[#7c3aed] to-[#0ea5e9]'
                        animate={{ 
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{ 
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{ backgroundSize: '200% 200%' }}
                    >
                        Projects
                    </motion.p>
                    <h2 className='py-4'>What I&apos;ve Built</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ y: [-50, 0], opacity: 1 }}
                    className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem
                        title='AI-Powered Movie Recommendation System'
                        backgroundImg={mingoImg}
                        desc='AI-powered movie recommender that suggests personalized films based on your preferences and watch history.'
                        tech='Python, Machine Learning, Pandas, NumPy, Scikit-learn'
                        sourceLink='https://github.com/mansoor-ul-hassan/Movie-recommander-System'
                        demoLink='#'
                    />
                    <ProjectItem
                        title='Blink IT Ecommerce Application'
                        backgroundImg={blinkImg}
                        desc='A modern ecommerce platform featuring seamless shopping experience with secure payment integration.'
                        tech='React JS, Firebase, Material UI'
                        sourceLink='https://github.com/mansoor-ul-hassan/blinkIt-ecommerce-main'
                        demoLink='https://blinkit-ecommerce-dcfe7.web.app/'
                    />
                    <ProjectItem
                        title='MCQs Generator using LangChain'
                        backgroundImg={expensoImg}
                        desc='Streamlit app that generates MCQs from text using LLMs, providing questions, options, and answers.'
                        tech='Python, Streamlit, LangChain, Hugging Face'
                        sourceLink='https://github.com/mansoor-ul-hassan/MCQs-Generator'
                        demoLink='#'
                    />
                    <ProjectItem
                        title='Transaction Fraud Detection'
                        backgroundImg={fraudImg}
                        desc='A data science project that predicts whether a financial transaction is fraudulent using ML algorithms.'
                        tech='Python, Scikit-learn, Pandas, Machine Learning'
                        sourceLink='https://github.com/mansoor-ul-hassan/transaction-fraud-detection-main'
                        demoLink='#'
                    />
                </motion.div>
            </div>
        </div>
    )
}

export default Projects