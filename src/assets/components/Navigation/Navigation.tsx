import nft_logo from "/images/nft_logo.svg";
import Button from "../Button/Button";
import "./Navigation.css";
import { LuUser2 } from "react-icons/lu";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navigation() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="navigation_container">
      <div className="logo">
        <Link to={"/"}>
          <img src={nft_logo} alt="logo" />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to={"marketplace"}>Marketplace</Link>
          </li>
          <li>
            <Link to={"rankings"}>Rankings</Link>
          </li>
          <li>
            <Link to={"connectwallet"}>connect a wallet</Link>
          </li>
          <li>
            <Link to={"singup"}>
              <Button
                icon={<LuUser2 size={20} />}
                label="Sign Up"
                fill
                color="white"
                onClick={handleClick}
              />
            </Link>
          </li>
        </ul>
        <div className="hamburger_menu">
          <RiMenu2Line size={24} color={"white"} />
        </div>
      </div>
    </div>
  );
}
