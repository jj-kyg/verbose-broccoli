import './UserPosts.css';
import { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container'; {/*we use container here because it is responsive*/}
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const UserPosts = ({
    loggedIn
}) => {
    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts`)
            .then(response => response.json())
            .then(result => {
            const posts = result.data.posts;
            console.log(posts);
            setPosts(posts);
            })
            .catch(console.error);
    }, []);
    return (
        <Container maxWidth="md">
            {
               <div className='post-container'>
                   {posts.map((post, idx) => {
                        return (
                            <>
                                { loggedIn 
                                    ?   <div key={idx}>
                                            <h1 className='post-title'>{post.title}</h1>
                                            <h3 className='post-description'>{post.description}</h3>
                                            <h3 className='post-price'>Price: {post.price}</h3>
                                            <h3 className='post-author'>Seller: {post.author.username}</h3>
                                            <h3 className='post-location'>Location:{post.location}</h3>
                                            
                                            <div>      
                                                <Button 
                                                    variant="outlined" 
                                                    color="primary" 
                                                    onClick={() => console.log("Test")}>
                                                    Send Message
                                                </Button> 
                                                <hr />     
                                            </div>
                                        </div>
                                    :   <div key={idx}>
                                            <h1 className="post-title">{post.title}</h1>
                                            <h3 className="post-description">{post.description}</h3>
                                            <h3 className="post-price">Price: {post.price}</h3>
                                            <h3 className="post-author">Seller: {post.author.username}</h3>
                                            <h3 className="post-location">Location: {post.location}</h3>
                                            
                                            <div>      
                                                <Button 
                                                    variant="outlined" 
                                                    color="primary" 
                                                    onClick={() => setOpen(true)}>
                                                    Send Message
                                                </Button>
                                                <hr />
                                                <Dialog
                                                    open={open} 
                                                    onClose={() => setOpen(false)}
                                                    boxShadow={3}
                                                    PaperProps={{
                                                        style: {
                                                        backgroundColor: '#ef1a56ff',
                                                        },
                                                    }}
                                                    >
                                                <DialogContent>
                                                    <DialogContentText>
                                                       Please log in to send message
                                                    </DialogContentText>
                                                </DialogContent>
                                                </Dialog>       
                                            </div>    
                                        </div>  
                                }
                            </>
                        )
                   })}
               </div> 
            }
        </Container>

    );
}

export default UserPosts;