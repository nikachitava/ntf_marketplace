import "./Button.css";

interface myButtonProps {
  icon?: JSX.Element;
  label: string;
  fill: boolean;
  color: string;
  onClick: () => void;
}

const Button: React.FC<myButtonProps> = ({
  icon,
  label,
  fill,
  color,
  onClick,
}) => {
  const className = `button_container ${
    fill ? "filled_button" : "outline_button"
  }`;

  return (
    <button className={className} style={{ color: color }} onClick={onClick}>
      {icon}
      <p>{label}</p>
    </button>
  );
};

export default Button;
