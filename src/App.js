import React,{useState} from 'react'
import './App.css';
import JSONDATA from './genes.json'
function App() {
  const [searchTerm,setSearchTerm] = useState('')
  return (
    <div className="App">
      <input type="text" placeholder="seach..." onChange={e=>setSearchTerm(e.target.value)} />
      {JSONDATA.filter((val)=>{
        if(searchTerm === ""){
          return false
        }
        else if(val.name.toLowerCase() === searchTerm.toLowerCase()){
          return val;
        }
      }).map((val,key)=>{

        return <div key={val.name}>
                         <div>{val.name}</div>
                         <img 
                             src={process.env.PUBLIC_URL + "/images/"+ val.images.featureplot+".jpeg"} 
                             style={{ width: "100%", height: "100%" }} 
                             alt="Feature Plot"
                         />
                         <img 
                             src={process.env.PUBLIC_URL + "/images/"+ val.images.dotplot+".jpeg"} 
                             style={{ width: "100%", height: "100%" }} 
                             alt="Dotplot"
                         />
	</div>
      })}
    </div>
  );
}
export default App;
