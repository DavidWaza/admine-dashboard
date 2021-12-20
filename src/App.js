import React, { Component } from "react";
import SignIn from "./components/SignIn";
import "./App.css";
import SignUp from "./components/SignUp";
import Navigation from "./components/Navigation";

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      route: "signin",
      isSignedIn: false,
    };
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  };
  onButtonSubmit = () => {
    console.log("click");
  };

    onRouteChange = (route) => {
      if(route === 'signout') {
        this.setState({isSignedIn: false})
      }else if (route === 'home'){
          this.setState({isSignedIn:true})
      }
      this.setState({route: route});
    }


  render() {
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange}/>
        {this.state.route === "signin" ? (
      
          <SignIn
            onButtonSubmit={this.onButtonSubmit}
            onInputChange={this.onInputChange}
            onRouteChange={this.onRouteChange}
          />
        ) : (
          <SignUp onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}
export default App;
