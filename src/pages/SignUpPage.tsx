import marketplace_image from "/images/marketplace_image.svg";
import "./SignUpPage.css";
import { FormInput } from "../assets/components/FormInput/FormInput";
import { LuUser } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { CiLock } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import Button from "../assets/components/Button/Button";

export default function SingUpPage() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="singup_container">
      <div className="img_container">
        <img
          src={marketplace_image}
          alt="marketplace_image"
          className="marketplace_image"
        />
      </div>
      <div className="singup_form_container">
        <h1 className="create_account_header">Create Account</h1>
        <p className="create_account_subtitle">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
        <div className="form">
          <FormInput icon={<LuUser />} placeholder={"UserName"} />
          <FormInput icon={<TfiEmail />} placeholder={"Email Address"} />
          <FormInput icon={<CiLock />} placeholder={"Password"} />
          <FormInput icon={<CiUnlock />} placeholder={"Confirm Password"} />
          <Button
            label="Create Account"
            fill
            color="white"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
