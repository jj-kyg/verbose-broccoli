import { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './login.css';
import { clearToken } from '../auth';

const SignOut = ({
    setLoggedIn,
    setCurrentUser
}) => {

    return (
        <div className="sign-up-container">
            <Button 
                variant="outlined" 
                color="primary" 
                onClick={() => {
                    setLoggedIn(false);
                    clearToken();
                    setCurrentUser('');
                }}>
                <Link to="/">Sign Out</Link>
            </Button>
        </div>
    )
}

export default SignOut;