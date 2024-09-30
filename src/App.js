
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// this object declared can be proivded as input to card as style
// const styleCard = {
//     backgroundColor: "#f0f0f0",
// }

const AppLayout = () => {
  
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

