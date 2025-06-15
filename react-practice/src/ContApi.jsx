import { createContext } from "react";
import Child from "./Child";
export const themeContext = createContext();
function ContApi() {
   let name = "munish"
  return (
    <themeContext.Provider value={name}>
      <Child />
    </themeContext.Provider>
  );
}
export default ContApi;
