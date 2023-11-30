import "./Subscribe.css";
import { MdOutlineEmail } from "react-icons/md";

export default function Subscribe() {
  return (
    <div className="container">
      <section className="subscribe_section subscribe_container">
        <img src="images/subscribe_img.svg" alt="subscribe_img" />
        <div className="subscribe_box">
          <h3>
            Join Our Weekly
            <br /> Digest
          </h3>
          <p>
            Get exclusive promotions & updates
            <br /> straight to your inbox.
          </p>
          <div className="subscribe">
            <input
              type="text"
              placeholder="Enter your email here"
              className="subscribe_input"
            />
            <div className="subscribe_button">
              <MdOutlineEmail />
              Subscribe
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
