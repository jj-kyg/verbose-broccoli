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
        <div className="APP">
            <Header />
            <Login />
            <SignUp />
            <Multimodal />
            <Search />
            <UserPosts />

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));