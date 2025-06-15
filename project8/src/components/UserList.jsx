import React from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store/main";
import { useEffect } from "react";
import Skeleton from "./Skeleton";
import Button from "./Button";
// import { deleteUser } from '../store/thunks/deleteUser';
import { useThunk } from "../hooks/use-thunk";
import UsersListItem from "./UsersListItem";


const UserList = () => {
  const [doFetchUsers, isLoadingUsers, isloadingUsersError] = useThunk(fetchUsers);

  const [doAddUSer, iscreatingUser, iscreatingUserError] = useThunk(addUser);

  // const [isLoadingUsers,setIsLoadingUsers] = useState(false);
  // const[isloadingUsersError,setIsLoadingUsersError]= useState(null);
  // const[iscreatingUser,setIsCreatingUser]=useState(false);
  // const[iscreatingUserError,setIsCreatingUserError]=useState(null)

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
    //   setIsLoadingUsers(true);
    //  dispatch(fetchUsers())
    //  .unwrap()
    //  .catch((err)=> setIsLoadingUsersError(err))
    //  .finally(()=>setIsLoadingUsers(false));
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doAddUSer();
    // setIsCreatingUser(true)
    // dispatch(addUser())
    // .unwrap()
    // .catch(err => setIsCreatingUserError(err))
    // .finally(()=>setIsCreatingUser(false))
  };

  //  const handleDeleteUesr=(id)=>{
  //   (dispatch(deleteUser(id)))
  //  }

  // console.log(data)
  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />
  }

  else if (isloadingUsersError) {
    content = <div> Error fetching...</div>;
  } else{
    content = data.map((user) => {
      return <UsersListItem key={user.id} user={user}/>
    });
  }
  

  return (
    <div>
      <div className=" flex flex-row justify-between item-center m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={iscreatingUser} onClick={handleUserAdd}>
          + Add
        </Button>

        {iscreatingUserError && "Error creating user.."}
      </div>

      {content}
    </div>
  );
};

export default UserList;
