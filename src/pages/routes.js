import React from "react"
import { Route } from "react-router-dom"
import { Home } from "../pages/home"


export const Routes = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/product">
            </Route>
        </>
    )
}