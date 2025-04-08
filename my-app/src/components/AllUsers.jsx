import usersData from "./User";
import SingleUser from "./Singleuser";
import { useState } from "react";
const AllUsers=()=>{
    const[users,setUsers]=useState([]);
    const [showUsers,setShowUsers]=useState(false);

    const addAllUsers=()=>{
        setUsers(usersData)
        setShowUsers(true);
    }
    const deleteAllUsers=()=>{
        setUsers([]);
        setShowUsers(false);
    }

    const deleteUser =(id)=>{
        const updateUsers=usersData.filter(user=>user.id!==id);
        setUsers(updateUsers);
        if(updateUsers.length===0)
        {
            setShowUsers(false)
        }
    }
    return(
        <div>
            <h1>user management</h1>
            {!showUsers && (<button onClick={addAllUsers}>Add All Users</button>)}
            {showUsers && (
                <>
                <button onClick={deleteAllUsers}>Delete All Users</button>
                <table>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Emails</th>
                    <th>phone</th>
                    <th>Address</th>
                </thead>
                    <tbody>
                        {
                            users.map(user=>(
                                <SingleUser key={user.id} user={user} deleteUser={deleteUser}/>
                            ))
                        }
                    </tbody>
            </table>
            </>
        )}
        </div>
    )
}
export default AllUsers;