import "./InfoCard.css";

interface IInfoCardProps {
  img: string;
  title: string;
  subtitle: string;
}

export const InfoCard: React.FC<IInfoCardProps> = ({
  img,
  title,
  subtitle,
}) => {
  return (
    <div className="info_card_container">
      <img src={img} alt="img" />
      <h5>{title}</h5>
      <p>{subtitle}</p>
    </div>
  );
};
