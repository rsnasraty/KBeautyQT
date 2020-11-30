import React from "react";
import { Navigation } from "react-minimal-side-navigation";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";



export const Navbar = () => (



<Navigation
        // you can use your own router's api to get pathname
        activeItemId="/management/members"
        onSelect={({ itemId }) => {
          // maybe push to the route
        }}
        items={[
          {
            title: "Home",
            itemId: "/home",
            // you can use your own custom Icon component as well
            // icon is optional
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