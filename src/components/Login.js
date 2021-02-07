import { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import './login.css';
import { loginUser } from '../api';
import { getToken } from '../auth';

const Login = ({
    setLoggedIn,
    setUsername,
}) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
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
    const classes = useStyles();
    return (
        <div className="login-container">
            <ThemeProvider theme={theme}>
                <ColorButton variant="contained" 
                    color="primary" 
                    className={classes.margin}
                    onClick={() => setOpen(true)}>
                    Login
                </ColorButton>
            </ThemeProvider>      
            <Dialog className='login-modal-backdrop'
                open={open} 
                onClose={() => setOpen(false)}
                boxShadow={3}
                PaperProps={{
                    style: {
                    backgroundColor: '#589aafff',
                    color: '#f6e8a2ff'
                    },
                }}
                >
            <DialogTitle 
                id="login-modal-title"
            >
                Sign In
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please enter your Username and Password
                </DialogContentText>
            <TextField
                autoFocus
                id="Username"
                label="Username"
                type="text"
                fullWidth
                value={value}
                onChange={(event) => setValue(event.target.value)}
                
            />
            <TextField
                id="Password"
                label="Password"
                type="password"
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
                    onClick={async () => {
                        
                        setOpen(false);
                        loginUser(value, passwordValue);
                        setTimeout(() => {
                            let token = '';
                            token = getToken();
                            token ? setUsername(value) : '';
                            token ? setLoggedIn(true) : setLoggedIn(false);
                            console.log(token);
                        }, 1200);   
                    }} 
                    color="primary">
                    Login
                </Button>
            </DialogActions>
            </Dialog>       
        </div>
    )
}

export default Login;
