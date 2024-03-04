import 'grapesjs/dist/css/grapes.min.css';
import React, { useEffect, useState } from 'react';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css'
import websitePlugin from 'grapesjs-preset-webpage';
import basicBlockPlugin from 'grapesjs-blocks-basic'
import formPlugin from 'grapesjs-plugin-forms'
import thePlugin from 'grapesjs-plugin-export'
import plugin  from '@silexlabs/grapesjs-ui-suggest-classes';
import { navBar1Block } from '../Blocks/NavigationBars';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const baseUrl=process.env.REACT_APP_API_URL
function Engine() {
const {id} = useParams()
const [localstoragestate, setlocalstoragestate]=useState(localStorage.getItem('gjsProject'))
function setupstorage(){
  setlocalstoragestate(localStorage.getItem('gjsProject'))
}
setInterval(setupstorage, 1000)
  useEffect(()=>{
    const myform=new FormData()
    myform.append('id', id)
    myform.append("user_token",localStorage.getItem('user_session_b'))
    myform.append("projectfiles",localstoragestate)
    axios.post(`${baseUrl}/my/editor/`, myform).then((res)=>{
      console.log(res.data);
      // localstoragestate.set
      localStorage.setItem('workspacename', res.data.name)
      localStorage.setItem('gjsProject', res.data.project)
    }).catch(e=>{})
  },[id, localstoragestate]);

    useEffect(() => {
      const editor = grapesjs.init({
             container: '#gjs',
        plugins: [websitePlugin,basicBlockPlugin,formPlugin,thePlugin,plugin],
        pluginsOpts: {
          [thePlugin]: {
            addExportBtn: true, 
            btnLabel: 'Download',
          }, 
          [plugin]: {
            enablePerformance:true,
            enableCount:true,
          }
        },
      });
     
      // editor.addComponents()
      const bm = editor.Blocks;
      navBar1Block.map((value, key)=>( bm.add(value.id, navBar1Block)))
     
      return () => {
        editor.destroy();
      };
    }, []);
  
    return (
      <>
        <div id="gjs"></div>
        </>
    );
  }
  
  export default Engine;