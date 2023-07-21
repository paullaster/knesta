import { MdFacebook} from "react-icons/md";
import { PiYoutubeLogoFill, PiTwitterLogoFill, PiLinkedinLogoFill} from "react-icons/pi";
import { Link} from "react-router-dom";
  
const Footer = () => {
  return (
    <footer>
      <div className="links">
        <div className="about">
          <div className="desc">
          Knesta is a start-up business engagement that supports SMEs in
          Business development by offering a wide range of services since 2019.
          </div>
          <div className="social">
              <span>
                <MdFacebook size={20} />
              </span>
              <span>
                <PiTwitterLogoFill size={20} />
              </span>
              <span>
                <PiYoutubeLogoFill size={20} />
              </span>
              <span>
                <PiLinkedinLogoFill size={20} />
              </span>
          </div>
        </div>
        <div className="quick-links">
          <Link>about</Link>
          <Link>contacts</Link>
          <Link>career</Link>
          <Link>terms</Link>
        </div>
      </div>
      <div className="copyright">
        <span>All rights reserved knesta&copy;2023</span>
      </div>
    </footer>
  )
}

export default Footer