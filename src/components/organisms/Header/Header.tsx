import logo from "@/assets/images/logo/rimac-logo.svg";
import phone from "@/assets/images/icons/telephone.svg";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="header custom-grid">
      <div className="header__left">
        <img src={logo} alt="logo rimac" />
      </div>
      <div className="header__right">
        <div className="header__right__buy font__semi">
          ¡Compra por este medio!
        </div>
        <div className="header__right__phone font__bold">
          <span className="header__right__phone__icon">
            <img src={phone} alt="telefono" />
          </span>
          (01) 411 6001
        </div>
      </div>
    </nav>
  );
};

export default Header;
