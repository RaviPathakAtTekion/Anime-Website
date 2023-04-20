import { footerDate } from "../../assets/navItems";
import "./Footer.scss";

function Footer() {

  return (
    <footer className="footer_container">
      <h3>Anime Website 😎</h3>
      <div className="footer_inner_details">
        <p>Made By - Ravi Pathak</p>
        <p>Date - {footerDate}</p>
      </div>
    </footer>
  );
}

export default Footer;
