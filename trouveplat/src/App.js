import Accueil from './Accueil'
import FormResto from './FormResto';
import Itineraire from './Itinenaire';
import Resto from './Resto'
import AdminListePlat from './AdminListePlat';
import AdminApp from './AdminApp';
import Mescommande from './Mescommande';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/Resto' element={<Resto />} />
        <Route path='/Itineraire' element={<Itineraire />} />
        <Route path='/FormResto' element={<FormResto />} />
        <Route path='/AdminListePlat' element={<AdminListePlat />} /> 
        <Route path='/AdminApp' element={<AdminApp />} /> 
         <Route path='/Mescommande' element={<Mescommande />} /> 
        
      </Routes>
    </div>
  );
}

export default App;