import { CollectionCard } from "../../components/CollectionCard/CollectionCard";
import Headline from "../../components/Headline/Headline";
import DATA from "../../DATA";
import "./Trending.css";

export default function Trending() {
  return (
    <section className="trending_section">
      <Headline
        title="Trending Collections"
        subtitle="Checkout our weekly updated trending collection."
      />
      <div className="collection_cards_container">
        {[1, 2, 3].map((item) => {
          const userKey = `user_${item}` as keyof typeof DATA; // Assert the type of the key
          console.log(DATA[userKey].username);
          return (
            <CollectionCard
              key={item}
              username={DATA[userKey].username}
              avatar={DATA[userKey].avatar}
              photo_1={DATA[userKey].photo_1}
              photo_2={DATA[userKey].photo_2}
              photo_3={DATA[userKey].photo_3}
            />
          );
        })}
      </div>
    </section>
  );
}
