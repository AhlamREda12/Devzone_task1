import React, { Component } from "react";
import Header from "./Header";
import Home from './Home'
class App extends Component {
    state = {
        mynum: 0,
    };

    Increment = () => {
        this.setState({
            mynum: this.state.mynum +1,
        });
    };
    
    Decrement =() =>{
        if(this.state.mynum >0){
            this.setState({
                mynum: this.state.mynum -1,
            });
        }
    }
    render() {
        return (
            <div>
                <Header mynum={this.state.mynum} 
                Increment={this.Increment} 
                Decrement={this.Decrement}/>
                <Home  mynum={this.state.mynum} />
            </div>
        );
    }
}

export default App;
