import { useReducer } from "react";
import { produce } from "immer";
// import useCounter from "../hooks/Use-counter";

const INCREMENT_COUNT = "increment";
const SET_VALUE_TO_ADD = "change-Value-to-inValue";
const DECREMENT_COUNT = "decrement";
const ADD_VALUE_TO_COUNT = "add-value-to-count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
      // return {
      //   ...state,
      //   count: state.count + 1,
      // };
    case DECREMENT_COUNT:
     state.count = state.count - 1;
     return;
    case SET_VALUE_TO_ADD:
     state.inValue= action.payload; 
     return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.inValue;
      state.inValue = 0;
      return;
    default:
      return state;
  }
};

const CounterPage = ({ initialCount }) => {
  // const [inValue, setInValue] = useState(0);
  // const [count, setCount] = useState(initialCount);

  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    inValue: 0,
  });
  console.log(state);
  const handleIncrement = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handlechange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   dispatch({
    type: ADD_VALUE_TO_COUNT, 

   })
  };

  return (
    <div>
      <h1> count is : {state.count}</h1>
      <div className=" flex gap-2">
        <button
          onClick={handleIncrement}
          className="bg-blue-400 text-white px-2 py-1 hover:bg-blue-500"
        >
          {" "}
          Count +
        </button>
        <button
          onClick={handleDecrement}
          className="bg-blue-400 text-white px-2 py-1 hover:bg-blue-500"
        >
          {" "}
          Count -
        </button>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
        <label>Add a lot</label>
        <input
          className="border"
          type="number"
          value={state.inValue || ""}
          onChange={handlechange}
        />
        <button className="bg-blue-400 text-white px-2 py-1 hover:bg-blue-500">
          Add
        </button>
      </form>
    </div>
  );
};

export default CounterPage;
