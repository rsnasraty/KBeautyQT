import "./home.css";
import React from "react";
import { Navbar} from "./navbar"

function Home() {
return (
    <div className="home_header">

    <Navbar />
    <div className="home">
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
        <div className="box box4"></div>
        <div className="box box5"></div>
    </div>
    </div>
);
}

export default Home;
