import './Search.css';
import './loggedIn.css';
import { getToken } from '../auth';
import { useState, useEffect } from 'react';
import {Badge, Grid, Tabs, Tab, Container, TextField, Button, Dialog, DialogContent, DialogActions } from '@material-ui/core';
import { editPost, deletePost, sendMessage } from '../api';
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import { createMuiTheme, withStyles, ThemeProvider, } from '@material-ui/core/styles';
const MyPosts = ({
    add,
    setAdd
}) => {
    const [posts, setPosts] = useState([]);
    const [strangersPosts, setStrangersPosts] = useState([]);
    const [open, setOpen] = useState(false);
    const [messageOpen, setMessageOpen] = useState(false);
    const [clickedPost, setClickedPost] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [id, setId] = useState('');
    const [location, setLocation] = useState('');
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState(0);
    const [message, setMessage] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [msg, setMsg] = useState(false);
    const [editSubmit, setEditSubmit] = useState(false);
    const theme = createMuiTheme({
        palette: {
          primary: {
            main: '#021b27ff'
          },
        },
        secondary: {
            main: '#e737a7ff',
          },
    });
    const ColorButton = withStyles((theme) => ({
        root: {
        },
      }))(Button);
    


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
            setFilteredPosts(result.data.posts)
          })
          .catch(console.error);
    },[add]);

    useEffect(() => {
        fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts`)
            .then(response => response.json())
            .then(result => {
            const posts = result.data.posts;
            console.log(posts);
            setStrangersPosts(posts);
            })
            .catch(console.error);
    },[add]);

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
                <div id="search-group" style={{borderRadius: '8px'}}>
                    <Grid 
                        container 
                        spacing={1} 
                    >
                    <div id="search-icon">
                        <Grid item>
                        <SearchIcon
                            fontSize="large"
                            style={{color: 'whitesmoke'}} 
                        />
                        </Grid>
                    </div>
                        <Grid item>
                        <TextField 
                            id="search-entry" 
                            placeholder="Search Posts..."
                            variant="outlined" 
                            value={searchTerm}
                            onChange={(event) => setSearchTerm(event.target.value)} 
                            
                        />
                        </Grid>
                    </Grid>
                </div>
                </div>
            <Container maxWidth="md">
            <Tabs 
                value={value} 
                onChange={(event, val) => {
                setValue(val);
            }}>
                <Tab 
                    label="My Posts"
                    style={{color: 'whitesmoke'}}   
                >
                </Tab>
                <Tab 
                    label="Stranger's Posts"
                    style={{color: 'whitesmoke'}} 
                >
                </Tab>
            </Tabs>
            <TabPanel 
                value={value} 
                index={0}><div 
                className="gridbox">
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
                                        {/* edit post attempt */}
                                        <div className='edit'>
                                            <p id="title"><input type="text" id={idx} value={post.title} onChange={(event) => setTitle(event.target.value)} /></p>
                                            <p id="description"><input type="text" id={idx} value={post.description} onChange={(event) => setDescription(event.target.value)} /></p>
                                            <p id="price">Price:<input type="text" id={idx} value={post.price} onChange={(event) => setPrice(event.target.value)} /></p>
                                            <p id="location">Location:<input type="text" id={idx} value={post.location} onChange={(event) => setLocation(event.target.value)} /></p>
                                            {post.active ? '' : <h3 style={{color: '#e737a7ff'}}>POST DELETED</h3>}
                                            <div>  
                                                {   editSubmit ?
                                                    ''
                                                    :
                                                <ThemeProvider theme={theme}>
                                                    <ColorButton 
                                                        style={{marginRight: '5px'}}
                                                        variant="contained" 
                                                        color="primary"
                                                        onClick={() => {
                                                            setOpen(true);
                                                            console.log(post._id);
                                                            setId(post._id);
                                                            setClickedPost(post);
                                                            setEditSubmit(true);
                                                        }}>
                                                        Edit Post
                                                    </ColorButton> 
                                                </ThemeProvider>
                                                }
                                                { 
                                                    editSubmit ?
                                                <ThemeProvider theme={theme}>
                                                    <ColorButton 
                                                        style={{marginRight: '5px'}}
                                                        variant="contained" 
                                                        color="primary"
                                                        onClick={() => {
                                                            setOpen(false);
                                                            setEditSubmit(false);
                                                            editPost(title, description, price, location, checked, id);
                                                        }}>
                                                        Submit Edited Post
                                                    </ColorButton> 
                                                </ThemeProvider>
                                                    : ''
                                                }
                                                <Dialog className='login-modal-backdrop'
                                                    open={open} 
                                                    onClose={() => setOpen(false)}
                                                    boxShadow={3}
                                                    PaperProps={{
                                                        style: {
                                                        backgroundColor: '#589aafff',
                                                        },
                                                    }}
                                                    >
                                                    <DialogContent>
                                                        Feature Coming Soon
                                                    </DialogContent>
                                                    <DialogActions>
                                                    <ThemeProvider theme={theme}>
                                                        <ColorButton 
                                                            onClick={() => {
                                                                setOpen(false);
                                                            }} 
                                                            color="primary">
                                                            Close
                                                        </ColorButton> 
                                                    </ThemeProvider>
                                                    </DialogActions>
                                                    </Dialog>  
                                                <ThemeProvider theme={theme}>
                                                    <ColorButton  
                                                        style={{marginRight: '5px'}}
                                                        variant="contained" 
                                                        color="primary" 
                                                        onClick={() => {
                                                            console.log(post);
                                                            setClickedPost(post);
                                                            deletePost(post._id);
                                                            alert("Post Deleted!");
                                                            setAdd(Math.random() * 5);
                                                        }}>
                                                        Delete Post
                                                    </ColorButton> 
                                                </ThemeProvider>
                                                <ThemeProvider theme={theme}>
                                                    <ColorButton 
                                                        color="secondary" 
                                                        onClick={() => {
                                                            setMessageOpen(true);
                                                       
                                                        }}>
                                                    <Badge 
                                                        badgeContent={post.messages.length} 
                                                        color="primary" 
                                                        onClick={() => setClickedPost(post)}>
                                                        <MailIcon
                                                            color="#722880ff" />
                                                    </Badge>
                                                    </ColorButton> 
                                                </ThemeProvider>
                                                <Dialog 
                                                    className='login-modal-backdrop'
                                                    open={messageOpen} 
                                                    onClose={() => setMessageOpen(false)}
                                                    boxShadow={3}
                                                    PaperProps={{
                                                        style: {
                                                        backgroundColor: '#589aafff',
                                                        },
                                                    }}
                                                    >
                                                    <DialogContent>
                                                                {clickedPost.length != 0 ? clickedPost.messages.map((message) => {
                                                                    return (
                                                                    <>
                                                                    <div>From: {message.fromUser.username}</div>
                                                                    <div>Message: {message.content}</div>
                                                                    <div>Time: {clickedPost.updatedAt}</div>
                                                                    <hr/>
                                                                    </>  
                                                                    ) 
                                                                }): ''}
                                                    </DialogContent>
                                                    <DialogActions>
                                                <ThemeProvider theme={theme}>
                                                        <ColorButton  
                                                            onClick={() => {
                                                                setMessageOpen(false);   
                                                            }} 
                                                            color="primary">
                                                            Close
                                                        </ColorButton> 
                                                </ThemeProvider>
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
            <TabPanel 
                value={value} 
                index={1}
                >
                {
                <div className='gridbox'>

                {   msg ?
                    
                        <>
                            <div>
                                <h1 className='post-title'>{clickedPost.title}</h1> 
                                <h3 className='post-description'>{clickedPost.description}</h3> 
                                <h3 className='post-price'>Price: {clickedPost.price}</h3> 
                                <h3 className='post-author'>Seller: {clickedPost.author.username}</h3> 
                                <h3 className='post-location'>Location:{clickedPost.location}</h3>
                                <TextField
                                    autoFocus
                                    id="Message"
                                    label="Message"
                                    type="text"
                                    fullWidth
                                    value={message}
                                    onChange={(event) => {
                                        setMessage(event.target.value);
                                    }}
                                    
                                />
                                <ThemeProvider theme={theme}>
                                    <ColorButton 
                                        onClick={() => {
                                            sendMessage(id, message);
                                            alert("Message Sent!");
                                            setMsg(false);
                                        }} 
                                        color="primary">
                                        Send
                                    </ColorButton> 
                                </ThemeProvider> 
                                <div>      
                                    { 
                                        msg ?
                                            ''
                                        : <ThemeProvider theme={theme}>
                                                <ColorButton 
                                                variant="contained" 
                                                color="primary" 
                                                onClick={() => {
                                                    setId(post._id); 
                                                    setMsg(true); 
                                                    setClickedPost(post);
                                                    
                                                }}>
                                                Send Message
                                                </ColorButton> 
                                        </ThemeProvider> 
                                    }
                                    <hr />     
                                </div>
                            </div>
                        </>
 
                    : strangersPosts.filter((post) => {
                                if (searchTerm == '') {
                                    return post
                                } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    
                                    console.log(post);
                                    return post
                                }
                    }).map((post, idx) => {
                            return (
                                <>
                                    <div key={idx}>
                                        <h1 className='post-title'>{post.title}</h1> 
                                        <h3 className='post-description'>{post.description}</h3> 
                                        <h3 className='post-price'>Price: {post.price}</h3> 
                                        <h3 className='post-author'>Seller: {post.author.username}</h3> 
                                        <h3 className='post-location'>Location:{post.location}</h3>
                                        <div>      
                                            { 
                                                msg ?
                                                    ''
                                                : <ThemeProvider theme={theme}>
                                                    <ColorButton  
                                                        variant="contained" 
                                                        color="primary" 
                                                        onClick={() => {
                                                            setId(post._id); 
                                                            setMsg(true); 
                                                            setClickedPost(post);
                                                            
                                                        }}>
                                                        Send Message
                                                    </ColorButton> 
                                                </ThemeProvider> 
                                            }
                                            <hr />     
                                        </div>
                                    </div>
                                </>
                            )
                    })
                }
                </div> 
                }</TabPanel>
            </Container>
        </>
    )
}

export default MyPosts;