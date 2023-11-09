import React,{useState,useEffect} from 'react'
import JSONDATA from './genes.json';
export default function RNA() {
    const [geneName, setGeneName] = React.useState('');
    const fetchUserData = (uuid) => {
	    console.log("https://s3.us-east-2.amazonaws.com/ksusztak.genemap/JL/"+ uuid+".json")
    fetch("https://s3.us-east-2.amazonaws.com/ksusztak.genemap/JL/"+ uuid+".json", {mode:'no-cors'})
      .then(response.json() => {
	      console.log(response)
//        return response.json()
      })
      .then(data => {
	      console.log(data)
      //  setUsers(data)
      })
  }




  return (
    <div className="wrapper">
      <input type="text" placeholder="seach..." onChange={e=>setGeneName(e.target.value)} />
      {JSONDATA.filter((val)=>{
        if(geneName === ""){
          return false
        }
        else if(val.name.toLowerCase() === geneName.toLowerCase()){
		fetchUserData(val.uuid)
		console.log(val.uuid)
          return val;
        }
      }).map((val,key)=>{



        return <div key={val.name}>
                         <div>
                         </div>
	</div>
      })}
    </div>
  );
}
