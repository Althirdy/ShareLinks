import { CiTwitter } from "react-icons/ci";
import { FaGithub, FaYoutube, FaFacebook } from "react-icons/fa";

const defaultImg = "https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="

const platform = [
    {
        value: 'Other',
        label: 'Other',
        icon: ''
    },
    {
        value: 'Github',
        label: 'Github',
        icon: <FaGithub size={20} className='mt-[-3px]' />

    },
    {
        value: 'Youtube',
        label: 'Youtube',
        icon: <FaYoutube size={20} className='mt-[-3px]' />
    },
    {
        value: 'X',
        label: 'X [Twitter]',
        icon: <CiTwitter size={20} className='mt-[-3px]' />
    },
    {
        value: 'Facebook',
        label: 'Facebook',
        icon: <FaFacebook size={20} className='mt-[-3px]' />
    },
]


export { platform, defaultImg }