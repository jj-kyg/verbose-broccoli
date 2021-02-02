import { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { shadows } from '@material-ui/system';{/*can i use this to set box shadows on modals? */}
import './login.css';

const Login = ({
    setLoggedIn,
    loginUser
}) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    return (
        <div className="login-container">      
            <Button 
                variant="outlined" 
                color="primary" 
                onClick={() => setOpen(true)}>
                Login
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
                onChange={(event) => setPasswordValue(event.target.passwordValue)}
                
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
                        setLoggedIn(true);
                        loginUser(value, passwordValue);
                    }} 
                    color="primary">
                    <Link to="/loggedin">Login</Link>
                </Button>
            </DialogActions>
            </Dialog>       
        </div>
    )
}
export default Login;
