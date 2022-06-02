import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import './styles/App.css';
import Init from './components/Header';
import Prices from './components/Prices';
import Products from './components/ListProducts';
function App() {
  return (
    <div className="App">
      
      <HashRouter>
        <Routes>
          <Route path='/' element={ <Init/> } />
          <Route path='/prices' element={ <Prices/> } />
          <Route path='/products' element={ <Products/> } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
