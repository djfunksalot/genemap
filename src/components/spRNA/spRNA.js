import React,{useState} from 'react'
import JSONDATA from './ST_genes.json';
export default function SpRNA() {
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
               <h2>spRNA</h2>
                         <div>
                         <img 
                             src={"https://s3.us-east-2.amazonaws.com/ksusztak.genemap/ST/img2/UMAP_spRNA_seq.png"} 
                             style={{ width: "59%", height: "100%" }} 
                             alt="umap"
                         />
                         <img 
                             src={"https://s3.us-east-2.amazonaws.com/ksusztak.genemap/ST/img2/"+ val.images.dotplot+".png"} 
                             style={{ width: "41%", height: "100%" }} 
                             alt="Dotplot"
                         />
                         </div>
                         <div>
                         <img 
                             src={"https://s3.us-east-2.amazonaws.com/ksusztak.genemap/ST/img2/"+ val.images.featureplot+".png"} 
                             style={{ width: "100%", height: "100%" }} 
                             alt="Feature Plot"
                         />
                         </div>
	</div>
      })}
    </div>
  );
}
