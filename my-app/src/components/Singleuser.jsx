const SingleUser=({user,deleteUser})=>{
    return(
        <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.address}</td>
            <td><button onClick={()=>deleteUser(user.id)}>Delete</button></td>
        </tr>
    )
}
export default SingleUser;