import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import "./navbar.css"

export const Navbar = () => (



<Navigation
        activeItemId="/management/members"
        onSelect={({ itemId }) => { 
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