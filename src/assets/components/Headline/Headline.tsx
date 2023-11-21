interface IHeaderProps {
  title: string;
  subtitle?: string;
}

const Headline: React.FC<IHeaderProps> = ({ title, subtitle }) => {
  return (
    <>
      <h3
        style={{
          fontSize: "38px",
          color: "white",
          fontWeight: 600,
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>
      {subtitle && (
        <p style={{ fontSize: "22px", color: "white", fontWeight: 400 }}>
          {subtitle}
        </p>
      )}
    </>
  );
};

export default Headline;
