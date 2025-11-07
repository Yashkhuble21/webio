import React from "react";
 const Users = ({users})=>{
   

    return(
        <>
         <div className="min-w-full bg-sky-400">
            <h2 className="text-xl">Users List</h2>
            {users.map((element,id)=>{
                return(
                    <div className="bg-white min-w-screen p-5">
                        <div>Name: {element.name}</div>
                        <div>Email: {element.email}</div>
                    </div>
                );
                    
            })}
            
         </div>
        </>
    );
}

export default Users;