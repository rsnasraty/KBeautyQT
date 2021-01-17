import "./home.css";
import React from "react";
import { Navbar} from "../components/navbar"

export const Home = () => (
    <>
     <Navbar />
    <div className="home_header">
    <div className="home">
        <div className="box box1"></div>
        <div className="box wishlist"></div>
        <div className="box reviews"></div>
        <div className="box inventory"></div>
        <div className="box routine"></div>
    </div>
    </div>
    </>
);

