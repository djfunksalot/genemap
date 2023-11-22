import React, {
    useState,
    useEffect
} from 'react'
import Image from "./UMAP_Amin.png"

import JSONDATA from './genes.json';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
export default function ScRNA() {
    const [body, setBody] = React.useState(null);
    const [headers, setHeaders] = React.useState(null);
    const [loading, setLoading] = useState(true);
    const handleGeneData = (data) => {
        let listItems = data.header.map((head, index) =>
            <th key={index}>{head}</th>
        )
        let bodyItems = data.data.map((rowContent, rowId) =>
            <tr key={rowId}>{rowContent.map((col, colId) =>
                <td key={colId} >{col}</td>
            )}
            </tr>
        )
        setHeaders(listItems)
        setBody(bodyItems)
    }
    const fetchGene = (name) => {
        {
            JSONDATA.filter((val) => {
                if (val.name.toLowerCase() === name.toLowerCase()) {
                    fetch("https://s3.us-east-2.amazonaws.com/ksusztak.genemap/JL/" + val.uuid + ".json")
                        .then(response => response.json())
                        .then(data => handleGeneData(data))
                } else {
                    setHeaders(null)
                }
            })
        }
    }
    return (
        <div>
            <div>

            <div>
                <input type="text" placeholder="seach..."
                    onChange={
                        e => fetchGene(e.target.value)
                    }
                />
                            <div>
                <img
                    src={Image}
                    alt="umap"
                />
            </div>
                {headers && body ? (
                    <table style={{ width: 500 }}>
                        <thead><tr>{headers}</tr></thead>
                        <tbody>{body}</tbody>
                    </table>

                ) : (
                    <div>
                    </div>
                )}
            </div>
     <br></br>
            </div>
            <div className="bottom-component">
                Single Nuclei expression in the Human Kidney Atlas: Log and normalized average expression was calculated across all samples (<b><u>Average Expression (All Samples)</u></b>), across just control  samples <b><u>Average Expression (Control Samples)</u></b>, and across just diseased samples <b><u>Average Expression (Disease Samples)</u></b>. We also display the fraction of cells that had counts of given gene across all samples, <b><u>Fraction Expressing (All Samples)</u></b>, the fraction of cells with counts within just control samples <b><u>Fraction Expressing (Control Samples)</u></b>, and just in diseased samples <b><u>Fraction Expressing (Disease Samples)</u></b>. We also calculate p-values to see if each gene expression is differentially expressed for each cell type <b><u>CellType marker p-values</u></b>, and a p-value for differentially expressed in disease samples as compared to control samples <b><u>Disease control p-values</u></b>.
            </div>
        </div>
    );
}
