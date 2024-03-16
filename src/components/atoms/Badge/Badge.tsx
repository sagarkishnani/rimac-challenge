import "./Badge.scss";

interface BadgeProps {
  title: string;
  isGradientBadge: boolean;
}

const Badge: React.FC<BadgeProps> = ({ title, isGradientBadge }) => {
  return (
    <div
      className={`primary-badge ${
        isGradientBadge ? "primary-badge__gradient" : "primary-badge__regular"
      } size__sm`}
    >
      {title}
    </div>
  );
};

export default Badge;
