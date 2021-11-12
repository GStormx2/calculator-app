import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('');
    const value = {
        theme,
        setTheme
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}