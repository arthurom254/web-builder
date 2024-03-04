import { Link } from 'react-router-dom';
import './Navbar.css';

export default function NavBar() {
    return (
        <>
            <section className="topnav">
                <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark px-3">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src='https://picsum.photos/300/300'alt="atom logo" width={30} height={24} className="d-inline-block align-text-top" />
                            <span className="mx-2">Builder</span>
                        </Link>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto">
                                
                                <a className="nav-link" href="#" title="undo" data-bs-toggle="tooltip" role="button">{localStorage.getItem('workspacename')}</a>
                                {/* <a className="nav-link" href="#" title="downlooad" data-bs-toggle="tooltip" role="button">Bad</a> */}
                                {/* <a className="nav-link" href="#">Login</a> */}
                            </div>
                        </div>
                    </div>
                </nav>
            </section>


        </>
    );
}