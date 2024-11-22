
import React,{useState,useEffect} from "react";
import "./App.css";
import axios from "axios";
import StyledText from "./StyledText";



function App(){


  return (

    <div  style={{padding:"20px"}} >
      <h1> tulips passing style as a props </h1>
<StyledText/>

    </div>
  );
}

export default App;

