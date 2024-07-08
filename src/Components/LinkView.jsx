import { motion } from 'framer-motion';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { platform as platformData } from 'src/Data/Platform';

export default function LinkView(props) {

    const getFormattedLink = (link) => {
        if (!link.startsWith('http://') && !link.startsWith('https://')) {
            link = `https://${link}`;
        }

        if (link.includes('youtube.com')) {
            link = `${link}/`;
        }

        return link;
    };

    let platform = props.data.platform?.value
    let backgroundColor;

    switch (platform) {
        case 'Youtube':
            backgroundColor = 'bg-red-600'
            break;
        case 'X':
            backgroundColor = 'bg-gray-900'
            break;
        case 'Github':
            backgroundColor = 'bg-gray-900'
            break;
        case 'Facebook':
            backgroundColor = 'bg-blue-600'
            break;
        default:
            backgroundColor = 'bg-gray-500'
            break;
    }
    const iconData = platformData.filter(item => item.value === props.data.platform?.value)
    return (
        <motion.a
            whileHover={{ scale: 1.01 }}
            href={getFormattedLink(props.data.link)}
            target='_blank'
            rel='noopener noreferrer'
            className='block'
        >
            <div className={`${backgroundColor} flex items-center text-gray-100 justify-between p-4 rounded-md w-60 md:w-72 lg:w-80`}>
                <h3 className='flex   items-center text-md gap-2'>
                    {iconData[0].icon}
                    {props.data.platform?.value}
                </h3>
                <FaArrowRight />
            </div>
        </motion.a>
    )
}
