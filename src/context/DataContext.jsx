import React, { useContext, useState } from 'react';

const DataContext = React.createContext();

export const useData = () => {
    return useContext(DataContext);
}

export const DataProvider = ({children}) => {
    const [data, setData] = useState('');
    const value = {
        data,
        setData
    };
    
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}