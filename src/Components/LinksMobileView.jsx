import React, { useContext } from 'react'
import LinkView from './LinkView'
import { motion } from 'framer-motion'
import { LinksContext } from 'src/Context/ApiContext'


export default function LinksMobileView() {
    const { linkCards } = useContext(LinksContext)
    const filteredLinkCards = linkCards.filter(card => card.isValidated && card);

    return (
        <div className='flex flex-col justify-center lg:gap-20 gap-12 items-center'>
            {/* Profile */}
            <motion.div
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, repeatDelay: 0.5, duration: 1, ease: "easeInOut" }}
                className='mt-5 space-y-2 flex flex-col items-center'
            >
                {/* img */}
                <div className='h-28 mb-5 w-28 bg-gray-300 rounded-full animate-pulse'></div>
                {/* Name */}
                <div className='w-40 h-5 rounded-md bg-gray-300 animate-pulse'></div>
                {/* email */}
                <div className='w-32 h-5 rounded-md bg-gray-300 animate-pulse'></div>
            </motion.div>
            {/* End Profile */}
            <div className='lg:space-y-4 space-y-2'>
                {filteredLinkCards.map((item, idx) => (
                    <LinkView
                        key={idx}
                        data={item}
                    />
                ))}
            </div>
        </div>
    )
}
