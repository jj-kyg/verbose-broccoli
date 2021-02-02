import ReactDOM from 'react-dom';
import { useState } from 'react';

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

const App = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <Router>
            <div>
                <div className="header">
                    <Header />
                    <div className="header-btns">
                        {loggedIn ? '' : <Login loginUser={loginUser} setLoggedIn={setLoggedIn} />}
                        {loggedIn ? '' : <SignUp registerUser={registerUser}/>}
                        {loggedIn ? <SignOut setLoggedIn={setLoggedIn}/> : ''}
                        <Multimodal />
                    </div>
                </div>
                    <Search />
                    <UserPosts loggedIn={loggedIn} />
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));