import { Route, Routes } from 'react-router-dom'
import Create from './companets/Create';
import EditeData from './companets/Edite/Editedata';
import Footer from "./companets/Footer/Footer";
import NavbarDos from './companets/Navbar/Navbar';

function App() {
  return (
    <>

   <NavbarDos/>
      <Routes>
        <Route path='/create' element={<Create/>}/>
        <Route path='/table' element={<Footer/>}/>
        <Route path='/table/editetable/:id' element={<EditeData/>}/>
      </Routes>
    </>
  );
}
export default App;
