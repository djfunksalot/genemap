import React,{useState,useEffect} from 'react'
import JSONDATA from './genes.json';
export default function RNA() {
  const [geneName, setGeneName] = React.useState('');
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [uuid,setUuid] = useState('');

	const fetchData = async (uuid) => {
		   uuid.preventDefault();
    console.log("refresh prevented");
    try {
      let id = 'ffeed4d2-7d6f-4dc1-a295-e8f407ced508';
   let response =    fetch("https://s3.us-east-2.amazonaws.com/ksusztak.genemap/JL/"+ id+".json", {mode:'no-cors'})
      let result = await response.json();
	    console.log("result")
	    console.log("response")
      setData("something");
      setLoading(false);
    } catch (err) {
	    console.log("error")
	    console.log(err)
      setError(err.message);
      setLoading(false);
    }
//		   },[])

  }



  return (
	  <div>
    <div className="wrapper">
      <input type="text" placeholder="seach..." onChange={e=>fetchData(e.target.value)} />
      {JSONDATA.filter((val)=>{
        if(geneName === ""){
          return false
        }
        else if(val.name.toLowerCase() === geneName.toLowerCase()){
          return val;
        }
      }).map((val,key)=>{
	      //{setLoading(true)}
	     // {setUuid(val.uuid)}
//	{FetchData(val.uuid)} 
        return <div key={val.name}>
		      {val.uuid}

	         <form onSubmit={fetchData}>
		              <input type="submit" value="Submit" />
      </form>



	</div>
      })}
    </div>
    <div className="wrapper">
    </div>
	  </div>
  );
}
