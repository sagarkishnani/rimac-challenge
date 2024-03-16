import "./ProgressBar.scss";

interface ProgressBarProps {
  currentIndex: number;
  length: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentIndex, length }) => {
  const percentage = ((currentIndex + 1) / length) * 50;

  return (
    <div className="progress-bar">
      <div
        className="progress-bar__fill"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
