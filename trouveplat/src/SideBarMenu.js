// src/Sidebar.js

import './Sidebar.css';
import gourmet from './gourmet.jpg'
import { IoHome } from "react-icons/io5";
import { LuClipboardList } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoChecklist } from "react-icons/go";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
/*import dishlogo from './dishlogo.png';*/
function SideBarMenu() {
    return (
        <div>
                    <div className='side'>
                        <div className='hd'>
                            <div className='logo'>
                               {/* <img src={dishlogo} alt='' style={{width:50,borderRadius:100}}></img>*/}
                                <br></br>
                                </div>
                            <div className='sr'>
                                <input type='text' placeholder='Rechercher un Client' className='search'></input>
                                <button className='btn ' style={{backgroundColor:'#E84710',color:'white'}}>Rechercher</button>
                                

                            </div>

                        </div>
                           <div className='sidebar'>
                        <div className='proprio'>
                            <img src={gourmet} alt='' style={{borderRadius:100}} className='im'></img><br></br>
                            <p style={{fontWeight:'bold',fontSize:20}}>Stella Gourmet</p><br></br>

                        </div >
                           

                            <div className='menu'>
                                <ul>
                                   <Link to='/ListeClient'> <li><span><IoHome /></span><span>.</span>  Listes Des Clients</li></Link>
                                   <Link to='/AdminListePlat'> <li><span><LuClipboardList /></span><span>.</span>Listes des Plat</li></Link>
                                    <Link to='CommandeCour' ><li><span><IoMdNotificationsOutline /></span><span>.</span>Commande en Cour</li></Link>
                                    <Link to='CommandeEffectue' ><li><span><GoChecklist /></span><span>.</span>Commande Effectué</li></Link>
                                    
                                </ul>
                            </div>
                        
                    </div>

                    </div>
                    
                 
        </div>
        
    );
};

export default SideBarMenu;