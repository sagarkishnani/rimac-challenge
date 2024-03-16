import "./Container.scss";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="custom-grid">{children}</div>;
};

export default Container;
