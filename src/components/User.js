import { useEffect, useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(0);
    
    useEffect(() =>{
        // api calls
        
    }, []);

    return (
    <div className="user-card">
        <h2>Count: {count}</h2>
        <h2>Count2: {count2}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: India</h3>
        <h4>GitHub: pruthviraj133</h4>
    </div>
    );
};

export default User;