import nft_logo from "/images/nft_logo.svg";
import Button from "../Button/Button";
import "./Navigation.css";
import { LuUser2 } from "react-icons/lu";

export default function Navigation() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="navigation_container">
      <div className="logo">
        <img src={nft_logo} alt="logo" />
      </div>
      <div className="menu">
        <ul>
          <li>Marketplace</li>
          <li>Rankings</li>
          <li>Connect a wallet</li>
          <li>
            <Button
              icon={<LuUser2 size={20} />}
              label="Sign Up"
              fill
              color="white"
              onClick={handleClick}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
