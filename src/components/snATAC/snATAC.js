import React, {
    createRef,
    Component
} from 'react'
import igv from "igv/dist/igv.esm.js"

const igvStyle = {
  fontFamily: 'open sans,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif',
  paddingTop: '60px',
  margin: '5px'
}

class IGViewerSection extends Component {
  constructor(props) {
    super(props)
    this.container = createRef(null)
  }

  componentDidMount() {
    const igvOptions = {
	                genome: "hg38",
                    locus: "chr11:120,171,024-120,275,043",
                    tracks: [
		                              {
                            "name": "Refseq Genes",
                            "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/hg38.refGene.txt.gz",
                            "order": 1,
                            "indexed": false
                        },
			{
    "name": "Ascending_Thin_LOH Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/Ascending_Thin_LOH.bw",
    "order": 2,
    "indexed": true,
    "color": "#802080"
  },
  {
    "name": "Ascending_Thin_LOH Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/Ascending_Thin_LOH.bw",
    "order": 3,
    "indexed": true,
    "color": "#802080"
  },
  {
    "name": "B_Naive Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/B_Naive.bw",
    "order": 4,
    "indexed": true,
    "color": "#20c0c0"
  },
  {
    "name": "B_Naive Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/B_Naive.bw",
    "order": 5,
    "indexed": true,
    "color": "#20c0c0"
  },
  {
    "name": "CD16_Mono Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/CD16_Mono.bw",
    "order": 6,
    "indexed": true,
    "color": "#806040"
  },
  {
    "name": "CD16_Mono Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/CD16_Mono.bw",
    "order": 7,
    "indexed": true,
    "color": "#806040"
  },
  {
    "name": "CD4T Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/CD4T.bw",
    "order": 8,
    "indexed": true,
    "color": "#80c060"
  },
  {
    "name": "CD4T Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/CD4T.bw",
    "order": 9,
    "indexed": true,
    "color": "#80c060"
  },
  {
    "name": "CD8T Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/CD8T.bw",
    "order": 10,
    "indexed": true,
    "color": "#e0e0e0"
  },
  {
    "name": "CD8T Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/CD8T.bw",
    "order": 11,
    "indexed": true,
    "color": "#e0e0e0"
  },
  {
    "name": "cDC Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/cDC.bw",
    "order": 12,
    "indexed": true,
    "color": "#6060e0"
  },
  {
    "name": "cDC Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/cDC.bw",
    "order": 13,
    "indexed": true,
    "color": "#6060e0"
  },
  {
    "name": "CNT Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/CNT.bw",
    "order": 14,
    "indexed": true,
    "color": "#a04040"
  },
  {
    "name": "CNT Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/CNT.bw",
    "order": 15,
    "indexed": true,
    "color": "#a04040"
  },
  {
    "name": "C_TAL Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/C_TAL.bw",
    "order": 16,
    "indexed": true,
    "color": "#804020"
  },
  {
    "name": "C_TAL Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/C_TAL.bw",
    "order": 17,
    "indexed": true,
    "color": "#804020"
  },
  {
    "name": "DCT1 Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/DCT1.bw",
    "order": 18,
    "indexed": true,
    "color": "#e0a0a0"
  },
  {
    "name": "DCT1 Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/DCT1.bw",
    "order": 19,
    "indexed": true,
    "color": "#e0a0a0"
  },
  {
    "name": "DCT2 Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/DCT2.bw",
    "order": 20,
    "indexed": true,
    "color": "#202020"
  },
  {
    "name": "DCT2 Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/DCT2.bw",
    "order": 21,
    "indexed": true,
    "color": "#202020"
  },
  {
    "name": "Des-Thin_Limb Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/Des-Thin_Limb.bw",
    "order": 22,
    "indexed": true,
    "color": "#80c0e0"
  },
  {
    "name": "Des-Thin_Limb Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/Des-Thin_Limb.bw",
    "order": 23,
    "indexed": true,
    "color": "#80c0e0"
  },
  {
    "name": "Endo_GC Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/Endo_GC.bw",
    "order": 24,
    "indexed": true,
    "color": "#208040"
  },
  {
    "name": "Endo_GC Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/Endo_GC.bw",
    "order": 25,
    "indexed": true,
    "color": "#208040"
  },
  {
    "name": "Endo_Peritubular Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/Endo_Peritubular.bw",
    "order": 26,
    "indexed": true,
    "color": "#60a080"
  },
  {
    "name": "Endo_Peritubular Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/Endo_Peritubular.bw",
    "order": 27,
    "indexed": true,
    "color": "#60a080"
  },
  {
    "name": "Fibroblast_1 Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/Fibroblast_1.bw",
    "order": 28,
    "indexed": true,
    "color": "#e0a040"
  },
  {
    "name": "Fibroblast_1 Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/Fibroblast_1.bw",
    "order": 29,
    "indexed": true,
    "color": "#e0a040"
  },
  {
    "name": "Fibroblast_2 Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/Fibroblast_2.bw",
    "order": 30,
    "indexed": true,
    "color": "#8060a0"
  },
  {
    "name": "Fibroblast_2 Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/Fibroblast_2.bw",
    "order": 31,
    "indexed": true,
    "color": "#8060a0"
  },
  {
    "name": "GS_Stromal Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/GS_Stromal.bw",
    "order": 32,
    "indexed": true,
    "color": "#a0e0a0"
  },
  {
    "name": "GS_Stromal Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/GS_Stromal.bw",
    "order": 33,
    "indexed": true,
    "color": "#a0e0a0"
  },
  {
    "name": "IC_A Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/IC_A.bw",
    "order": 34,
    "indexed": true,
    "color": "#a06060"
  },
  {
    "name": "IC_A Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/IC_A.bw",
    "order": 35,
    "indexed": true,
    "color": "#a06060"
  },
  {
    "name": "IC_B Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/IC_B.bw",
    "order": 36,
    "indexed": true,
    "color": "#80c0e0"
  },
  {
    "name": "IC_B Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/IC_B.bw",
    "order": 37,
    "indexed": true,
    "color": "#80c0e0"
  },
  {
    "name": "iPT Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/iPT.bw",
    "order": 38,
    "indexed": true,
    "color": "#202020"
  },
  {
    "name": "iPT Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/iPT.bw",
    "order": 39,
    "indexed": true,
    "color": "#202020"
  },
  {
    "name": "Mac Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/Mac.bw",
    "order": 40,
    "indexed": true,
    "color": "#40c0c0"
  },
  {
    "name": "Mac Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/Mac.bw",
    "order": 41,
    "indexed": true,
    "color": "#40c0c0"
  },
  {
    "name": "Macula_Densa Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/Macula_Densa.bw",
    "order": 42,
    "indexed": true,
    "color": "#602060"
  },
  {
    "name": "Macula_Densa Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/Macula_Densa.bw",
    "order": 43,
    "indexed": true,
    "color": "#602060"
  },
  {
    "name": "Mes Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/Mes.bw",
    "order": 44,
    "indexed": true,
    "color": "#808020"
  },
  {
    "name": "Mes Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/Mes.bw",
    "order": 45,
    "indexed": true,
    "color": "#808020"
  },
  {
    "name": "M_TAL Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/M_TAL.bw",
    "order": 46,
    "indexed": true,
    "color": "#202080"
  },
  {
    "name": "M_TAL Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/M_TAL.bw",
    "order": 47,
    "indexed": true,
    "color": "#202080"
  },
  {
    "name": "Neutrophil Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/Neutrophil.bw",
    "order": 48,
    "indexed": true,
    "color": "#80a0c0"
  },
  {
    "name": "Neutrophil Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/Neutrophil.bw",
    "order": 49,
    "indexed": true,
    "color": "#80a0c0"
  },
  {
    "name": "PC Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/PC.bw",
    "order": 50,
    "indexed": true,
    "color": "#a0c040"
  },
  {
    "name": "PC Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/PC.bw",
    "order": 51,
    "indexed": true,
    "color": "#a0c040"
  },
  {
    "name": "PEC Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/PEC.bw",
    "order": 52,
    "indexed": true,
    "color": "#e040c0"
  },
  {
    "name": "PEC Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/PEC.bw",
    "order": 53,
    "indexed": true,
    "color": "#e040c0"
  },
  {
    "name": "Podo Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/Podo.bw",
    "order": 54,
    "indexed": true,
    "color": "#e08020"
  },
  {
    "name": "Podo Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/Podo.bw",
    "order": 55,
    "indexed": true,
    "color": "#e08020"
  },
  {
    "name": "PT_S1 Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/PT_S1.bw",
    "order": 56,
    "indexed": true,
    "color": "#8040c0"
  },
  {
    "name": "PT_S1 Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/PT_S1.bw",
    "order": 57,
    "indexed": true,
    "color": "#8040c0"
  },
  {
    "name": "PT_S2 Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/PT_S2.bw",
    "order": 58,
    "indexed": true,
    "color": "#a08080"
  },
  {
    "name": "PT_S2 Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/PT_S2.bw",
    "order": 59,
    "indexed": true,
    "color": "#a08080"
  },
  {
    "name": "PT_S3 Control",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/control/PT_S3.bw",
    "order": 60,
    "indexed": true,
    "color": "#606040"
  },
  {
    "name": "PT_S3 Disease",
    "url": "https://s3.us-east-2.amazonaws.com/ksusztak.genemap/HKSI/disease/PT_S3.bw",
    "order": 61,
    "indexed": true,
    "color": "#606040"
  }
                    ]

    };
    return igv.createBrowser(this.container.current, igvOptions);
  }

  render() {
    return (
      <div id="igv-div" ref={this.container} style={igvStyle}></div>
    );
  }
}


export default IGViewerSection;
