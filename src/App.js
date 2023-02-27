import { Route, Routes } from 'react-router-dom'
import Create from './companets/Create';
import Footer from "./companets/Footer/Footer";
import Header from "./companets/Header/Header";
import NavbarDos from './companets/Navbar/Navbar';
// import CreateData from './companets/Section/Section';

function App() {
  return (
    <>

   <NavbarDos/>
      <Routes>
        <Route path='/home' element={<Header/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/table' element={<Footer/>}/>
      </Routes>
      {/* <Create/> */}
    </>
  );
}
export default App;
