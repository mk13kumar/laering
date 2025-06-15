import Child from "./Child";

const user = [
  { id: 1, name: "munish" },
  { id: 2, name: "ankit" },
];
const HighOrderComponent = () => {
  return <Child user={user} />;
};

export default HighOrderComponent;
