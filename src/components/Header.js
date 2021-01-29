import './header.css';

const Header = () => {
    return (
        <div className="main-layout">
            <header className="header-items">
                <div className="img">
                    <img id="img" src="images/Logo-ST.png" alt="Logo"/>
                </div>
                <div className="links">
                    <h2 id="login">Log In</h2>
                    <h2 id="signup">Sign Up</h2>
                </div>
            </header>
        </div>
    );
}

export default Header;