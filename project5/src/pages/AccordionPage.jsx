import React from "react";
import Accordion from "../component/Accordion";
const AccordionPage = () => {
  const item = [
    {
      id: "hjk",
      label: " Con i Use React on a Project",
      content:
        " You can use Rect on any  project you want to Use  when we  make accordion we need some even handler and  state.",
    },
    {
      id: "hjdk",
      label: " Con i Use JavaScript on a Project",
      content:
        "You can use Rect on any  project you want to Use  if i click first label ya accordion heading then  first label expended and other labels collapesed  .",
    },
    {
      id: "hkjk",
      label: " Con i Use  CSS on a Project",
      content:
        "You can use Rect on any  project you want to Use and same like that working it lable first and seconde and more .",
    },
  ];

   return(
    <div> 
        < Accordion items ={item}/>
    </div>
   )
};

export default AccordionPage;
