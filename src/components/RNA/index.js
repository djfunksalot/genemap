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
               <h2>scRNA</h2>
                         <div>
                         <img 
                             src={"https://s3.us-east-2.amazonaws.com/ksusztak.genemap/ST/images/scRNAseq_UMAP.jpg"} 
                             style={{ width: "50%", height: "100%" }} 
                             alt="umap"
                         />
                         <img 
                             src={"https://s3.us-east-2.amazonaws.com/ksusztak.genemap/Rat/RNA/"+ val.images.dotplot+".png"} 
                             style={{ width: "35%", height: "100%" }} 
                             alt="Dotplot"
                         />
                         </div>
                         <div>
                         <img 
                             src={"https://s3.us-east-2.amazonaws.com/ksusztak.genemap/Rat/RNA/"+ val.images.featureplot+".png"} 
                             style={{ width: "100%", height: "100%" }} 
                             alt="Feature Plot"
                         />
                         </div>
	</div>
      })}
    </div>
  );
}
