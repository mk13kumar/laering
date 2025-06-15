import SortableTable from "../component/SortableTable";
const TablePage = () => {
  const tableData = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-300", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const config = [
    {
      label: "Fruits",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },

    {
      label: "Color",
      render: (fruit) => <div className={`p-4 m-2 ${fruit.color}`}></div>,
    },

    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
  ];
  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable tableData={tableData} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
