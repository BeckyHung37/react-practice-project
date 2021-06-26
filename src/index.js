import "./style.css";
import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./Homepage.js";
import Listpage from "./Listpage.js";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={page:0};
    }
    nextPage(){
        //console.log('to p2');
        this.setState({page:1});
    }
    prevPage(){
        //console.log('back p1');
        this.setState({page:0});
    }
    render(){
                if (this.state.page==0) {
                    return <Homepage click={this.nextPage.bind(this)} />;

                } else {
                    return <Listpage click={this.prevPage.bind(this)} />;
                }
    }
}
ReactDOM.render(<App/>, document.getElementById("root"));





