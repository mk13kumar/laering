import React, { Fragment } from "react";

const Table = ({ tableData, config, keyFn }) => {

  // const  data =
  // [
  //   {name: 'mkkk', cast: 10, weight :5},
  //   {name: 'mk', cast: 15, weight :2},
  //   {name: 'mkk', cast: 5, weight :7},
  // ]
  //   function getSortValue(vegetable){
  //     return vegetable.cast;
  //   }
     
  //    const sortOrder='asc';
  //    data.sort((a,b)=>{
  //      const valueA = getSortValue(a); 
  //      const valueB= getSortValue(b); 


  //      const reverseOrder= sortOrder === 'asc' ? 1 : -1;  

  //      if( typeof valueA==='string'){
  //       return valueA.localeCompare(valueB)*reverseOrder;  
  //      }
  //      else{
  //       return (valueA - valueB )*reverseOrder;
  //      }
  //    })
    
  //    console.log(data)
     
  
  
  const renderedHeaders = config.map((column) => {
    if(column.header){
      return <Fragment key={column.label}>{column.header()}</Fragment>
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = tableData.map((rowData) => {
     
    const renderedCells = config.map((column) => {
      // console.log(column.render(rowData));
      return (
        <td className="p-3" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    //  console.log(renderedCells)
    return (
      <tr className="border-b" key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <div>
    
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
