import './App.css';
import Home from './components/Home/Home';
import { Routes, Route} from "react-router-dom";
import FavList from './components/FavList/FavList';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favlist" element={<FavList />} />
      </Routes>
    </div>
  );
}

export default App;
