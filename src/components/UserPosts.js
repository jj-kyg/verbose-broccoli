import './UserPosts.css';
import Container from '@material-ui/core/Container'; {/*we use container here because it is responsive*/}

const UserPosts = () => {
    return (
        <Container maxWidth="md">
        <div className="post">
            <div id="post-info">
                <div id="border">
                    <h2>This is a Random Post</h2>
                    <h3>Not looking for any money, just looking to have some fun...</h3>
                    <br/>
                    <h3>Price: free</h3>
                    <h3>Seller: jane1234</h3>
                    <h3>Location: [on request]</h3>
                    <br />
                </div>
            </div>
        </div>
        </Container>
    );
}

export default UserPosts;