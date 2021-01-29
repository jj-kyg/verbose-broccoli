import ReactDOM from 'react-dom';

import { 
    Header,
    Search,
    UserPosts, 
} from './components';

const App = () => {
    return (
        <div>
            <Header />
            <Search />
            <UserPosts />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));