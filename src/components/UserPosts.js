import './UserPosts.css';
import './Search.css';
import { useState, useEffect } from 'react';
import { Grid, Button, TextField, DialogContentText, Dialog, DialogContent} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const UserPosts = ({
    loggedIn
}) => {

    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
    }));
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
        <div className="gridbox1">
                <div className='post-container-main'>
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
                                                <h1 className='post-title'>{post.title}</h1> 
                                                <h3 className='post-description'>{post.description}</h3> 
                                                <h3 className='post-price'>Price: {post.price}</h3> 
                                                <h3 className='post-author'>Seller: {post.author.username}</h3>
                                                <h3 className='post-location'>Location:{post.location}</h3> 
                                                <div>    
                                                <ThemeProvider theme={theme}>
                                                    <ColorButton 
                                                        variant="contained" 
                                                        color="primary"
                                                        onClick={() => console.log("What?")}>
                                                        Send Message
                                                    </ColorButton> 
                                                </ThemeProvider>  
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
                                                <ThemeProvider theme={theme}>
                                                    <ColorButton 
                                                        variant="contained" 
                                                        color="primary"
                                                        onClick={() => setOpen(true)}>
                                                        Send Message
                                                    </ColorButton> 
                                                </ThemeProvider>
                                                    <hr />
                                                    <Dialog
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
                                                        <DialogContentText>
                                                        Please log in to send message
                                                        </DialogContentText>
                                                    </DialogContent>
                                                <ThemeProvider theme={theme}>
                                                    <ColorButton 
                                                        onClick={() => setOpen(false)}>
                                                        Close
                                                    </ColorButton> 
                                                </ThemeProvider>

                                                    </Dialog>       
                                                </div>    
                                            </div>  
                                    }
                                </>
                            )
                    })}
                </div> 
    </div>
    </>
    );
}

export default UserPosts;