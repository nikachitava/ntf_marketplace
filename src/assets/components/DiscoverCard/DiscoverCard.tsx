import "./DiscoverCard.css";

interface IDiscoverProps {
  nft_photo: string;
  avatar_photo: string;
  nft_name: string;
  author: string;
  price: number;
  highest_bid: number;
}

export const DiscoverCard: React.FC<IDiscoverProps> = ({
  nft_photo,
  avatar_photo,
  nft_name,
  author,
  price,
  highest_bid,
}) => {
  return (
    <div className="discover_card_container">
      <img src={nft_photo} alt="nft_photo" />
      <div className="discover_card_description">
        <h5>{nft_name}</h5>
        <div className="discover_author">
          <img src={avatar_photo} alt="avatar_photo" />
          <span>{author}</span>
        </div>
        <div className="discover_nft_info">
          <div className="price_container">
            <p className="header">Price</p>
            <p className="price">{price} ETH</p>
          </div>
          <div className="price_container">
            <p className="header">Highest Bid</p>
            <p className="price">{highest_bid} wETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};
