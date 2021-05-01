import React, {useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory, Redirect } from 'react-router-dom'
import NavBar from './components/navbar/NavBar.jsx';
import SideBarMenu from './components/sidebarMenu/SideBarMenu.jsx';

export const App = () => {

    const history = useHistory();

    const dev = JSON.parse(localStorage.getItem('dev'));

    if(!dev){
         history.push('/')
    };
    
    console.log(dev)
    const [openMenu, setOpenMenu] = useState(false);

    const openSideMenu = () => {
        setOpenMenu(!openMenu)
    }
    const closeSideMenu = () => {
        setOpenMenu(false)
    }

    return (
      !dev.email ? <Redirect to={{pathname : "/"}} /> : 
      <div>
        <NavBar dev={dev}
            openSideMenu={openSideMenu}/> {
        openMenu ? ReactDOM.createPortal (<SideBarMenu closeSideMenu={closeSideMenu}/>, document.getElementById('react-portal')) : null
    } </div>
    )
};
