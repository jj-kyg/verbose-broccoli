import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'

import { 
    Header,
    Search,
    UserPosts,
    Login, 
    SignUp,
    SignOut,
    Multimodal
} from './components';

import {
    registerUser,
    loginUser,
} from './api';

import {
    getToken
} from './auth';

const App = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${currentUser}`
                },
            }).then(response => response.json())
                .then(result => {
                console.log("Users posts are", result);
                })
                .catch(console.error);
    }, []);

    return (
        <Router>
            <div>
                <div className="header">
                    <Header />
                    <div className="header-btns">
                        {loggedIn ? '' : <Login currentUser={currentUser} setCurrentUser={setCurrentUser} loginUser={loginUser} setLoggedIn={setLoggedIn} />}
                        {loggedIn ? '' : <SignUp registerUser={registerUser}/>}
                        {loggedIn ? <SignOut setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn}/> : ''}
                        <Multimodal />
                    </div>
                </div>
                    <Search />
                    {/* logged in ? show MyPosts : '' */}
                    <UserPosts loggedIn={loggedIn} />
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));