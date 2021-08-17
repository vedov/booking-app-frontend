import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Toggle } from "./toggle-panel-actions";
import { NavLink } from "react-router-dom";
import useMediaQuery from "../../useMediaQuery";

const PanelNavigation = (props) => {
  const [hamburger, setHamburger] = useState(false);

  const dispatch = useDispatch();
  const mobile = useMediaQuery("(max-width: 768px)");
  let togglePanel = useSelector((state) => state.togglePanel);
  const { show } = togglePanel;
  return (
    <>
      {mobile ? (
        <div className="panel-navigation panel-navigation-mobile">
          <div
            className={hamburger ? "hamburger-open" : "hamburger-closed"}
            onClick={() => setHamburger(!hamburger)}
          >
            <div className="closed">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
          <div
            className={
              hamburger ? "hamburger-content-shown" : "hamburger-content-hidden"
            }
          >
            {/* <NavLink to="/">
              <img className="logo" alt="Logo" src={navbarLogo}></img>
            </NavLink> */}
            <ul>
              {props.data &&
                props.data.map((entry) => {
                  return (
                    <li>
                      <NavLink activeClassName="active" to={entry.uri}>
                        <img alt="" src={entry.image}></img>
                        <span>{entry.title}</span>
                      </NavLink>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      ) : (
        <div
          className={
            show
              ? "panel-navigation"
              : "panel-navigation panel-navigation-closed"
          }
        >
          {/* <NavLink to="/">
            <img className="logo" alt="Logo" src={navbarLogo}></img>
          </NavLink> */}
          <ul>
            {props.data &&
              props.data.map((entry) => {
                return (
                  <li>
                    <NavLink activeClassName="active" to={entry.uri}>
                      <img alt="" src={entry.image}></img>
                      <span>{entry.title}</span>
                    </NavLink>
                  </li>
                );
              })}
          </ul>
          {mobile ? null : (
            <div className="toggler">
              <div
                className={show ? "toggle-button open" : "toggle-button closed"}
                onClick={() => dispatch(Toggle(show))}
              >
                <span className="circle"></span>
              </div>
              {show && <span className="text">Toggle sidebar</span>}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PanelNavigation;
