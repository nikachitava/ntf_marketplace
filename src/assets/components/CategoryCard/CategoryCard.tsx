import "./CategoryCard.css";

interface ICategory {
  art_bg: string;
  art_over: string;
  title: string;
}

export const CategoryCard: React.FC<ICategory> = ({
  art_bg,
  art_over,
  title,
}) => {
  return (
    <div className="category_card_container">
      <div className="images_container">
        <img className="bg_img" src={art_bg} alt="art_bg" />
        <img className="over_img" src={art_over} alt="art_over" />
      </div>
      <div className="category_header">
        <h5 className="category_headline">{title}</h5>
      </div>
    </div>
  );
};
