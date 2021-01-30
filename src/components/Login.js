import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './login.css';

const Login = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className="login-container">
            <Button 
                variant="outlined" 
                color="primary" 
                onClick={handleClickOpen}>
                Test Login Modal
            </Button>
            <Dialog className='login-modal-backdrop'
                open={open} 
                onClose={handleClose}
                PaperProps={{
                    style: {
                    backgroundColor: '#ef1a56ff',
                    boxShadow: 'none',
                    },
                }}>
            <DialogTitle id="login-modal-title">Sign In</DialogTitle>
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
            />
            <TextField
                id="Password"
                label="Password"
                type="text"
                fullWidth
            />
            </DialogContent>
            <DialogActions>
                <Button 
                    onClick={handleClose} 
                    color="primary">
                    Cancel
                </Button>
                <Button 
                    onClick={handleClose} 
                    color="primary">
                    Login
                </Button>
            </DialogActions>
            </Dialog>
        </div>
    )
}

export default Login;
