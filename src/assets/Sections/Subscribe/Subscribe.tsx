import "./Subscribe.css";
import { MdOutlineEmail } from "react-icons/md";

export default function Subscribe() {
  return (
    <div className="container">
      <section className="subscribe_section subscribe_container">
        <img
          src="images/subscribe_img.svg"
          alt="subscribe_img"
          className="subscribe_img"
        />
        <div className="subscribe_box">
          <h3>Join Our Weekly Digest</h3>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <div className="subscribe_email">
            <input
              type="text"
              placeholder="Enter your email here"
              className="subscribe_email_input"
            />
            <div className="subscribe_email_button">
              <MdOutlineEmail />
              Subscribe
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
