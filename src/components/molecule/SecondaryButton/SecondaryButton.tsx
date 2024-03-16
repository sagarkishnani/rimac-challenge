import Button from "../../atoms/Button/Button";
import "./SecondaryButton.scss";

interface SecondaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick: () => void;
  isLoading?: boolean;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  title,
  onClick,
  isLoading = false,
  ...rest
}) => {
  return (
    <>
      <Button
        className={"secondary-button size__md"}
        title={title}
        onClick={onClick}
        isLoading={isLoading}
        {...rest}
      />
    </>
  );
};

export default SecondaryButton;
