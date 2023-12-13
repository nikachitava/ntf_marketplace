import "./WalletCard.css";

interface IWalletCardProps {
  logo: string;
  name: string;
}

export const WalletCard: React.FC<IWalletCardProps> = ({ logo, name }) => {
  return (
    <div className="wallet_card_container">
      <img src={logo} alt="meta_mask" />
      <span className="wallet_name">{name}</span>
    </div>
  );
};
