import { CiTwitter } from "react-icons/ci";
import { FaGithub, FaYoutube, FaFacebook } from "react-icons/fa";

const defaultImg = "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="

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
    {
        value: 'facebook',
        label: (
            <div className='flex items-center  gap-2'>
                <FaFacebook size={20} className='mt-[-3px]' /> Facebook
            </div>
        )
    },
]


export { platform, defaultImg }