import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from "./SideBar";
export default function Base() {
    return (
        <>
            <NavBar />
            <section className="main">
                <div className="row" id="main">
                    <SideBar />
                    <div className="col canvas">
                        <Outlet />
                    </div>
                </div>
            </section>
        </>
    );
}
