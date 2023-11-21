interface ITrendingCard {
  username: string;
  avatar: string;
  photo_1: string;
  photo_2: string;
  photo_3: string;
}

import more_photo from "../../../../public/images/more_photo.svg";
import "./CollectionCard.css";

export const CollectionCard: React.FC<ITrendingCard> = ({
  username,
  avatar,
  photo_1,
  photo_2,
  photo_3,
}) => {
  return (
    <div className="trending_card_container">
      <img src={photo_1} alt="photo_1" />
      <div className="photo_wrapper">
        <img src={photo_2} alt="photo_2" />
        <img src={photo_3} alt="photo_3" />
        <img src={more_photo} alt="more_photo" />
      </div>
      <h5 style={{ color: "white", fontSize: "22px", fontWeight: 600 }}>
        DSGN Animals
      </h5>
      <div className="author">
        <img src={avatar} alt="more_photo" />
        <span>{username}</span>
      </div>
    </div>
  );
};
