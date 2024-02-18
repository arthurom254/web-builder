import axios from 'axios';
import Img from '../logo.jpg';
import {Link, Navigate } from 'react-router-dom';
// import {Redirect} from 'react-router';
function createNew(){
    axios.get('http://127.0.0.1:8000/new').then((res)=>{
        localStorage.setItem('open', res.data['ID'] );
        window.location.href=`/${res.data.ID}/edit/widgets`;
    })
}
export default function HomeCanvas() {
    return (<>
    <div className="row p-5">
        <div className="col-md-6 col-lg-6 col-sm-12">
            <div onClick={createNew} className="create-new bg-dark text-light d-flex flex-wrap">
                <span><ion-icon className='text-large' name="aperture-outline" /></span>
                <h1><a href="#" className="btn btn-info">Create</a></h1>
            </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 p-3 create-new-text text-color-primary">
            <h5 className="text-light pb-2">Modern Web Builder for Both Beginers and Professional Web Develpoers</h5>
            <p>Welcome to the free modern web builder by ****. Start creating by clicking on the create button. We <u>believe</u> evey business needs a website to thrive, start your building journey now.</p>
        </div>
    </div>
        <div className="row my-projects">
        <div className="card col-3 col-md-4 col-sm-6">
                <Link to="/1/edit" className='text-decoration-none text-color-primary '>
                <img src={Img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </Link>
            </div>
            <div className="card col-3 col-md-4 col-sm-6">
                <Link to="/1/edit" className='text-decoration-none text-color-primary '>
                <img src={Img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </Link>
            </div>
            <div className="card col-3 col-md-4 col-sm-6">
                <Link to="/1/edit" className='text-decoration-none text-color-primary '>
                <img src={Img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </Link>
            </div>
            <div className="card col-3 col-md-4 col-sm-6">
                <Link to="/1/edit" className='text-decoration-none text-color-primary '>
                <img src={Img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </Link>
            </div>
            <div className="card col-3 col-md-4 col-sm-6">
                <Link to="/1/edit" className='text-decoration-none text-color-primary '>
                <img src={Img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </Link>
            </div>
            <div className="card col-3 col-md-4 col-sm-6">
                <Link to="/1/edit" className='text-decoration-none text-color-primary '>
                <img src={Img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </Link>
            </div>
        </div></>);
}