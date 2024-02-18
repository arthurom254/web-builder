// import { useState } from "react";

import SideBar from "./SideBar";
import { useState } from "react";
export default function Body() {
    return (
        <>
            <section className="main">
                <div className="row" id="main">
                    <SideBar/>
                </div>
            </section>

        </>
    );
}