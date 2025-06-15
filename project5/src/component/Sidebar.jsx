import React from "react";
import Link from "./link";

const Sidebar = () => {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Images", path: "/images" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Count", path: "/count" },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <Link 
      
      key={link.label} 
      to={link.path}
      textcolor='text-blue-400'
      activeClassName='font-bold border-l-2 border-blue-500 pl-2 text-blue-500'
      >
        {link.label}
      </Link>
    );
  });

return (

  <div className="sticky top-0 overflow flex flex-col   ">
    {renderedLinks}
 </div>
  )
};

export default Sidebar;
