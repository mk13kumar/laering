import React from "react";
import { useState } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
const ExpandablePanel = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between item-center ">
        <div className="flex flex-row  item-centerjustify-between ">
          {header}
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          {expanded ? <FaAngleDown /> : <FaAngleLeft />}
        </div>
      </div>
      {expanded && <div className="p-2 border-t">{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
