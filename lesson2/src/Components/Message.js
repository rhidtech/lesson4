import { Component } from "react";


class Message extends Component {
render(){

    return <h1>{this.props.messagecontent} now weighs {this.props.messagecode} </h1>
}
}

export default Message;