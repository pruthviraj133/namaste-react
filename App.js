
import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement
// react element

// const jsxheading = (
//     <h1 id="root" tabIndex="5">
//     Namaste React using JSX!!
//     </h1>
// );

// console.log(jsxheading);

// react component
const Jsxheading2 = (
    <h1 id="root" tabIndex="5">
    Namaste React using JSX!!
    </h1>
);

const elem = <span>React Element</span>

const Title = () => (
    <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX!!
    </h1>
);

// React Functional Component
// const HeadingComponent = () => {
//     return <h1>Namaste React Functional Component</h1>;
// }

// Component Composition
const HeadingComponent2 = () => ( 
    <div id="container">
        <Title />
        <Title></Title>
        <h1 className="heading">Namaste React Functional Component!</h1>
    </div>
); // JS code inside HTML format



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);

