import { Component } from "react";

class Home extends Component{

   
    render(){
      
        return(
            <div className="home">
                <h1 className={this.props.mynum == 5 ? "red" :"" }>My name is Ahlam </h1>
                <h1 className={this.props.mynum > 5 ? "yellow":"" }>My Age is 23</h1>
                <h1 className={this.props.mynum > 1 && this.props.mynum < 5 ? "blue":"" }>My City Aga</h1>

            </div>
        )


    }
}
export default Home;