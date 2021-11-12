import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider } from './context/DataContext';
import Body from './component/Body';
import Display from './component/Display';
import Header from './component/Header';

const App = () => {
  return (
    <ThemeProvider>
      <div className={"bg-skin-fill w-screen h-screen"}>
        <Header />
        <DataProvider>
          <Display />
          <Body />
        </DataProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
