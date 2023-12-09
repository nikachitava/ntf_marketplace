import "./FormInput.css";

interface IFormInputProps {
  icon: JSX.Element;
  placeholder: string;
}

export const FormInput: React.FC<IFormInputProps> = ({ icon, placeholder }) => {
  return (
    <div className="form_input_container">
      {icon}
      <input type="text" placeholder={placeholder} className="form_input" />
    </div>
  );
};
