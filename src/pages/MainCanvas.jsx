// import { useState } from "react";
// import ActionBar from "../components/ActionBar";
import HomeCanvas from "../components/HomeCanvas";
import SideBar from "../components/SideBar";
// import { useState } from "react";
export default function Body() {
    // const [page, setPage]=useState(false);
    return (
        <>
            <section className="main">
                <div className="row" id="main">
                    {/* Sidebar 1 */}
                    <SideBar/>
                    {/* Sidebar 1 end */}
                    {/* Sidebar 2 -- action bar*/}
                    {/* <ActionBar/> */}
                    {/* <ActionBar/> */}
                    {/* Sidebar2 end */}
                    {/* My html rendering canvas */}
                    <div className="col canvas">
                        <HomeCanvas/>
                    </div>
                    {/* End of my html rendering canvas */}
                </div>
            </section>

        </>
    );
}