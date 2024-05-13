type Props = {
  action: () => void;
  direction: "left" | "right";
};

export const Triangle = ({ action, direction }: Props) => {
  if (direction === "left") {
    return <div onClick={action} className="triangle-left" />;
  } else {
    return <div onClick={action} className="triangle-right" />;
  }
};
