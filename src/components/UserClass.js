import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.name + "child constructor");

        this.state = {
            userInfo: {
                name:"Dummy",
                location:"default",
            },
        };
    }
    
    async componentDidMount(){
        console.log(this.props.name + "child component did mount");
        const data = await fetch("https://api.github.com/users/xlreon");
        const json = await data.json();
        
        this.setState({
            userInfo:json,
        });
        console.log(json);
        console.log(json.login);
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    render () {
        console.log(this.props.name + "child render");
        const {name, location, login, avatar_url} = this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url} /> 
                <h2>Name: {name} </h2>
                <h3>Location: {location} </h3>
                <h4>GitHub: {login}</h4>
            </div>
        );
    }
}

export default UserClass;