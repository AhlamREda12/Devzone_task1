import { Component } from "react";

class Home extends Component{

   
    render(){
      
        return(
            <div className="home">
                <h1 className={this.props.mynum == 5 ? "red" :"" }>My name is mahmoud</h1>
                <h1 className={this.props.mynum > 5 ? "blue":"null" }>My Age is 23</h1>
            </div>
        )


    }
}
export default Home;