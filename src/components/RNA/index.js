import React, {
    useState,
    useEffect
} from 'react'

import JSONDATA from './genes.json';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
export default function RNA() {
    const [data, setData] = React.useState(null);
    const [headers, setHeaders] = React.useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [uuid, setUuid] = useState('');

    const handleGeneData = (data) => {
	    console.log(data)
	   // if (data && data.header) {
	   let i = 0

           let listItems = data.header.map((head,index) =>
	    <table style={{ width: 500 }}>
                <thead>
                    <tr>
		        <th key={index}>{head}</th>
		    </tr>
                </thead>
                <tbody>
                    {data.data.map((rowContent, rowId) => 
			   <tr key = {rowId}>{rowContent.map((col,colId)=>
				   <td key = {colId} >{col}</td>
			   )}
			   }
			    </tr>
                    )}
                </tbody>
            </table>
	    );
	    setHeaders(listItems)
//	    }
    }

    const fetchGene = (name) => {
        {
            JSONDATA.filter((val) => {
                if (val.name.toLowerCase() === name.toLowerCase()) {
                    setUuid(val.uuid)
                         fetch("https://s3.us-east-2.amazonaws.com/ksusztak.genemap/JL/"+ val.uuid +".json")
    .then(response => response.json())
    .then(data => handleGeneData(data))
                } else {
			setData(null)
		}
            })
        }
    }



    return ( <div>
        <div className = "wrapper" >
        <input type = "text" placeholder = "seach..." 
        onChange = {
            e => fetchGene(e.target.value)
        }
        />
        <div> {uuid} < /div> 


      {headers ? (
        <div> {headers} < /div> 

      ) : (
        <div></div>
      )}


        </div>
        <div className = "wrapper" >
        </div> 
        </div>
    );
}
