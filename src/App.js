import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import Services from './components/Services';
import Teams from './components/Teams';
import Project from './components/Project';
import Clients from './components/Clients';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Main />
        <Services />
        <Teams />
        <Project />
        <Clients />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
