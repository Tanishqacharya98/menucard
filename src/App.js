import './App.css';
import Fit from './components/fit';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuCards from './components/MenuCards/MenuCards';
import 'animate.css';
import Card from './components/RoughCard/Card';
import MealSearch from './cards/MealSearch';
import MealBox from './components/fitness/MealBox';
import ParentComponent from './components/fitness/ParentComponent';
import Menu from './components/MenuCards/Menu';
import '../src/components/MenuCards/responsive.css';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route path='/' element={<Fit />} /> */}
        {/* <Route path='/' element={<MenuCards />} /> */}
        {/* <Route path='/' element={<Card />} /> */}
        {/* <Route path='/' element={<MealSearch />} /> */}
        {/* <Route path='/' element={<MealBox />} /> */}
        {/* <Route path='/' element={<ParentComponent />} /> */}
        <Route path='/' element={<Menu />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
