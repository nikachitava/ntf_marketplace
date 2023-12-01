import "./TopCreatorCard.css";

interface ITopCreator {
  id: number;
  avatar: string;
  name: string;
  sales: string;
}

export const TopCreatorCard: React.FC<ITopCreator> = ({
  id,
  avatar,
  name,
  sales,
}) => {
  return (
    <div className="top_creator_card_container">
      <div className="avatar">
        <span className="number">{id}</span>
        <img src={avatar} alt="" />
      </div>
      <div className="creator_information">
        <h5 className="top_creator_author">{name}</h5>
        <p className="total_sales">
          Total sales: <span style={{ color: "white" }}>{sales} ETH</span>
        </p>
      </div>
    </div>
  );
};
