import { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './login.css';

const SignOut = ({
    setLoggedIn
}) => {

    return (
        <div className="sign-up-container">
            <Button 
                variant="outlined" 
                color="primary" 
                onClick={() => {
                    setLoggedIn(false);
                }}>
                <Link to="/">Sign Out</Link>
            </Button>
        </div>
    )
}

export default SignOut;