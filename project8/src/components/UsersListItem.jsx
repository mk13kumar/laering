import React from "react";
import Button from "./Button";
import { deleteUser } from "../store/main";
import { useThunk } from "../hooks/use-thunk";
import { RiDeleteBin6Line } from "react-icons/ri";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";
const UsersListItem = ({ user }) => {
    
  const [doDeleteUser,isLoading,error]= useThunk(deleteUser)
   
  const handleClick=()=>{ 
  // console.log(user)
  doDeleteUser(user.id)  
  }
  const header = <>
    <Button className="mr-3" loading={isLoading} onClick={handleClick}>
    <RiDeleteBin6Line/> 
    </Button>
    {error && <div>Error deleting user </div>}
   {user.name}
   </>

  return (
   <ExpandablePanel header={header} >
    <AlbumsList user={user}/>
   </ExpandablePanel>   
  );
};

export default UsersListItem;
