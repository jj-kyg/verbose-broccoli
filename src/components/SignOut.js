import { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import './login.css';
import { clearToken } from '../auth';

const SignOut = ({
    setLoggedIn,
    setCurrentUser,
    setRender
}) => {

    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
    }));

    const ColorButton = withStyles((theme) => ({
        root: {
          fontFamily: [
            'Courier New', 'Courier', 'monospace'
          ].join(','),
        },
      }))(Button);

    const theme = createMuiTheme({
        palette: {
          primary: purple,
        },
        secondary: {
            main: '#80d8ff',
          },
      });


    const classes = useStyles();


    return (
        <div className="sign-out-container">
            <ThemeProvider theme={theme}>
                <ColorButton variant="contained" 
                    color="primary" 
                    className={classes.margin}
                    onClick={() => {
                    setLoggedIn(false);
                    clearToken();
                    setCurrentUser('');
                    setRender(false);
                }}>
                <Link className='linkButton' to="/">Sign Out</Link>
                </ColorButton>
            </ThemeProvider> 
        </div>
    )
}

export default SignOut;