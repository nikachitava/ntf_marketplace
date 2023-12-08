import Button from "../../components/Button/Button";
import Headline from "../../components/Headline/Headline";
import { FaRocket } from "react-icons/fa6";
import "./Creatos.css";
import { TopCreatorCard } from "../../components/TopCreatorCard/TopCreatorCard";
import DATA from "../../TopCreatorsData";

export default function Creators() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="container">
      <section className="creators_section">
        <div className="creator_header">
          <div>
            <Headline
              title="Top Creators"
              subtitle="Checkout Top Rated Creators on the NFT Marketplace"
            />
          </div>
          <div className="button_container">
            <Button
              icon={<FaRocket color="#a259ff" size={20} />}
              label="View Rankings"
              fill={false}
              color="white"
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="creators_cards_container">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
            const userKey = `user_${item}` as keyof typeof DATA;
            return (
              <TopCreatorCard
                key={item}
                id={DATA[userKey].id}
                avatar={DATA[userKey].avatar}
                name={DATA[userKey].name}
                sales={DATA[userKey].sales}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
