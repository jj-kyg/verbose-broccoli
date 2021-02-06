import './MyPosts.css';
import { getToken } from '../auth';
import { useState, useEffect } from 'react';
import { Tabs, Tab, Container, TextField, FormControlLabel, Checkbox, Button, Dialog, DialogContent, DialogActions } from '@material-ui/core';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { editPost, deletePost, sendMessage } from '../api';
import { purple } from '@material-ui/core/colors';


const MyPosts = () => {

    const [posts, setPosts] = useState([]);
    const [strangersPosts, setStrangersPosts] = useState([]);
    const [open, setOpen] = useState(false);
    const [clickedPost, setClickedPost] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState('');
    const [location, setLocation] = useState('');
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState(0);
    const [message, setMessage] = useState('');

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

    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
    }));

    const theme = createMuiTheme({
        palette: {
          primary: purple,
        },
        secondary: {
            main: '#80d8ff',
          },
    });

    const classes = useStyles();

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
                                            <Button 
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
    )
}

export default MyPosts;