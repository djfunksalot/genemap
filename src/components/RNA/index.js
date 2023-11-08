import React,{useState} from 'react'
import JSONDATA from './genes.json';
export default function RNA() {
    const [geneName, setGeneName] = React.useState('');
  return (
    <div className="wrapper">
      <input type="text" placeholder="seach..." onChange={e=>setGeneName(e.target.value)} />
      {JSONDATA.filter((val)=>{
        if(geneName === ""){
          return false
        }
        else if(val.name.toLowerCase() === geneName.toLowerCase()){
          return val;
        }
      }).map((val,key)=>{

        return <div key={val.name}>
                         <div>
                         <img 
                             src={"https://s3.us-east-2.amazonaws.com/ksusztak.genemap/01/umap.png"} 
                             style={{ width: "45%", height: "100%" }} 
                             alt="umap"
                         />
                         <img 
                             src={"https://s3.us-east-2.amazonaws.com/ksusztak.genemap/01/"+ val.images.dotplot+".jpeg"} 
                             style={{ width: "54%", height: "100%" }} 
                             alt="Dotplot"
                         />
                         </div>
                         <div>
                         <img 
                             src={"https://s3.us-east-2.amazonaws.com/ksusztak.genemap/01/"+ val.images.featureplot+".jpeg"} 
                             style={{ width: "100%", height: "100%" }} 
                             alt="Feature Plot"
                         />
                         </div>
	</div>
      })}
    </div>
  );
}
