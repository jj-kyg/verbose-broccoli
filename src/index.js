import ReactDOM from 'react-dom';

import { 
    Header,
    Search,
    UserPosts,
    Login, 
    SignUp,
    Multimodal
} from './components';

const App = () => {
    return (
        <div>
            <div className="header">
                <Header />
                <div className="header-btns">
                    <Login />
                    <SignUp />
                    <Multimodal />
                </div>
            </div>
                <Search />
                <UserPosts />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));