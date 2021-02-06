import './messages.css';
import { useState, useEffect } from 'react';


const Messages = () => {

    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`${BASE}/users/me`)
            .then(response => response.json())
            .then(result => {
            const messages = result.data.messages;
            console.log(posts);
            setPosts(posts);
            })
            .catch(console.error);
    }, []);
}
    