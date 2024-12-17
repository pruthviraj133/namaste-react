
import UserClass from "./UserClass";
import { Component} from "react";

class About extends Component {
    constructor (props) {
        super(props);
        // console.log("parent constructor");
    }
    
    componentDidMount(){
        // console.log("parent component did mount");
    }
    render () {
        // console.log("parent render");
        return (
            <div>
                <h1>About (Class)</h1>
                <h2>This is Namaste React Web App project</h2>
    
                <UserClass name={"Pruthvi (class)"} location={"India (Class)"} />
            </div>
        );
    }
}

export default About;
