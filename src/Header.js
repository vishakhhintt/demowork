import React from 'react';

const Header = props => {
    return (
        <>

            <header className={" fixed-top"}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">

                        <a className="navbar-brand d-lg-none" href="#">Navbar</a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-between" id="navbarToggle">

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link " href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Diet Plans</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">Select your plans</a>
                                </li>
                            </ul>



                            <a className="nav-logo navbar-brand d-none d-lg-block" href="#">
                                <img src={window.location.origin + "/assets/images/logo-new.png"} className="logo" alt="LOGO" width="80" />
                            </a>



                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sign In</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Register</a>
                                </li>

                            </ul>
                        </div>
                    </nav>

                </div>

            </header>
        </>
    )
}
export default Header;