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

    return (
        <div>
            <div className='Content'>
                <Router>
                        <div className="header">
                            <Header />
                            <div className="header-btns">
                                {loggedIn ? '' : <Login currentUser={currentUser} setUsername={setUsername} setLoggedIn={setLoggedIn} />}
                                {loggedIn ? <CreatePost setRender={setRender} loggedIn={loggedIn} username={username} /> : ''}
                                {loggedIn ? '' : <SignUp registerUser={registerUser}/>}
                                {loggedIn ? <SignOut setRender={setRender} setCurrentUser={setCurrentUser} setLoggedIn={setLoggedIn}/> : ''}
                            </div>
                        </div>
                        {
                            loggedIn 
                            ?   <div className="posts-div">
                                    {/* <Search /> */}
                                    <MyPosts />
                                </div> 
                            :   <div>
                                    {/* <Search />  */}
                                    <UserPosts loggedIn={loggedIn} />
                                </div>
                        }
                </Router>
            </div>
            <Footer loggedIn={loggedIn}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));