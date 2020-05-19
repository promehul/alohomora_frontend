import React, { Component } from "react";
import "./HomePage.css";


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      newsInfo: [],
      storiesInfo: [],
      loaded: false,
    };
  }
  

  render() {
   return(
     <div>
       Logged in
     </div>
   )
  }
}

export default HomePage;
