import logo from '../logo.jpg';
export default function NavBar() {
    return (
        <>
            <section className="topnav">
                <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark px-3 mb-1">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="atom logo" width={30} height={24} className="d-inline-block align-text-top" />
                            Builder
                        </a>
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button> */}
                        {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto">
                                <a className="nav-link" href="#" title="undo" data-bs-toggle="tooltip" role="button"><ion-icon name="arrow-undo-circle-outline" /></a>
                                <a className="nav-link" href="#" title="redo" data-bs-toggle="tooltip" role="button"><ion-icon name="arrow-redo-circle-outline" /></a>
                                <a className="nav-link" href="#" title="downlooad" data-bs-toggle="tooltip" role="button"><ion-icon name="cloud-download-outline" /></a>
                                <a className="nav-link" href="#">Login</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>


        </>
    );
}