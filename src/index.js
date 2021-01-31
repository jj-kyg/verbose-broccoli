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
<<<<<<< HEAD
        <div className="APP">
            <Header />
            <Login />
            <SignUp />
            <Multimodal />
            <Search />
            <UserPosts />

=======
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
>>>>>>> c8f01965fd91119431255839736950b94dfb209e
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));