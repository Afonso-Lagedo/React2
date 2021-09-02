import logo from './logo.svg';
import './App.css';

import Componente from './components/Componente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Componente titulo="Teste de recebimento props"/>{/*passing props*/}
      </header>
    </div>
  );
}

export default App;
