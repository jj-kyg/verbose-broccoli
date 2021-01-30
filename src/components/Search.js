import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const Search = () => {
    return (
        <div className="search">
        <Grid 
            container 
            spacing={1} 
        >
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField 
                id="search-entry" 
                label="Search Posts"
                defaultValue="Search Posts"
                variant="outlined" 
            />
          </Grid>
        </Grid>
      </div>
    )
}
export default Search;