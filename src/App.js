import './App.css';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Skills />
    </div>
  );
}

export default App;
