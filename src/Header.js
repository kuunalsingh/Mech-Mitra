import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { ShoppingBasket } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if(user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://firebasestorage.googleapis.com/v0/b/mech-mitra-38a35.appspot.com/o/WhatsApp%20Image%202021-07-17%20at%2013.50.58.jpeg?alt=media&token=acfad460-3cdb-449a-8ae9-d1d15fab6ee0"
        />
      </Link>
      <div className="header_nav">
        <Link to={!user && '/login'}>
        <div onClick={handleAuthentication} className="header_option">
          <span className="header_optionLineOne">{user ?'Hello User' : 'Hello Guest'}</span>
          <span className="header_optionLineTwo">{user ?'Sign Out' : 'Sign In'}</span>
        </div>
        </Link>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasket />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
