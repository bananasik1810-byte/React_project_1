import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import CardComponent from './components/CardComponent';
import HomePage from './pages/HomePage';
import CardsPage from './pages/CardsPage';
import TablesPage from './pages/TablesPage';
import PeoplePage from './pages/PeoplePage';
import DescriptionPage from './pages/DescriptionPage';


function App() {
  return (
    <Router>
    <div className="App d-flex flex-column min-vh-100">
      <header className="text-white py-3" style={{backgroundColor: 'rgba(76, 172, 12, 1)'}}>
        <div className="container">
          <div className="row align-item-center">
            <div className="col-md-6">
              <span>Мое приложение</span>
            </div>
            <div className="col-md-6 text-end">
              <Link to="/" className="text-white text-decoration-none me-3">Главная страница</Link>
              <Link to="/cards" className="text-white text-decoration-none me-3">Лягушки</Link>
              <Link to="/tables" className="text-white text-decoration-none me-3">Таблички</Link>
              <Link to="/human" className="text-white text-decoration-none me-3">Человеки</Link>
              <Link to="/description" className="text-white text-decoration-none me-3">Описание</Link>
            </div>
            </div>
        </div>
      </header>
      <main className="container my-5">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/cards" element={<CardsPage/>}/>
          <Route path="/tables" element={<TablesPage/>}/>
          <Route path="/human" element={<PeoplePage/>}/>
          <Route path="/description" element={<DescriptionPage/>}/>
        </Routes>
      </main>
      <footer className="bg-secondary py-3 mt-auto">
        <div className="container">
          <div className="row align-item-center">
            <div className="col">
              <img src={logo} className="App-logo" alt="logo" style={{height: '40px'}}/>
              <span>2025, курсы Frontend</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;
