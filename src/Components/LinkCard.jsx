import { motion } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select';
import { FaLink } from "react-icons/fa6";
import { validateLink } from 'src/util/Validation';
import { platform } from 'src/Data/Platform';
import { LinksContext } from 'src/Context/ApiContext';
import { RxDragHandleDots2 } from "react-icons/rx";


export default function LinkCard(props) {
    const { linkCards, setLinkCards } = useContext(LinksContext)
    const linkData = linkCards.filter(item => item.id === props.id)
    const platformData = platform.filter(item => item.value === props.cardData.platform?.value)
    const [validate, setValidate] = useState(false)
    const handlePlatformChange = (selectedOption) => {

        props.setSelectedPlatform(selectedOption);

    };
    const handleInputChange = (e) => {
        props.handleInputChange(e)

    }

    useEffect(() => {
        setLinkCards(linkCards.map((item) => {
            return item.id === props.id ? { ...item, isValidated: validate } : item
        }))
    }, [validate]);

    useEffect(() => {
        setValidate(validateLink(linkData[0].link, linkData[0].platform.value))
    }, [linkData[0].link, linkData[0].platform])


    return (
        <div className='bg-gray-50 p-4 space-y-4 border rounded-md'>
            <div className='flex justify-between items-center'>
                <div className='flex items-end text-gray-600 gap-2'  {...props.dragHandleProps}>
                    <RxDragHandleDots2 size={25} />
                    <h3 className='font-medium flex items-center gap-1'>{platformData[0].icon}{props.cardData.platform?.value} Link </h3>
                </div>
                {linkCards.length !== 1
                    &&
                    <motion.button
                        onClick={() => props.removeCard(props.id)}
                        whileHover={{ scale: 1.02 }}
                        className='bg-red-200 text-sm text-gray-900 px-3 py-1 rounded-md'>
                        Remove
                    </motion.button>
                }
            </div>
            <div className='flex flex-col gap-2 '>
                <label htmlFor="platform" className='text-sm'>Platform</label>
                <Select name={`platform-${props.cardData.id}`} className='text-gray-500' onChange={handlePlatformChange} value={props.cardData.platform}
                    options={platform}
                    classNames='rounded-md'
                    isSearchable={false} />
            </div>
            <div className='flex flex-col gap-2 relative '>
                <label htmlFor="link" className='text-sm'>Link</label>
                <input
                    value={props.cardData.link || ''}
                    onInput={handleInputChange}
                    onChange={handleInputChange}
                    name="link"
                    className={`py-1.5 text-md text-gray-800 px-7 border rounded-md focus:outline-blue-600`}
                />
                <div className='absolute top-[57%] left-2 text-gray-700'>
                    <FaLink />
                </div>
            </div>
            {!validate && <span className='text-sm text-red-600'>Provide a valid link</span>}
        </div>
    )
}
