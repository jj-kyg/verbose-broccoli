import './Search.css';

const Search = () => {
    return (
        <div className="search">
            <form id="search">
                <fieldset>
                    <input className="no-outline" type="text" placeholder="Search Stranger's Things..."  />
                    <button id="go">GO</button>
                </fieldset>
            </form>
        </div>
    );
}

export default Search;