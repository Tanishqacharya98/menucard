import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'animate.css';
import Menu from './components/MenuCards/Menu';
import '../src/components/MenuCards/responsive.css';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
