import {  useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  

  
  

  const handleClick = (nextIndex) => {
    // console.log(nextIndex)
    setExpandedIndex((currentIndex) =>{
      // console.log(currentIndex)
      return(
        currentIndex === nextIndex ? -1 : nextIndex
      )
    }
  );
  };

  const renderedItem = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
      
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <FaAngleDown /> : <FaAngleRight />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          onClick={() => handleClick(index)}
          className=" flex justify-between p-3 bg-gray-100 border-b item-center cursor pointer"
        >
          
          {item.label} {icon}
        </div >

        <div >

        {isExpanded && <div className="border-b  p-5 flex-auto ">{item.content}</div>}
        </div>
        
      </div>
    );
  });

  return(

  <div >
    <div   className="border-x border-t rounded">{renderedItem}
    </div>

   </div>
  )
  
}
export default Accordion;
