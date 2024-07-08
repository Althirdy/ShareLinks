import React, { createContext, useEffect, useState } from "react";
import { defaultImg, platform, bgDefaultImg } from 'src/Data/Platform';


export const LinksContext = createContext();

const ONE_HOUR = 3600000;

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
        const storedData = JSON.parse(localStorage.getItem('linkCards'));
        const storedTimestamp = localStorage.getItem('linkCardsTimestamp');
        const now = new Date().getTime();

        if (storedData && storedTimestamp && (now - storedTimestamp) < ONE_HOUR) {
            return storedData;
        }

        localStorage.removeItem('linkCards');
        localStorage.removeItem('linkCardsTimestamp');
        return defaultValue;
    })

    useEffect(() => {
        localStorage.setItem('linkCards', JSON.stringify(linkCards));
        localStorage.setItem('linkCardsTimestamp', new Date().getTime());
    }, [linkCards]);



    const [profile, setProfile] = useState(() => {
        const pastValue = JSON.parse(localStorage.getItem('profile'))
        return pastValue || {
            imgSrc: defaultImg,
            bgSrc: bgDefaultImg,
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