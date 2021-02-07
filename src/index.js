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
    UserPosts,
    Login, 
    SignUp,
    SignOut,
    Footer,
    CreatePost,
    MyPosts
} from './components';

import {
    registerUser,
} from './api';

const App = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('')
    const [currentUser, setCurrentUser] = useState();
    const [render, setRender] = useState(false);
    const [add, setAdd] = useState(0);

    return (
        <div>
            <div className='Content'>
                <Router>
                        <div className="header">
                            <Header />
                            <div className="header-btns">
                                {loggedIn ? '' : <Login currentUser={currentUser} setUsername={setUsername} setLoggedIn={setLoggedIn} />}
                                {loggedIn ? <CreatePost setAdd={setAdd} setRender={setRender} loggedIn={loggedIn} username={username} /> : ''}
                                {loggedIn ? '' : <SignUp registerUser={registerUser}/>}
                                {loggedIn ? <SignOut setRender={setRender} setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn}/> : ''}
                            </div>
                        </div>
                        {
                            loggedIn 
                            ?   <div className="posts-div">
                                    <MyPosts add={add}/>
                                </div> 
                            :   <div>
                                    <UserPosts loggedIn={loggedIn} />
                                </div>
                        }
                </Router>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));