import ReactDOM from 'react-dom';

import { 
    Header,
    Search,
    UserPosts,
    Login, 
    SignUp
} from './components';

const App = () => {
    return (
        <div>
            <Header />
            <Search />
            <UserPosts />
            <Login />
            <SignUp />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));