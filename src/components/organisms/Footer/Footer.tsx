import "./Footer.scss";
import logoWhite from "@/assets/images/logo/logo-white.svg";

const Footer = () => {
  return (
    <footer>
      <div className="custom-grid footer-container">
        <div className="footer-container__left">
          <img src={logoWhite} alt="rimac-logo" />
        </div>
        <hr />
        <div className="footer-container__right">
          © 2023 RIMAC Seguros y Reaseguros.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
