
import UseNavigation from "../hooks/Use-Navigation";
const Link = ({to,children, activeClassName,textcolor }) => {
     const {navigate,currentPath} = UseNavigation();
     

    const  handleClick=(e)=>{
      //  if (e.metaKey || e.ctrlKey){
      //   return;
      //  }
        e.preventDefault();
        navigate(to);

    }
  return (
    <a className={currentPath==to && activeClassName? activeClassName:textcolor } href={to} onClick={handleClick}>{children}</a>
  )
}

export default Link