function NavBar(){
    return (
  <nav className="navbar navbar-expand-lg navbar bg-dark" data-bs-theme="dark">
    <a className="navbar-brand" href="#">Bad Bank of America</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <NavLink to="/CreateAccount/" className="nav-link">Create Account</NavLink>
                <NavLink to="/deposit/" className="nav-link">Deposit</NavLink>
                <NavLink to="/withdraw/" className="nav-link">Withdraw</NavLink>
                <NavLink to="/AllData/" className="nav-link">All Data</NavLink>
            </ul>
    </div>   
  </nav>
    );
  }
  