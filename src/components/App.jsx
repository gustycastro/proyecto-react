
import './App.css';
import { NavBar } from './NavBar/NavBar';
import { ItemListConteiner } from './ItemListConteiner/ItemListConteiner';

export function App() {
  return (
    <div>
      <NavBar />
      <ItemListConteiner greeting={"Bienvenidos"}/>
    </div> 
  );
}


