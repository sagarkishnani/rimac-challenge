import "./LabelButton.scss";
import prev from "@/assets/images/icons/prev-button.svg";

interface LabelButtonProps {
  onClick: () => void;
  title: string;
}

const LabelButton: React.FC<LabelButtonProps> = ({ onClick, title }) => {
  return (
    <div className="label-button pt__md" onClick={onClick}>
      <div>
        <img src={prev} alt="back" />
      </div>
      <div className="font__semi">{title}</div>
    </div>
  );
};

export default LabelButton;
