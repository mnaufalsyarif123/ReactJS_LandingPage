import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <Body />
//         <Footer />
//       </div>
//     );
//   }
// } 

const App = () => {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  };

export default App;