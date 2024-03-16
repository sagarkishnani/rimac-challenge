import Button from "../../atoms/Button/Button";
import "./PrimaryButton.scss";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick: () => void;
  isLoading: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onClick,
  isLoading = false,
  ...rest
}) => {
  return (
    <>
      <Button
        className={"primary-button"}
        title={title}
        onClick={onClick}
        isLoading={isLoading}
        {...rest}
      />
    </>
  );
};

export default PrimaryButton;
