import './messages.css';
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const Messages = () => {

    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch(`https://strangers-things.herokuapp.com/api/2010-LSU-RM-WEB-PT/posts`)
            .then(response => response.json())
            .then(result => {
            const messages = result.data.messages;
            console.log(messages);
            setMessages(messages);
            })
            .catch(console.error);
    }, []);

    return (
        <>
            <div>
                <h1 className='message-title'>Message Title</h1>
                <h3 className='message-body'>Message Body</h3>
                <h3 className='message-author'>Author: </h3>
                {/* {message.author} */}
                {/* {message.body} */}
                {/* {message.title} */}
                <Button 
                    variant="outlined" 
                    color="primary" 
                    onClick={() => setOpen(true)}>
                    Reply
                </Button>
                   
            </div>
            
        </>        
    ) 
}
export default Messages;