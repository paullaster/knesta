import { useState, useEffect } from "react";
import { MdFormatQuote } from "react-icons/md";
import { Services } from "../../../helpers";
import { Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const HeaderIntroduction = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [limitedText, setLimitedText] = useState('');

  useEffect(() => {
    // Setting backgroundImage
    const header = document.getElementById("header");
    header.style.backgroundImage = `linear-gradient(to bottom, rgba(36, 70, 165, 0.8), rgba(151, 26, 255, .8)), url(${Services[currentIndex].img})`;
    header.style.backgroundSize = "contain";
    header.style.backgroundPosition = "center";
    header.style.transition = 'backgroundImage 1s ease-in-out';



    // Getting screen size
    const serviceText = Services[currentIndex].text;
    const isSmallScreen = window.matchMedia('(max-width: 999px)').matches;
    const charLimit = isSmallScreen ? 100 : serviceText.length;
    const limitedText = limitTextToCharacters(serviceText, charLimit);
    setLimitedText(limitedText);




    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % Services.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);


  const limitTextToCharacters = (text, charLimit) => {
    if (text.length <= charLimit) {
      return text;
    }

    return text.substring(0, charLimit) + '...';
  };

  return (
    <div className={"header-introduction"}>
      {Services[currentIndex].id === "0" ? (
        <h1>
          <MdFormatQuote size={30} className="superscript" />
          <span className="mr-2 ml-2">YOUR</span>
          <strong>SME</strong>,<span className="mr-2">OUR STRENGTH</span>
          <MdFormatQuote size={30} className="superscript" />
        </h1>
      ) : (
        <div
          className="services
                       "
        >
          <div>
            <h4>{Services[currentIndex].tag}</h4>
            <p>{limitedText}</p>
            <Link to={"#"}>Learn more</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderIntroduction;

