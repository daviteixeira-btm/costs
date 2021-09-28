import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Davi';

  return (
    <div className="App">
      <h1>Olá Mundo! Olá React!</h1>
      <p>Esta é minha primeira página web com React!</p>
      <p>Olá, {name} </p>
      <HelloWorld />
    </div>
  );
}

export default App;
