import React,{useState} from 'react'
import './App.css';
import JSONDATA from './genes.json'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
function App() {
  const [searchTerm,setSearchTerm] = useState('')
  return (
    <div className="App">
      <input type="text" placeholder="seach..." onChange={e=>setSearchTerm(e.target.value)} />
      {JSONDATA.filter((val)=>{
        if(searchTerm == ""){
          return false
        }
        else if(val.name.toLowerCase() == searchTerm.toLowerCase()){
          return val;
        }
      }).map((val,key)=>{

        return <div key={val.name}>
                         <div>{val.name}</div>
                         <img src={process.env.PUBLIC_URL + "/images/"+ val.images.featureplot+".png"} />
                         <img src={process.env.PUBLIC_URL + "/images/"+ val.images.dotplot+".png"} />
	</div>
      })}
    </div>
  );
}
export default App;
