import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = "Ellen";

  return (
    <div className="App">
      <h1>Testando o CSS</h1>
      <Frase />
      <Frase />
      <SayMyName nome="Davi" />
      <SayMyName nome="Aline" />
      <SayMyName nome={nome} />
      <Pessoa nome="Davi" idade="23" profissao="Desenvolvedor Web" foto="https://avatars.githubusercontent.com/u/35413910?v=4"/>
      <List />
    </div>
  );
}

export default App;