import React from 'react';

import { Route, Routes } from 'react-router-dom';
import ListeClient from './ListeClient';
import AdminListePlat from './AdminListePlat';
import CommandeEffectue from './CommandeEffectue';
import CommandeCour from './CommandeCour';
import SideBarMenu from './SideBarMenu';

function AdminApp() {

  return (
    <div>
      <SideBarMenu />   
        
      <Routes>
        <Route path='/ListeClient' element={<ListeClient />} />  
        <Route path='/AdminListePlat' element={<AdminListePlat />} />
        <Route path='/CommandeEffectue' element={<CommandeEffectue />} />
        <Route path='/CommandeCour' element={<CommandeCour />} />
         
      </Routes>
    </div>
    
  );
}

export default AdminApp;