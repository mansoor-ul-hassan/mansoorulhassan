import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CertificationItem = ({ title, certImg, description, verifyLink }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            transition={{ duration: 1 }}
            className='flex justify-center h-auto max-w-[530px] min-w-full my-1 shadow-xl shadow-gray-400 rounded-xl group cursor-pointer hover:scale-105 ease-in duration-300'
        >
            <div className='bg-white rounded-xl overflow-hidden min-w-full'>
                <div className='my-3'>
                    <Image
                        className='rounded-t-xl'
                        src={certImg}
                        alt={title}
                        width={600}
                        height={350}
                    />
                </div>
                <div className='px-8 text-center'>
                    <h6 className='text-1xl text-black tracking-wider text-center font-bold mb-3'>{title}</h6>
                    <p className='text-[14px] text-center text-gray-600 mb-2'>
                        {description}
                    </p>
                </div>
                
                <div className='flex justify-center items-center min-w-full pb-6'>
                    <a
                        href={verifyLink}
                        target='_blank'
                        rel='noreferrer'
                    >
                        <button className='text-sm p-3 my-6 hover:scale-105 ease-in duration-300 mx-5 w-[170px] min-[320px]:w-[120px]'>
                            Verify Certificate
                        </button>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default CertificationItem