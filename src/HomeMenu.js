import React from "react";
import "./HomeMenu.css";
import HomeMenuItem from "./HomeMenuItem";

function HomeMenu() {
  return (
    <div className="homeMenu">
      <div className="homeMenu__container">
        <HomeMenuItem
          image={
            "https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          }
          title={"Portrett"}
        />
        <HomeMenuItem
          image={
            "https://images.unsplash.com/photo-1578826990881-251096d87e59?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          }
          title={"Barn"}
        />
        <HomeMenuItem
          image={
            "https://images.unsplash.com/photo-1625706926267-ba851069d69d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          }
          title={"Par"}
        />
        <HomeMenuItem
          image={
            "https://images.unsplash.com/photo-1517174228281-88bc12c11758?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          }
          title={"Familie"}
        />
        <HomeMenuItem
          image={
            "https://images.unsplash.com/photo-1508435234994-67cfd7690508?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          }
          title={"Bryllup"}
        />
        <HomeMenuItem
          image={
            "https://images.unsplash.com/photo-1622736109626-68d10c4aaf10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          }
          title={"Gravid"}
        />
      </div>
    </div>
  );
}

export default HomeMenu;
