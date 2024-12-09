import { Component } from "react";

class Header extends Component{
render(){
    return(
        <div className="head">
    <h1 className={
        this.props.mynum > 10 ? "red" : 
        this.props.mynum > 5 ? "yellow" : 
        "black"
    }>
        {this.props.mynum}
    </h1>
            <button className="btn1" onClick={this.props.Decrement}>Decrement</button>
            <button className="btn2" onClick={this.props.Increment}>Increment</button>
        </div>
    )
}
}
export default Header;