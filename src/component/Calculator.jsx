import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { DataProvider } from '../context/DataContext';
import Body from './Body';
import Display from './Display';
import Header from './Header';

const Calculator = () => {
    const { theme } = useTheme();
    
    return (
        <div className={"bg-skin-fill w-screen h-screen " + theme}>
            <Header />
            <DataProvider>
                <Display />
                <Body />
            </DataProvider>
        </div>
    );
  }
  
  export default Calculator;