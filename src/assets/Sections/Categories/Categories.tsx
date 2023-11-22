import { CategoryCard } from "../../components/CategoryCard/CategoryCard";
import Headline from "../../components/Headline/Headline";
import "./Categories.css";
import DATA from "../../CategoriesData";

export default function Categories() {
  return (
    <section className="categories_section">
      <Headline title="Browse Categories" />
      <div className="categories_cards_container">
        {[
          "art",
          "collectibles",
          "music",
          "photography",
          "video",
          "utility",
          "sport",
          "virtualworld",
        ].map((item) => {
          const userKey = `${item}` as keyof typeof DATA;
          return (
            <CategoryCard
              art_bg={DATA[userKey].background}
              art_over={DATA[userKey].over}
              title={DATA[userKey].title}
            />
          );
        })}
      </div>
    </section>
  );
}
