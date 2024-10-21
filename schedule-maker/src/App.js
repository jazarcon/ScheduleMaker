// src/App.js

import React from 'react';
import './App.css';
import SideBar from './sideBar';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>ScheduleMaker</h1>
            </header>
            <SideBar />
        </div>
    );
}

export default App;