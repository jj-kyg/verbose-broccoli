import './footer.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { getToken } from '../auth'
import { createNewPost } from '../api';


const Footer = ({loggedIn}) => {

    const useStyles = makeStyles({
        root: {
          width: 500,
        },
    });

    const [value, setValue] = useState();
    const [userInfo, setUserInfo] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(false);

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
        <div className="footer"><span>Developed by Aaron Pollack and Justin Johnson</span></div>
    )
}

export default Footer;