import React, { createContext, useState } from "react";
import { platform } from 'src/Data/Platform';

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


    return (
        <LinksContext.Provider
            value={{
                linkCards,
                setLinkCards
            }}
        >
            {children}
        </LinksContext.Provider>
    );
};