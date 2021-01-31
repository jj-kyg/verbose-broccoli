import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { shadows } from '@material-ui/system';{/*can i use this to set box shadows on modals? */}
import './multimodal.css';
const Multimodal = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className="multimodal">      
            <Button 
                variant="outlined" 
                color="primary" 
                onClick={handleClickOpen}>
                open multiModal
            </Button>
            <Dialog className='multimodal-backdrop'
                open={open} 
                onClose={handleClose}
                PaperProps={{
                    style: {
                    backgroundColor: '#ef1a56ff',
                    boxShadow: '5px, solid, green',
                    },
                }}
                >
            <DialogTitle 
                id="multimodal-title"
            >
                multimodal
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Posts or messages would be here
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
export default Multimodal;