import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer_lists">
        <div className="footer-column col_1">
          <img src="images/nft_logo.svg" alt="" />
          <p>
            NFT marketplace UI created
            <br /> with Anima for Figma.
          </p>
          <p>Join our community.</p>
        </div>
        <div className="footer-column col_2">
          <h2>Explore</h2>
          <p>ContMarketplace</p>
          <p>Rankings.</p>
          <p>Connect a wallet.</p>
        </div>
        <div className="footer-column col_3">
          <h2>Join our weekly digest</h2>
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
            <div className="subscribe_button">Subscribe</div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p>Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </footer>
  );
}
