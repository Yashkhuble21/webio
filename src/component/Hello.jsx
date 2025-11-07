import React from "react";

const Hello = ({name,handlemessage})=> {
    return(
        <div>
           Hello {name}
           <button className="bg-gray-200 text-white p-4" onClick={handlemessage('Hello Sir')}>reply</button>
        </div>
    )
};

export default Hello;

