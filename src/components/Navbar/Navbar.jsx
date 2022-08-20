import React, { useState } from "react";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faStarAndCrescent,
  faSun,
  faBars,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";

function Navbar({ theme, settheme }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className="nav-main-container">
        <div className="logo">
          <img
            src={
              theme === "dark-theme"
                ? process.env.PUBLIC_URL + "/logo-white.png"
                : process.env.PUBLIC_URL + "/logo-black.png"
            }
            alt="hypescout"
          />
        </div>

        <div className="nav-menu-items">
          <ul>
            <li>
              <div
                className={
                  window.location.pathname === "/"
                    ? "nav-menu-item-active"
                    : null
                }
              >
                <a href="/">Dashboard</a>
              </div>
            </li>
            <li>
              <div
                className={
                  window.location.pathname === "/about"
                    ? "nav-menu-item-active"
                    : null
                }
              >
                <a href="/about">Campaign</a>
              </div>
            </li>
            <li>
              <div
                className={
                  window.location.pathname === "/hypesocial"
                    ? "nav-menu-item-active"
                    : null
                }
              >
                <a href="/hypesocial">Hypesocial</a>
              </div>
            </li>
            <li>
              <div
                className={
                  window.location.pathname === "/insights"
                    ? "nav-menu-item-active"
                    : null
                }
              >
                <a href="/insights">Insights</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="nav-right-side-items">
          <ul>
            <li>
              <button className="nav-icons-button">
                <FontAwesomeIcon
                  size="xl"
                  className="nav-icons"
                  icon={faBell}
                />
              </button>
            </li>
            <li>
              <button className="nav-icons-button" onClick={handleClick}>
                <FontAwesomeIcon
                  size="xl"
                  className="nav-icons"
                  icon={theme === "dark-theme" ? faStarAndCrescent : faSun}
                />
              </button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                style={{
                  background: "rgba(0, 0, 0, 0.75)",
                }}
                PaperProps={
                  theme === "dark-theme"
                    ? {
                        style: {
                          backgroundColor: "#17181b",
                        },
                      }
                    : {
                        style: {
                          backgroundColor: "white",
                        },
                      }
                }
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    settheme("light-theme");
                  }}
                >
                  <div className="nav-theme-toggle-menu">
                    <FontAwesomeIcon
                      className="nav-icons"
                      icon={faStarAndCrescent}
                    />
                    <p>Light</p>
                  </div>
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    handleClose();
                    settheme("dark-theme");
                  }}
                >
                  <div className="nav-theme-toggle-menu">
                    <FontAwesomeIcon className="nav-icons" icon={faSun} />
                    <p>dark</p>
                  </div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <div className="nav-theme-toggle-menu">
                    <FontAwesomeIcon className="nav-icons" icon={faDesktop} />
                    <p>system</p>
                  </div>
                </MenuItem>
              </Menu>
            </li>
            <li>
              <div className="nav-name-profile-pic">
                <p>Hi, Rakib</p>
                <img
                  className="nav-profile-pic"
                  src="https://i.pravatar.cc/300"
                  alt="Rakib"
                />
              </div>
            </li>
            <li>
              <div className="nav-hamburger-menu">
                <FontAwesomeIcon className="nav-icons" icon={faBars} />
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
