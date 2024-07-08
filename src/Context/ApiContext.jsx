import React, { createContext, useEffect, useState } from "react";
import { defaultImg, platform } from 'src/Data/Platform';

// Create context
export const LinksContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
    const defaultValue = [
        {
            id: 1,
            platform: platform[0],
            link: '',
            isValidated: false
        }
    ]
    const [linkCards, setLinkCards] = useState(() => {
        const pastValue = JSON.parse(localStorage.getItem('linkCards'))
        return pastValue || defaultValue
    })

    useEffect(() => {
        localStorage.setItem('linkCards', JSON.stringify(linkCards))
    }, [linkCards])



    const [profile, setProfile] = useState(() => {
        const pastValue = JSON.parse(localStorage.getItem('profile'))
        return pastValue || {
            imgSrc: defaultImg,
            FullName: '',
            Email: '',
            Description: ''
        }
    })


    useEffect(() => {
        localStorage.setItem('profile', JSON.stringify(profile))
    }, [profile])

    return (
        <LinksContext.Provider
            value={{
                linkCards,
                setLinkCards,
                profile,
                setProfile
            }}
        >
            {children}
        </LinksContext.Provider>
    );
};