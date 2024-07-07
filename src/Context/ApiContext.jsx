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
    const [linkCards, setLinkCards] = useState(defaultValue);


    const [profile, setProfile] = useState({
        imgSrc: defaultImg,
        FullName: '',
        Email: '',
        Description: '' 
    })

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