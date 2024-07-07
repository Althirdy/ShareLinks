import React, { createContext, useState } from "react";
import { defaultImg, platform } from 'src/Data/Platform';

// Create context
export const LinksContext = createContext();

// Provider component
export const AppProvider = ({ children }) => {
    const [linkCards, setLinkCards] = useState([
        {
            id: 1,
            platform: platform[0],
            link: '',
            isValidated: false
        }
    ]);

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