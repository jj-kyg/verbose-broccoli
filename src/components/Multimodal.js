import { useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
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