import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Ball from './Ball';


const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [position, setPosition] = useState('-left-2');
    console.log('hey');
    const onThemeChange = (e) => {
        e.preventDefault();
        const num = e.target.value;
        
        if (num === "1") { 
            const themeObj = {name: '', num: 1, previousNum: theme.num};
            setTheme({...themeObj});
            setPosition('-left-2');
        }
        else if (num === "2" ) { 
            const themeObj = {name: 'ice-cream', num: 2, previousNum: theme.num};
            setTheme({...themeObj});
            setPosition('left-5');
        }
        else if (num === "3") {
            const themeObj = {name: 'neon-purple', num: 3, previousNum: theme.num};
            setTheme({...themeObj});
            setPosition('left-12');
        }

    }

    return (
        <div className="relative flex items-center w-switcher h-switcher bg-skin-display rounded-xl">
            <div className="absolute z-10 grid grid-cols-3 grid-rows-2 justify-center text-center w-full text-skin-base text-sm -top-5">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <button onClick={onThemeChange} value="1" className="w-full h-full"></button>
                <button onClick={onThemeChange} value="2" className="w-full h-full"></button>
                <button onClick={onThemeChange} value="3" className="w-full h-full"></button>
            </div>
            <Ball pos={position}/>
        </div>
    );
}
export default ThemeSwitcher;