import React,{useState,useEffect} from 'react'
import JSONDATA from './genes.json';
export default function RNA() {
    const [geneName, setGeneName] = React.useState('');
    const [data, setData] = React.useState(null);
	  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async (uuid) => {
    try {
                let response = await fetch("https://s3.us-east-2.amazonaws.com/ksusztak.genemap/JL/"+ uuid+".json", {mode:'no-cors'});
      let result = await response.json();
	    console.log("result")
	    console.log(result)
      setData(result);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }




  return (
    <div className="wrapper">
      <input type="text" placeholder="seach..." onChange={e=>setGeneName(e.target.value)} />
      {JSONDATA.filter((val)=>{
        if(geneName === ""){
          return false
        }
        else if(val.name.toLowerCase() === geneName.toLowerCase()){
		fetchData(val.uuid)

		console.log(val)
          return val;
        }
      }).map((val,key)=>{



        return <div key={val.name}>
		      <div>{JSON.stringify(data)}</div>;
                         <div>
                         </div>
	</div>
      })}
    </div>
  );
}
