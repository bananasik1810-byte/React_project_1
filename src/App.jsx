import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cardcomponent from './components/Cardcomponent';


function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <header className="bg-dark text-white py-3">
        <div className="container">
          <div className="row align-item-center">
            <div className="col">
              <span>Мое приложение</span>
            </div>
            </div>
        </div>
      </header>
      <main className="container my-5">
        <div className="row g-4">
          <div className="col-md-4">
            <Cardcomponent
            title="Лягушка 1"
            imageUrl = "/images/1.jpg"
            description="Это самая крутая лягушка номер 1"
            imageAlt="Лягушка 1"></Cardcomponent>
          </div>
          <div className="col-md-4">
            <Cardcomponent
            title="Лягушка 2"
            imageUrl = "/images/2.jpg"
            description="Это самая крутая лягушка номер 2 Это самая крутая лягушка номер 2 Это самая крутая лягушка номер 2 Это самая крутая лягушка номер 2 Это самая крутая лягушка номер 2"
            imageAlt="Лягушка 2"></Cardcomponent>
          </div>
          <div className="col-md-4">
            <Cardcomponent
            title="Лягушка 3"
            imageUrl = "/images/3.jpg"
            description="Это самая крутая лягушка номер 3"
            imageAlt="Лягушка 3"></Cardcomponent>
          </div>
        </div>
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
  );
}

export default App;
