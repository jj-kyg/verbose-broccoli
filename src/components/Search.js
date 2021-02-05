import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';


const Search = () => {

  const [value, setValue] = useState('');

    return (
        <div className="search">
          <div id="search-group">
            <Grid 
                  container 
                  spacing={1} 
              >
              <div id="search-icon">
                <Grid item>
                  <SearchIcon />
                </Grid>
              </div>
                <Grid item>
                  <TextField 
                      id="search-entry" 
                      defaultValue="Search Posts"
                      label="Search Posts"
                      placeholder="Search Posts..."
                      variant="standard" 
                      color="#f9f2f0ff"
                     
                      value={value}
                      onChange={(event) => setValue(event.target.value)} 
                      
                  />
                </Grid>
              </Grid>
          </div>
          {console.log(value)}
        </div>
    )
}
export default Search;