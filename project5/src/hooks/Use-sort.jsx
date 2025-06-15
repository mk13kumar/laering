import React, { useState } from 'react'

const useSort = (tableData,config) => {
  const [sortOrder,setSortOrder]=useState(null);
      const [sortBy,setSortBy]=useState(null);

      const setSortColumn = (label) => {
        if (label == sortBy) {
          setSortOrder("asc");
          setSortBy(label);
        }
    
        if (sortOrder === null) {
          setSortOrder("asc");
          setSortBy(label);
        } else if (sortOrder === "asc") {
          setSortOrder("desc");
          setSortBy(label);
        } else if (sortOrder === "desc") {
          setSortOrder(null);
          setSortBy(null);
        }
      };

      let sortedData = tableData;
      if (sortOrder && sortBy) {
        const { sortValue } = config.find((column) => column.label === sortBy);
        sortedData = [...tableData].sort((a, b) => {
          const valueA = sortValue(a);
          const valueB = sortValue(b);
          const reverseOrder = sortOrder === "asc" ? 1 : -1;
          if (typeof valueA === "string") {
            return valueA.localeCompare(valueB) * reverseOrder;
          } else {
            return (valueA - valueB) * reverseOrder;
          }
        });
      }

  return (
   {
    setSortColumn,
    sortBy,
    sortOrder,
    sortedData
   }
  )
}

export default useSort;