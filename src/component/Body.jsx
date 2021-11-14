import React from 'react';
import Button from './Button';

const Body = () => {
    
    const handleClick = (e) => {
       
    }

    return (
        <div className="bg-skin-body rounded-xl p-8 transition-colors">
            <div className="flex flex-wrap gap-y-7 gap-x-6 justify-center items-center mb-7">
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"text-numpad"} bg={"bg-skin-numpad"} w={"w-btn"} val={7}>7</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"text-numpad"} bg={"bg-skin-numpad"} w={"w-btn"} val={8}>8</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"text-numpad"} bg={"bg-skin-numpad"} w={"w-btn"} val={9}>9</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-command"} shadow={"bg-skin-command-shadow"} color={"text-skin-command"} textSize={"text-command"} bg={"bg-skin-command"} w={"w-btn"} val={"DEL"}>DEL</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"text-numpad"} bg={"bg-skin-numpad"} w={"w-btn"} val={4}>4</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"text-numpad"} bg={"bg-skin-numpad"} w={"w-btn"} val={5}>5</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"text-numpad"} bg={"bg-skin-numpad"} w={"w-btn"} val={6}>6</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"text-numpad"} bg={"bg-skin-numpad"} w={"w-btn"} val={"+"}>+</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"text-numpad"} bg={"bg-skin-numpad"} w={"w-btn"} val={1}>1</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"text-numpad"} bg={"bg-skin-numpad"} w={"w-btn"} val={2}>2</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"text-numpad"} bg={"bg-skin-numpad"} w={"w-btn"} val={3}>3</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"text-numpad"} bg={"bg-skin-numpad"} w={"w-btn"} val={"-"}>-</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"text-numpad"} bg={"bg-skin-numpad"} w={"w-btn"} val={"."}>.</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"text-numpad"} bg={"bg-skin-numpad"} w={"w-btn"} val={0}>0</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"text-numpad"} bg={"bg-skin-numpad"} w={"w-btn"} val={"/"}>/</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-numpad"} shadow={"bg-skin-numpad-shadow"} color={"text-skin-numpad"} textSize={"text-numpad"} bg={"bg-skin-numpad"} w={"w-btn"} val={"x"}>x</Button>
            </div>
            <div className="flex items-center justify-between">
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-command"} shadow={"bg-skin-command-shadow"} color={"text-skin-command"} textSize={"text-command"} bg={"bg-skin-command"} w={"w-btn-cmd"} val={"RESET"}>RESET</Button>
                <Button onclick={handleClick} hover={"hover:bg-skin-hover-accent"} shadow={"bg-skin-accent-shadow"} color={"text-skin-eq"} textSize={"text-command"} bg={"bg-skin-accent"} w={"w-btn-cmd"} val={"="}>=</Button>
            </div>
        </div>
    );
}

export default Body;