import { CiTwitter } from "react-icons/ci";
import { FaGithub, FaYoutube } from "react-icons/fa";


const platform = [
    {
        value: 'other',
        label: (
            <div className='flex items-center  gap-2'>
                Other
            </div>
        )
    },
    {
        value: 'github',
        label: (
            <div className='flex items-center  gap-2'>
                <FaGithub size={20} className='mt-[-3px]' /> Github
            </div>
        )
    },
    {
        value: 'youtube',
        label: (
            <div className='flex items-center  gap-2'>
                <FaYoutube size={20} className='mt-[-3px]' /> Youtube
            </div>
        )
    },
    {
        value: 'x',
        label: (
            <div className='flex items-center  gap-2'>
                <CiTwitter size={20} className='mt-[-3px]' /> Twitter
            </div>
        )
    },
]


export { platform }