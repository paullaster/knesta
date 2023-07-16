// import { useState } from "react";
import Logo from "./Logo";
import { NavLink, } from "react-router-dom";
import { MdDensityMedium } from "react-icons/md";

const Navigation = () => {

    // const [activeId, setActiveId] = useState("");

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // setActiveId(id);
        }
    };


    return (
        <nav className="nav">
            <div>
                <Logo />
            </div>
            <ul>
                <li>
                    <a href={"/#"}>
                        knesta
                    </a>
                </li>
                <li>
                    <NavLink onClick={() => handleScroll('marketresearch')} to={"#marketresearch"}>
                        market research
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={() => handleScroll('riskanalysis')} to={"#riskanalysis"}>
                        risk analysis
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={() => handleScroll('blog')}
                    to="#blog">
                        articles
                    </NavLink>
                </li>
            </ul>
            <div>
                <MdDensityMedium />
            </div>
        </nav>
    )
}

export default Navigation