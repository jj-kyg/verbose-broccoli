import AddIcon from '@material-ui/icons/Add';
import { Checkbox, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel } from '@material-ui/core';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import './createPost.css';
import { useState, useEffect } from 'react';
import { getToken } from '../auth'
import { createNewPost } from '../api';


const CreatePost = ({
    username
}) => {

    const [userInfo, setUserInfo] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(false);

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

    const ColorButton = withStyles((theme) => ({
        root: {
          fontFamily: [
            'Courier New', 'Courier', 'monospace'
          ].join(','),
        },
      }))(Button);


    const classes = useStyles();

    useEffect(() => {
        const token = getToken();
        fetch('https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/users/me', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        }).then(response => response.json())
        .then(result => {
            console.log(result);
            setUserInfo(result)
        })
        .catch(console.error);
    },[])

    return (
        <>
            <div className='username'>
                Welcome {username}!
            </div>
            <div className="login-container">
                <ThemeProvider theme={theme}>
                    <ColorButton variant="contained" 
                        color="primary" 
                        className={classes.margin}
                        onClick={() => setOpen(true)}>
                        <AddIcon />  Add New Post
                    </ColorButton>
                </ThemeProvider>      
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
                <DialogTitle 
                    id="login-modal-title"
                >
                    Add Post
                </DialogTitle>
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
                        onClick={() => setOpen(false)} 
                        color="primary">
                        Cancel
                    </Button>
                    <Button 
                        onClick={() => {
                            setOpen(false);
                            createNewPost(title, description, price, location, checked);
                        }} 
                        color="primary">
                        Create
                    </Button>
                </DialogActions>
                </Dialog>       
            </div>
        </>
    )
}

export default CreatePost;