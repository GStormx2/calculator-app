import React from 'react';
import ThemeSwitcher from '../component/ThemeSwitcher';

const Header = () => {
    return (
        <div className="flex justify-between items-center font-bold">
            <h1>calc</h1>
            <div className="flex items-center">
                <p>THEME</p>
                <ThemeSwitcher />
            </div>
        </div>
    );
}

export default Header;