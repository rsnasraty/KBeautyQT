import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import "./navbar.css"
import {Route} from "react-router-dom"
import {Home} from "../pages/home"
import { useHistory } from "react-router-dom";

export const Navbar = () => (

  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

<Navigation
        activeItemId="../pages/home.js"
        onSelect={({ itemId }) => { history.pushState(Home)>
          <Home />
        </Route>
        }}
        items={[
          {
            title: "Home",
            itemId: "/home",
            elemBefore: () => <FaHome />,
          },
          {
            title: "Favorites",
            itemId: "/favorites",
            elemBefore: () => <FaHeart />,
          },
          {
            title: "Products",
            itemId: "/products",
            elemBefore: () => <FaShoppingBag />,
          },
        ]}
      />

)