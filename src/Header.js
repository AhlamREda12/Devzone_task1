import { Component } from "react";

class Header extends Component{
render(){
    return(
        <div className="head">
            <h1 className={this.props.mynum > 5 ? "red" : "blue"}>{this.props.mynum}</h1>
            <button onClick={this.props.Decrement}>Decrement</button>
            <button onClick={this.props.Increment}>Increment</button>
        </div>
    )
}
}
export default Header;