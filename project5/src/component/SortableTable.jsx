;
import Table from "./Table";
import useSort from "../hooks/Use-sort";
const SortableTable = (props) => {
  const { 
    setSortColumn,
    sortBy,
    sortOrder,
    sortedData} =useSort(props.tableData,props.config);
  const { config} = props;

 

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th className="flex gap-2" onClick={() => setSortColumn(column.label)}>
          {getIcons(column.label, sortBy, sortOrder)} {column.label}{" "}
        </th>
      ),
    };
  });

  return <Table {...props} tableData={sortedData} config={updatedConfig} />;
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return <div className="text-xl">&#9650;&#9660;</div>;
  }
  if (sortOrder == null) {
    return <div className="text-xl">&#9650;&#9660;</div>;
  } else if (sortOrder === "asc") {
    return <div className="text-xl">&#9650;</div>;
  } else if (sortOrder === "desc") {
    return <div className="text-xl">&#9660;</div>;
  }
};
export default SortableTable;
