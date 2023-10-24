import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logodash from "../assets/logodash.png";
import "../styles/sidebar.css";

const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: "bx bx-home",
    to: "/Home",
    section: "",
  },
  {
    display: "Salles",
    icon: "bx bx-star",
    to: "/Room", // Use '/Room' as the 'to' prop
    section: "salles",
  },
  {
    display: "Employers",
    icon: "bx bx-calendar",
    to: "/employer",
    section: "employes",
  },
  {
    display: "User",
    icon: "bx bx-user",
    to: "/user",
    section: "user",
  },
  {
    display: "Orders",
    icon: "bx bx-receipt",
    to: "/order",
    section: "order",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  // Change active index
  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="sidebar">
      <div>
        <img src={logodash} alt="logodash" className="nav-logo-container" />
      </div>
      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: `translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)`,
          }}
        ></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={item.to}>
            {/* Use 'item.to' as the 'to' prop */}
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="sidebar__menu__item__icon">
                <i className={item.icon}></i>
              </div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
