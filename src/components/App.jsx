
import './App.css';
import './NavBar/navbar.css';
import 'react-toastify/dist/ReactToastify.css';

//Route
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Context
import { DarkModeProvider } from '../context/DarkModeContext.js';

//React Toastify
import { ToastContainer } from 'react-toastify';

//componentes
import { NavBar } from './NavBar/NavBar';
import { ItemListConteiner } from './ItemListConteiner/ItemListConteiner';
import { ItemDetailConteiner } from './ItemDetailConteiner/ItemDetailConteiner';
import { Checkout } from './Checkout/Checkout';
import { Cart } from './Cart/Cart';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <DarkModeProvider>
          <NavBar />
          <ToastContainer />
          <Routes>
            <Route path='/' element={<ItemListConteiner/>} />
            <Route path='/category/:category' element={<ItemListConteiner />} />
            <Route path='/product/:id' element={<ItemDetailConteiner />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Routes>
        </DarkModeProvider>
      </BrowserRouter>
    </div> 
  );
}


