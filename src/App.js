import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [huruf,setHuruf] = useState("");
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <input type="text" name="huruf" onChange={(e)=>setHuruf(e.target.value)} />
      <h2 >{huruf}</h2><br/>
      <h2 StyleSheet="fontFamily: 'Calibri';">{huruf}</h2><br/>
      <h2 StyleSheet="fontFamily: 'Sans';">{huruf}</h2><br/>
    </div>
  );
  
}