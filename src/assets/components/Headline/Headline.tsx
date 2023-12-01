import "./Headline.css";

interface IHeaderProps {
  title: string;
  subtitle?: string;
}

const Headline: React.FC<IHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="headline">
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default Headline;
