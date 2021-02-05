import { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './login.css';

const SignUp = ({
    registerUser
}) => {

    const [value, setValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [open, setOpen] = useState(false);

    return (
        <div className="sign-up-container">
            <Button 
                variant="contained" 
                color="#ef1a56ff" 
                onClick={() => {
                    setOpen(true);
                }}>
                SignUp
            </Button>
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