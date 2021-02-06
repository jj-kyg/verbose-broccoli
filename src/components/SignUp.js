import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import './login.css';

const SignUp = ({
    registerUser
}) => {

    const [value, setValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [open, setOpen] = useState(false);

    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
    }));

    const ColorButton = withStyles((theme) => ({
        root: {
          fontFamily: [
            'Courier New', 'Courier', 'monospace'
          ].join(','),
        },
      }))(Button);

    const theme = createMuiTheme({
        palette: {
          primary: purple,
        },
        secondary: {
            main: '#80d8ff',
          },
      });


    const classes = useStyles();

    return (
        <div className="sign-up-container">
            <ThemeProvider theme={theme}>
                <ColorButton variant="contained" 
                    color="primary" 
                    className={classes.margin}
                    onClick={() => setOpen(true)}>
                    Sign Up
                </ColorButton>
            </ThemeProvider> 
            <Dialog className='sign-up-modal-backdrop'
                open={open} 
                onClose={() => setOpen(false)}
                PaperProps={{
                    style: {
                    backgroundColor: '#ef1a56ff',
                    boxShadow: 'none',
                    },
                }}>
            <DialogTitle id="sign-up-modal-title">Sign Up</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please enter your information
                </DialogContentText>
            <TextField
                autoFocus
                id="Username"
                label="Desired Username"
                type="text"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                fullWidth
            />
            <TextField
                id="Password"
                label="Desired Password"
                type="text"
                fullWidth
                value={passwordValue}
                onChange={(event) => setPasswordValue(event.target.value)}
                
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
                        registerUser(value, passwordValue);
                    }} 
                    color="primary">
                    <Link to="/">Sign Up</Link>
                </Button>
            </DialogActions>
            </Dialog>
        </div>
    )
}

export default SignUp;