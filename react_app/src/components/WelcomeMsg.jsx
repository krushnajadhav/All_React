import React from "react";
function WelcomeMsg({list}) {

    if(list.length === 0)
    {
        return (
            <div className="text-center">
                <h1>Please add the task</h1>
            </div>
        
            );
    }
    return null;
    
  
}
export default WelcomeMsg;