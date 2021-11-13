import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { DataProvider } from '../context/DataContext';
import Body from './Body';
import Display from './Display';
import Header from './Header';

const Calculator = () => {
    const { theme } = useTheme();
    console.log(theme.name);
    
    return (
        <div className={"flex h-screen justify-center items-center bg-skin-fill transition-all " + theme.name}>
            <div className="w-540">
                <Header />
                <DataProvider>
                    <Display />
                    <Body />
                </DataProvider>
            </div>
        </div>
    );
  }
  
  export default Calculator;