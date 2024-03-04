import { Outlet } from "react-router-dom";
import NavBar from "./components/Nav/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import axios from "axios";
const baseUrl=process.env.REACT_APP_API_URL
export default function Base(){
    useEffect(()=>{
        // localStorage.setItem('workspacename', 'Untitled Project')
        const formdata=new FormData()
        formdata.append('user_token', localStorage.getItem('user_session_b'))
        axios.post(`${baseUrl}/`, formdata).then((res)=>{
            localStorage.setItem('user_session_b', res.data.user_token );
            console.log(localStorage.getItem('user_session_b'))
        })
    
    },[]);
    return <>
<NavBar/>
<Outlet/>    
    </>
}
