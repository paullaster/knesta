import { useReducer } from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { MdDensityMedium, MdClear } from "react-icons/md";
import StateReducer from "../store/StateReducer";

const Navigation = () => {
  const [state, dispatcher] = useReducer(StateReducer, {
    toggleMenuOnMobileView: false
  });

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      // setActiveId(id);
    }
  };

  const handleTogglingMobileView = (e) => {
    e.stopPropagation();
    dispatcher({
      type: "SHOW_MENU_ON_MOBILE_VIEW"
    });
  };

  return (
    <nav className="nav">
      <Logo />
      <div
        className="toggle-menu-for-mobile"
      >
        {state.toggleMenuOnMobileView ? (
          <MdClear size={25} onClick={handleTogglingMobileView} />
        ) : (
          <MdDensityMedium size={25} onClick={handleTogglingMobileView} />
        )}
      </div>
      <ul className={state.toggleMenuOnMobileView ? "show-menu" : ""}>
        <li>
          <a href={"/#"}>knesta</a>
        </li>
        <li>
          <NavLink
            onClick={() => handleScroll("marketresearch")}
            to={"#marketresearch"}
          >
            market research
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => handleScroll("riskanalysis")}
            to={"#riskanalysis"}
          >
            risk analysis
          </NavLink>
        </li>
        {/* <li>
          <NavLink onClick={() => handleScroll("blog")} to="#blog">
            articles
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
