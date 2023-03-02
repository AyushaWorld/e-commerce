import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <React.Fragment>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <h2 className="navbar-brand" href="#">E-Commerce</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/">
                            <a className="nav-link active" aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products">
                            <a className="nav-link">Products</a>
                            </Link>
                        </li>
                        <li className="nav-item" onClick={e=>alert("Thank You! for intrest comming soon...")}>
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Header;   