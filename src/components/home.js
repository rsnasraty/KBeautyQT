import "./home.css";
import React from "react";
import { Route } from "react-router-dom"
import { Navbar} from "./navbar"
import { ApplicationViews } from "./ApplicationViews"

export const Home = () => (
    <>
    <div className="home_header">

    <Navbar />
    <ApplicationViews />
    <div className="home">
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
        <div className="box box4"></div>
        <div className="box box5"></div>
    </div>
    </div>
    </>
);

