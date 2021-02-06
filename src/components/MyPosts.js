import './MyPosts.css';
import './Search.css';
import { getToken } from '../auth';
import { useState, useEffect } from 'react';
import { Badge, Grid, Tabs, Tab, Container, TextField, FormControlLabel, Checkbox, Button, Dialog, DialogContent, DialogActions } from '@material-ui/core';
import { editPost, deletePost, sendMessage } from '../api';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';

const MyPosts = () => {

    const [posts, setPosts] = useState([]);
    const [strangersPosts, setStrangersPosts] = useState([]);
    const [open, setOpen] = useState(false);
    const [messageOpen, setMessageOpen] = useState(false);
    const [clickedPost, setClickedPost] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState('');
    const [location, setLocation] = useState('');
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState(0);
    const [message, setMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const token = getToken();
        fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/me`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        }).then(response => response.json())
          .then(result => {
            console.log(result);
            setPosts(result.data.posts);
            console.log(result.data.posts);
          })
          .catch(console.error);
    }, []);

    useEffect(() => {
        fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts`)
            .then(response => response.json())
            .then(result => {
            const posts = result.data.posts;
            console.log(posts);
            setStrangersPosts(posts);
            })
            .catch(console.error);
    }, []);

    const TabPanel = (props) => {
        const {children, value, index} = props;
        return (
            <div>
                {value === index && (
                <div>{children}</div>)}
            </div> 
        )
    }

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

            <Container maxWidth="md">
            <Tabs value={value} onChange={(event, val) => {
                setValue(val);
            }}>
                <Tab label="My Posts"></Tab>
                <Tab label="Stranger's Posts"></Tab>
            </Tabs>
            <TabPanel value={value} index={0}><div className="MyPosts-container">
                            {posts.map((post, idx) => {
                                return (
                                    <>
                                        <div key={idx}>
                                            <h1 className='post-title'>{post.title}</h1> {/* post title */}
                                            <h3 className='post-description'>{post.description}</h3> {/* post description */}
                                            <h3 className='post-price'>Price: {post.price}</h3> {/* price */}
                                            <h3 className='post-author'>Seller: {post.author.username}</h3> {/* username */}
                                            <h3 className='post-location'>Location:{post.location}</h3> {/* username */}
                                            {post.active ? '' : <h3 style={{color: 'red'}}>This post has been deleted</h3>}
                                            <div>      
                                                <Button
                                                    style={{marginRight: '5px'}}
                                                    variant="outlined" 
                                                    color="secondary" 
                                                    onClick={() => {
                                                        setOpen(true);
                                                        console.log(post._id);
                                                        setId(post._id);
                                                        setClickedPost(post);
                                                    }}>
                                                    Edit Post
                                                </Button>
                                                <Dialog className='login-modal-backdrop'
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
                                                    <TextField
                                                        autoFocus
                                                        id="Title"
                                                        label="Title"
                                                        type="text"
                                                        fullWidth
                                                        value={title}
                                                        onChange={(event) => setTitle(event.target.value)}
                                                        
                                                    />
                                                    <TextField
                                                        autoFocus
                                                        id="Description"
                                                        label="Description"
                                                        type="text"
                                                        fullWidth
                                                        value={description}
                                                        onChange={(event) => setDescription(event.target.value)}
                                                        
                                                    />
                                                    <TextField
                                                        autoFocus
                                                        id="Price"
                                                        label="Price"
                                                        type="text"
                                                        fullWidth
                                                        value={price}
                                                        onChange={(event) => setPrice(event.target.value)}
                                                        
                                                    />
                                                    <TextField
                                                        autoFocus
                                                        id="Location"
                                                        label="Location"
                                                        type="text"
                                                        fullWidth
                                                        value={location}
                                                        onChange={(event) => setLocation(event.target.value)}
                                                        
                                                    />
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                checked={checked}
                                                                onChange={(event) => setChecked(event.target.checked)}
                                                                name="deliver"
                                                                color="primary"
                                                            />
                                                        }
                                                        label="Willing to Deliver?"
                                                    />
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button 
                                                            onClick={() => {
                                                                setOpen(false);
                                                                editPost(title, description, price, location, checked, id);
                                                            }} 
                                                            color="primary">
                                                            Edit
                                                        </Button>
                                                    </DialogActions>
                                                    </Dialog>  
                                                <Button 
                                                    style={{marginRight: '5px'}}
                                                    variant="outlined" 
                                                    color="secondary" 
                                                    onClick={() => {
                                                        console.log(post);
                                                        setClickedPost(post);
                                                        deletePost(post._id);
                                                        alert("Post Deleted!");
                                                    }}>
                                                    Delete Post
                                                </Button>
                                                <Button
                                                    color="secondary" 
                                                    onClick={() => {
                                                        setMessageOpen(true);
                                                        console.log('message btn');
                                                        
                                                    }}>
                                                    <Badge badgeContent={post.messages.length} color="primary" onClick={() => console.log("test badge")}>
                                                    <MailIcon />
                                                </Badge>
                                                </Button>
                                                <Dialog className='login-modal-backdrop'
                                                    open={messageOpen} 
                                                    onClose={() => setMessageOpen(false)}
                                                    boxShadow={3}
                                                    PaperProps={{
                                                        style: {
                                                        backgroundColor: '#ef1a56ff',
                                                        },
                                                    }}
                                                    >
                                                    <DialogContent>
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button 
                                                            onClick={() => {
                                                                setMessageOpen(false);
                                                                
                                                            }} 
                                                            color="primary">
                                                            Close
                                                        </Button>
                                                    </DialogActions>
                                                    </Dialog>  
                                                 
                                                <hr />     
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                            }             
                        </div></TabPanel>
            <TabPanel value={value} index={1}>{
                <div className='post-container'>
                    {strangersPosts.map((post, idx) => {
                            return (
                                <>
                                    <div key={idx}>
                                        <h1 className='post-title'>{post.title}</h1> {/* post title */}
                                        <h3 className='post-description'>{post.description}</h3> {/* post description */}
                                        <h3 className='post-price'>Price: {post.price}</h3> {/* price */}
                                        <h3 className='post-author'>Seller: {post.author.username}</h3> {/* username */}
                                        <h3 className='post-location'>Location:{post.location}</h3> {/* username */}
                                        <div>      
                                            <Button 
                                                variant="outlined" 
                                                color="secondary" 
                                                onClick={() => {
                                                    setOpen(true);
                                                    setId(post._id); 
                                                }}>
                                                Send Message
                                            </Button> 
                                            <Dialog className='login-modal-backdrop'
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
                                                    <TextField
                                                    
                                                        id="Message"
                                                        label="Message"
                                                        type="text"
                                                        fullWidth
                                                        value={message}
                                                        onChange={(event) => setMessage(event.target.value)}
                                                        
                                                    />
                                                    <Button 
                                                            onClick={() => {
                                                                setOpen(false);
                                                                sendMessage(id, message);
                                                            }} 
                                                            color="primary">
                                                            Send
                                                    </Button>
                                                    </DialogContent>
                                                </Dialog>
                                            <hr />     
                                        </div>
                                    </div>
                                </>
                            )
                    })}
                </div> 
                }</TabPanel>
            </Container>
        </>
    )
}

export default MyPosts;