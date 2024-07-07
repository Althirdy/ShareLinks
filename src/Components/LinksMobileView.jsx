import React, { useContext } from 'react'
import LinkView from './LinkView'
import { LinksContext } from 'src/Context/ApiContext'
import { defaultImg } from 'src/Data/Platform'

export default function LinksMobileView() {
    const { linkCards, profile } = useContext(LinksContext)
    const filteredLinkCards = linkCards.filter(card => card.isValidated && card);
    const animate = 'animate-pulse'
    return (
        <div className=' lg:gap-16 space-y-6 p-8  bg-'>
            <div className='mt-5'>
                <div className='flex flex-col items-center mb-8'>
                    <div
                        className={`h-32 mb-5 w-32 bg-gray-300 rounded-full ${profile.imgSrc === defaultImg && animate}`}>
                        <img src={profile.imgSrc} alt="" className='h-full w-full rounded-full object-cover relative z-10' />
                    </div>
                    {profile.FullName ?
                        <h3 className='text-2xl text-center font-bold tracking-tight text-gray-900'>{profile.FullName}</h3> :
                        <div className={`h-2 w-44 rounded-md bg-gray-300 animate-pulse my-2`}></div>
                    }
                    {profile.Email ?
                        <h3 className='text-md font-medium text-center tracking-tight text-gray-500 mt-[-1px]'>{profile.Email}</h3> :
                        <div className={`w-40 h-2 rounded-md bg-gray-300 animate-pulse`}></div>
                    }
                </div>
                <h5>Description</h5>
                {profile.Description ?
                    <textarea value={profile.Description} rows={5} disabled className='text-sm font-regular p-2 border border-gray-400 resize-none w-full tracking-tight text-gray-700 mt-3 rounded-md  ' /> :
                    <div className={` h-12 rounded-md bg-gray-300  animate-pulse mt-5`}></div>
                }
            </div>
            {/* End Profile */}
            <div className='lg:space-y-3 flex flex-col items-center space-y-2'>
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
