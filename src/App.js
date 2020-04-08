import React from 'react';
import './App.css';

import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar.jsx";
import Header from "./components/Header/Header.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 4},
        {id: 2, message: `It\'s my first post`, likesCount: 13}
    ];
    let dialogs = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Anton'},
        {id: 3, name: 'Ihor'},
        {id: 4, name: 'Mikita'},
        {id: 5, name: 'Vitaha'}
    ];
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'Konitiva'},
        {id: 5, message: 'Aloha'},
        {id: 4, message: 'Privet'}
    ];

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs messages={messages} dialogs={dialogs}/>}/>
                    <Route path='/profile' render={() => <Profile posts={posts}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;