import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
export default function SideBar() {
    
    const {projctid}=useParams();
    const [openProject, setOpenProject]=useState();
    useEffect(()=>{setOpenProject(localStorage.getItem('open'))},[projctid]);
    const actions = [
        {
            'id': 0,
            'icon': 'grid-outline',
            'label': 'Home',
            'to': '/'
        },
        {
            'id': 1,
            'icon': 'desktop-outline',
            'label': 'Widgets',
            'to': `${openProject}/edit/widgets`
        },
        {
            'id': 2,
            'icon': 'logo-html5',
            'label': 'Elements',
            'to': `${openProject}/edit/elements`
        },
        {
            'id': 3,
            'icon': 'color-palette-outline',
            'label': 'Color',
            'to': `${openProject}/edit/color`
        },
        {
            'id': 4,
            'icon': 'color-wand-outline',
            'label': 'Style',
            'to': `${openProject}/edit/style`
        },
        {
            'id': 5,
            'icon': 'eye-outline',
            'label': 'Preview',
            'to': `/preview`
        },
        {
            'id': 6,
            'icon': 'cloud-upload-outline',
            'label': 'Upload',
            'to': `${openProject}/edit/upload`
        }

    ];
    return (<>
        <div className="col-1 p-0 side-bar left bg-dark">
            <div className="box-holder">
                {actions.map((item, key) => (
                    <NavLink to={item.to} key={key}  className= "box disabeled">
                        <ion-icon name={item.icon} /><br />{item.label}
                    </NavLink>
                ))}
            </div>
        </div >
    </>);
}