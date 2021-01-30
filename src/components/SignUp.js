import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './login.css';

const SignUp = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className="sign-up-container">
            <Button 
                variant="outlined" 
                color="primary" 
                onClick={handleClickOpen}>
                Test SignUp Modal
            </Button>
            <Dialog className='sign-up-modal-backdrop'
                open={open} 
                onClose={handleClose}
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
                fullWidth
            />
            <TextField
                id="Password"
                label="Desired Password"
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

export default SignUp;