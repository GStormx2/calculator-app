import React from 'react';
import { useTheme } from '../context/ThemeContext';
const Ball = (props) => {
    const { theme } = useTheme();
    return <div className={"absolute ml-3 w-switcher-ball h-switcher-ball bg-skin-accent rounded-full transition-all " + props.pos}></div>
}
export default Ball;