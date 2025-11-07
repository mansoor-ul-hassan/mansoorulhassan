import React from 'react'
import { motion } from 'framer-motion'
import CertificationItem from './CertificationItem'

// Import your certification images
import cert1 from '../../public/assets/cert1.png'
import cert2 from '../../public/assets/cert2.png'
import cert3 from '../../public/assets/cert3.png'
import cert4 from '../../public/assets/cert4.png'
import cert5 from '../../public/assets/cert5.png'
import cert6 from '../../public/assets/cert6.png'
import cert7 from '../../public/assets/cert7.png'
import cert8 from '../../public/assets/cert8.png'
import cert9 from '../../public/assets/cert9.png'

const Certifications = () => {
    return (
        <div id='certifications' className='w-full bg-gray-100'>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p className='text-xl tracking-widest uppercase font-bold-200 text-transparent bg-clip-text bg-gradient-to-r from-[#1e40af] to-[#0ea5e9]'>
                        My Achievements
                    </p>
                    <h2 className='py-4'>Certifications</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ y: [-50, 0], opacity: 1 }}
                    className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'
                >
                    <CertificationItem
                        title='Python 101 for Data Science'
                        certImg={cert1}
                        description='Certified in Python 101 for Data Science, showcasing core Python and data analysis skills.'
                        verifyLink='https://courses.skillsbuild.skillsnetwork.site/certificates/b8f246470e964e9391e33b3851cab897#'
                    />
                    <CertificationItem
                        title='Data Analysis with Python'
                        certImg={cert2}
                        description='Certified in Data Analysis with Python, skilled in data cleaning, visualization, and statistical analysis.'
                        verifyLink='https://courses.skillsbuild.skillsnetwork.site/certificates/e2c675fdaf604437b7b6ae315ea8380a#'
                    />
                    <CertificationItem
                        title='Data Visualization with Python'
                        certImg={cert3}
                        description='Certified in Data Visualization with Python, skilled in creating impactful visual insights.'
                        verifyLink='https://courses.skillsbuild.skillsnetwork.site/certificates/994c6e31dfb1441b8e4cd74a623fb310#'
                    />
                    <CertificationItem
                        title='Python Essentials 2'
                        certImg={cert4}
                        description='Certified in Python Essentials 2, skilled in advanced Python programming and problem-solving.'
                        verifyLink='https://www.netacad.com/certificates/?issuanceId=c13de372-df8e-40a4-accb-9b9d8fde0cde'
                    />
                    <CertificationItem
                        title='Python Essentials 1'
                        certImg={cert5}
                        description='Certified in Python Essentials 1, skilled in foundational Python programming and problem-solving.'
                        verifyLink='https://www.netacad.com/certificates/?issuanceId=af50d109-6543-487d-b3d1-11805da5bdeb'
                    />
                    <CertificationItem
                        title='Data Science & Analytics'
                        certImg={cert6}
                        description='Certified in Data Science & Analytics, skilled in extracting insights and building data-driven solutions.'

                        verifyLink='https://www.life-global.org/certificate/20d431bf-d02f-4bdf-a212-1236a2c92c43'
                    />
                    <CertificationItem
                        title='Presenting Data'
                        certImg={cert7}
                        description='Certified in Presenting Data, skilled in data storytelling and visualization techniques.'
                        verifyLink='https://www.life-global.org/certificate/ebf54e7c-aacc-4846-aef8-5b4d92021f29'
                    />
                    <CertificationItem
                        title='Data Science Methodology'
                        certImg={cert8}
                        description='Certified in Data Science Methodology, skilled in applying structured approaches to solve real-world data problems effectively.'
                        verifyLink='https://www.example.com/verify/your-cert-id'
                    />
                    <CertificationItem
                        title='Machine Learning - Dimensionality Reduction'
                        certImg={cert9}
                        description='Skilled in PCA, feature selection, and data compression techniques.'
                        verifyLink='https://courses.skillsbuild.skillsnetwork.site/certificates/d371f8279d9344adac443d87b522320b'
                    />
                </motion.div>
                
            </div>
        </div>
    )
}

export default Certifications