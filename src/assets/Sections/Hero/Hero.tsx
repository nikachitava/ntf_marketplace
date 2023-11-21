import Button from "../../components/Button/Button";
import nft_card_photo from "../../../../public/images/nft_for_hero_section_card.svg";
import hero_nft_author from "../../../../public/images/hero_nft_author.svg";
import { FaRocket } from "react-icons/fa6";
import "./Hero.css";

export default function Hero() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <section className="hero_section">
      <div className="description">
        <h1>
          Discover
          <br /> digital art &<br /> Collect NFTs
        </h1>
        <p className="subtitle">
          NFT marketplace UI created with Anima for
          <br /> Figma. Collect, buy and sell art from more
          <br /> than 20k NFT artists.
        </p>
        <div>
          <Button
            icon={<FaRocket color="white" size={20} />}
            label="Get Started"
            fill
            color="white"
            onClick={handleClick}
          />
        </div>
        <div className="user_preview">
          <div className="details">
            <h4>240K +</h4>
            <p>Total Sales</p>
          </div>
          <div className="details">
            <h4>100K +</h4>
            <p>Auctions</p>
          </div>
          <div className="details">
            <h4>240K +</h4>
            <p>Artists</p>
          </div>
        </div>
      </div>
      <div className="hero_nft_card">
        <div className="hero_card">
          <img src={nft_card_photo} alt="nft_card_photo" />
          <div className="hero_nft_card_author_container">
            <h5>Space Walking</h5>
            <div className="nft_author">
              <img src={hero_nft_author} alt="hero_nft_author" />
              <span>Animakid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
