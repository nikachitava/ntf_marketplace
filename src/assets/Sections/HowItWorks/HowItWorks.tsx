import Headline from "../../components/Headline/Headline";
import { InfoCard } from "../../components/InfoCard/InfoCard";
import "./HowItWorks.css";
import DATA from "../../HowItWorksData";

export default function HowItWorks() {
  return (
    <div className="container">
      <section className="howitworks_section">
        <Headline title="How It works" subtitle="Find Out How To Get Started" />
        <div className="info_cards_container">
          {[1, 2, 3].map((item) => {
            const userKey = `card_${item}` as keyof typeof DATA;
            return (
              <InfoCard
                img={DATA[userKey].img}
                title={DATA[userKey].title}
                subtitle={DATA[userKey].subtitle}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
