import {useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import UserPosts from './UserPosts.js'
import { shadows } from '@material-ui/system';{/*can i use this to set box shadows on modals? */}
import './multimodal.css';


const Multimodal = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="multimodal">      
            <Dialog className='multimodal-backdrop'
                open={open} 
                onClose={handleClose}
                PaperProps={{
                    style: {
                    backgroundColor:  '#2eb0dcff',
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
                    <UserPosts />
                </DialogContentText>
            
            </DialogContent>
            <DialogActions>

            </DialogActions>
            </Dialog>       
        </div>
    )
}
export default Multimodal;