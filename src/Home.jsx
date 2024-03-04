import axios from 'axios';
import Img from './logo.svg';
import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';

const baseUrl=process.env.REACT_APP_API_URL
export default function Home() {
    const [projectName, setProjectName]=useState("New Untitled Project")
    const [myProjects, setMyProjects] = useState([]);
    
function createNew(e){
    console.log("Submitted")
        e.preventDefault();
        const formdata=new FormData()
        formdata.append('user_token', localStorage.getItem('user_session_b'))
        axios.post(`${baseUrl}/`, formdata).then((res)=>{
            localStorage.setItem('user_session_b', res.data.user_token );
            const formdata1=new FormData()
            formdata1.append('user_token',res.data.user_token )
            formdata1.append('name',projectName)
            
            axios.post(`${baseUrl}/my/new/`, formdata1).then((res)=>{
                if(res.status === 200){
                    console.log("Res Status 400:", res.data)
                    console.log(res.data.id)
                    window.location.href=`/builder/${res.data.id}`
                }
                else{
                    alert("Bad Request")
                }
            })
    })
}
    useEffect(()=>{
        const formdata2=new FormData()
        formdata2.append("user_token",localStorage.getItem('user_session_b'))
        axios.post(`${baseUrl}/my/`, formdata2).then(
            (res)=>{
            setMyProjects(res.data);
            }
        ).catch(e=>{console.log(e)})
    },[]);
    return (<>
    <div className="col canvas">
    <div className="row p-5">
        <div className="col-md-6 col-lg-6 col-sm-12">
            <div className="create-new bg-dark text-light d-flex flex-wrap">
                <span><ion-icon className='text-large' name="aperture-outline" /></span>
                <form  onSubmit={createNew} action="" method="post">
                    <input className='form-control' onChange={(e)=>{setProjectName(e.target.value)}} placeholder='Type Project Name ...' type="text" name="name" id="name" />
                    <h1><button type='submit'  className="btn btn-info form-control">Create</button></h1>
                </form>
            </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 p-3 create-new-text text-color-primary">
            <h5 className="text-light pb-2">Modern Web Builder for Both Beginers and Professional Web Develpoers</h5>
            <p>Welcome to the free modern web builder by Audrey. Start creating by clicking on the create button. We <u>believe</u> evey business needs a website to thrive, start your building journey now.</p>
        </div>
    </div>
        <div className="row my-projects">
        {myProjects.map((project, key)=>(<div className="card col-3 col-md-4 col-sm-6">
                <Link to={`/builder/${project.id}`} className='text-decoration-none text-color-primary '>
                <img src={Img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p>{project.name}</p>
                </div>
                </Link>
            </div>  
            ))}        

            </div>
        </div></>);
}