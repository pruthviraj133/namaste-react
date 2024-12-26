
import UserClass from "./UserClass";
import { Component} from "react";
import UserContext from "../utils/UserContext";

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
                <div>
                    LoggedIn User:
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-lg font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web App project</h2>

                <UserClass name={"Pruthvi (class)"} location={"India (Class)"} />
            </div>
        );
    }
}

export default About;
