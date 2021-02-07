import './UserPosts.css';
import './Search.css';
import { useState, useEffect } from 'react';
import { Grid, Container, Button, TextField, DialogContentText, Dialog, DialogContent} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const UserPosts = ({
    loggedIn
}) => {

    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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
        <>
            <div className="search">
            <div id="search-group">
                <Grid 
                    container 
                    spacing={1} 
                >
                <div id="search-icon">
                    <Grid item>
                    <SearchIcon />
                    </Grid>
                </div>
                    <Grid item>
                    <TextField 
                        id="search-entry" 
                        // defaultValue="Search Posts"
                        label="Search Posts"
                        placeholder="Search Posts..."
                        variant="outlined" 
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)} 
                        
                    />
                    </Grid>
                </Grid>
            </div>
            {console.log(searchTerm)}
            </div>
        )

            <Container maxWidth="md">
                {
                <div className='post-container'>
                    {posts.filter((post) => {
                                if (searchTerm == '') {
                                    return post
                                } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    console.log(post);
                                    return post
                                }
                    }).map((post, idx) => {
                            return (
                                <>
                                    { loggedIn 
                                        ?   <div key={idx}>
                                                <h1 className='post-title'>{post.title}</h1> {/* post title */}
                                                <h3 className='post-description'>{post.description}</h3> {/* post description */}
                                                <h3 className='post-price'>Price: {post.price}</h3> {/* price */}
                                                <h3 className='post-author'>Seller: {post.author.username}</h3> {/* username */}
                                                <h3 className='post-location'>Location:{post.location}</h3> {/* username */}
                                                
                                                <div>      
                                                    <Button 
                                                        variant="outlined" 
                                                        color="secondary" 
                                                        onClick={() => console.log("What?")}>
                                                        Send Message
                                                    </Button> 
                                                    <hr />     
                                                </div>
                                            </div>
                                        :   <div key={idx}>
                                                <h1 className="post-title">{post.title}</h1> {/* post title */}
                                                <h3 className="post-description">{post.description}</h3> {/* post description */}
                                                <h3 className="post-price">Price: {post.price}</h3> {/* price */}
                                                <h3 className="post-author">Seller: {post.author.username}</h3> {/* username */}
                                                <h3 className="post-location">Location: {post.location}</h3> {/* username */}
                                                
                                                <div>      
                                                    <Button 
                                                        variant="filled" 
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
        </>
    );
}

export default UserPosts;