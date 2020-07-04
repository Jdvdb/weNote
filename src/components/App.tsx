import React from 'react';
import './App.css';
import './Header/Newsletter/Newsletter';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './Footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
