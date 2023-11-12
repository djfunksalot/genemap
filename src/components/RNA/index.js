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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [uuid, setUuid] = useState('');

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
]


    const fetchGene = (name) => {
        {
            JSONDATA.filter((val) => {
                if (val.name.toLowerCase() === name.toLowerCase()) {
                    setUuid(val.uuid)
                         fetch("https://s3.us-east-2.amazonaws.com/ksusztak.genemap/JL/"+ val.uuid +".json")
    .then(response => response.json())
    .then(data => setData(data))
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


      {data ? (
        <div> {data.gene} < /div> 

      ) : (
        <div></div>
      )}


        </div>
        <div className = "wrapper" >
        </div> 
        </div>
    );
}
