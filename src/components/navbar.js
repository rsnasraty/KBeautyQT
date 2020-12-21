import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (


<Navigation
        // you can use your own router's api to get pathname
        activeItemId="/index"
        onSelect={({ itemId }) => {
          // maybe push to the route
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
        ]}
      />

)
      }