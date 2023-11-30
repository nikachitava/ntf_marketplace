import Button from "../../components/Button/Button";
import Headline from "../../components/Headline/Headline";
import { IoEyeSharp } from "react-icons/io5";
import "./Discover.css";
import DATA from "../../DiscoveryData";
import { DiscoverCard } from "../../components/DiscoverCard/DiscoverCard";

export default function Discover() {
  const handleClick = () => {
    console.log("button clicked");
  };
  return (
    <div className="container">
      <section className="discover_section">
        <div className="discover_header">
          <div>
            <Headline
              title="Discover more NFTs"
              subtitle="Explore New Trending NFTs"
            />
          </div>
          <Button
            icon={<IoEyeSharp color="#a259ff" size={20} />}
            label="See all"
            fill={false}
            color="white"
            onClick={handleClick}
          />
        </div>

        <div className="discover_cards_container">
          {[1, 2, 3].map((item) => {
            const userKey = `user_${item}` as keyof typeof DATA;
            return (
              <DiscoverCard
                key={item}
                nft_photo={DATA[userKey].nft_photo}
                avatar_photo={DATA[userKey].avatar_photo}
                nft_name={DATA[userKey].nft_name}
                author={DATA[userKey].author}
                price={DATA[userKey].price}
                highest_bid={DATA[userKey].highest_bid}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
