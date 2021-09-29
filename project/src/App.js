import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Ellen";

  return (
    <div className="App">
      <SayMyName nome="Davi" />
      <SayMyName nome="Aline" />
      <SayMyName nome={nome} />
      <Pessoa nome="Davi" idade="23" profissao="Desenvolvedor Web" foto="https://avatars.githubusercontent.com/u/35413910?v=4"/>
    </div>
  );
}

export default App;