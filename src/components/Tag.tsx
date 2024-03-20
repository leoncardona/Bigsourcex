// Tag.js

import type { ComponentChildren } from "preact";
import "./styles/Tag.css";

type TagProps = {
  children: ComponentChildren;
  active: boolean; // Recibe el estado activo como prop
  onClick: () => void;
};

const Tag = ({ children, active, onClick }: TagProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div
      className={"tag " + (active ? "tag-active" : "")}
      onClick={handleClick}
    >
      <span className={"text " + (active ? "text-active" : "")}>
        {children}
      </span>
    </div>
  );
};

export default Tag;
