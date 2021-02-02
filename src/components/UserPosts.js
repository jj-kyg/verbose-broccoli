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
               <div>
                   {posts.map((post, idx) => {
                        return (
                            <>
                                { loggedIn 
                                    ?   <div key={idx}>
                                            <h1>{post.title}</h1> {/* post title */}
                                            <h3>{post.description}</h3> {/* post description */}
                                            <h3>{post.price}</h3> {/* price */}
                                            <h2>{post.author.username}</h2> {/* username */}
                                            <h3>{post.location}</h3> {/* username */}
                                            <div>      
                                                <Button 
                                                    variant="outlined" 
                                                    color="primary" 
                                                    onClick={() => console.log("Test")}>
                                                    Send Message
                                                </Button>      
                                            </div>
                                        </div>
                                    :   <div key={idx}>
                                            <h1>{post.title}</h1> {/* post title */}
                                            <h3>{post.description}</h3> {/* post description */}
                                            <h3>{post.price}</h3> {/* price */}
                                            <h2>{post.author.username}</h2> {/* username */}
                                            <h3>{post.location}</h3> {/* username */}
                                            <div>      
                                                <Button 
                                                    variant="outlined" 
                                                    color="primary" 
                                                    onClick={() => setOpen(true)}>
                                                    Send Message
                                                </Button>
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