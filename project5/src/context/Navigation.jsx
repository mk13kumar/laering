import { createContext, useEffect, useState } from "react";
 const NavigationContext = createContext();
 export default NavigationContext;
 const NavigationProvider=({children})=>{
    const [ currentPath,setCurrentPath] = useState(window.location.pathname);
     
    useEffect(()=>{
         const handler =()=>{
            setCurrentPath(window.location.pathname)
         };
         window.addEventListener('popstate',handler)
       return()=>{
        window.removeEventListener('popstate', handler)
       };

    },[])
     const navigate =(to)=>{
      //   console.log(to)
        window.history.pushState({},'',to)
        setCurrentPath(to)
     }
     return(

         <NavigationContext.Provider value={{currentPath,navigate}}>
           
           {children}
         </NavigationContext.Provider>
     )
     }
 export {NavigationProvider};
