
import './App.css';
import './NavBar/navbar.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//componentes
import { NavBar } from './NavBar/NavBar';
import { ItemListConteiner } from './ItemListConteiner/ItemListConteiner';
import { ItemDetailConteiner } from './ItemDetailConteiner/ItemDetailConteiner';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<ItemListConteiner/>} />
            <Route path='/category/:category' element={<ItemListConteiner />} />
            <Route path='/product/:id' element={<ItemDetailConteiner />} />
        </Routes>
      </BrowserRouter>
    </div> 
  );
}


