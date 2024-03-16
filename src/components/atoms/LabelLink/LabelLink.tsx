import { Link } from "react-router-dom";
import "./LabelLink.scss";

interface LabelLinkProps {
  title: string;
  link: string;
}

const LabelLink: React.FC<LabelLinkProps> = ({ title, link }) => {
  return (
    <Link className="label-link font__semi size__sm" to={link}>
      <p className="pt__sm pb__lg">{title}</p>
    </Link>
  );
};

export default LabelLink;
