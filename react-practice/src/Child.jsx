import { themeContext} from "./ContApi";
import { useContext } from "react";

function Child({user}) {
    console.log("userList",user)
   const them = useContext(themeContext)
//    console.log(  "them",them)
  return (
    <>
    <h1> them No : {them}</h1>
   
    </>
  );
}
export default Child;
