import Button from "../../components/Button/Button";
import { CountdownTimer } from "../../components/CountdownTimer/CountdownTimer";
import "./MagicMashroom.css";
import { IoEyeSharp } from "react-icons/io5";

const MagicMashroom: React.FC = () => {
  const onClick = () => {
    console.log("clicked button");
  };
  return (
    <section className="magic_mashroom_section">
      <div className="magic_mashroom_inner_container">
        <div>
          <div className="mashroom_author_container">
            <img src="images/magic_mashroom_author.svg" alt="mashroom" />
            <span className="mashroom_author">Shroomie</span>
          </div>
          <h1>Magic Mashroom</h1>
          <Button
            icon={<IoEyeSharp />}
            label="See NFT"
            fill
            color="white"
            onClick={onClick}
          />
        </div>
        <CountdownTimer hours={20} minutes={0} seconds={0} />
      </div>
    </section>
  );
};

export default MagicMashroom;
