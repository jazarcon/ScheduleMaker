import { useState } from "react";
import Availability from "../components/availability";
import Header from "../components/header.js";
import NavBar from "../components/navBar.js";


function Employee() {
    // Page for filling out availability


    return (
        <div>           
            <div className="main">
                <p>availability</p>
                <Availability />
                    
            </div>
        </div>
    );
}

export default Employee;