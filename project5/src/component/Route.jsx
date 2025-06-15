
import UseNavigation from "../hooks/Use-Navigation";


const Route = ({path,children}) => {
   //  console.log(path)
     const { currentPath} =UseNavigation();
   //   console.log('currentPath',currentPath);
     
     if( path == currentPath){
        return children;
     }
  return null;
}

export default Route;