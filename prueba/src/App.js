import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Bienvenido a AndoRamen!' />
      <ItemCount />
    </div>
  );
}

export default App;
