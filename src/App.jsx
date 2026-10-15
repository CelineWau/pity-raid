import './App.css'
import Rarete from './Rarete'

function App() {

  return (
   <div>
    <h1>Calculateur de pity</h1>
    <h2>Eclats Antiques</h2>
    <Rarete nom="Epique" base={8} seuil={20} bonus={2}/>
    <Rarete nom="Légendaire" base={0.5} seuil={200} bonus={5}/>
    <h2>Eclats Néants</h2>
    <Rarete nom="Epique" base={8} seuil={20} bonus={2}/>
    <Rarete nom="Légendaire" base={0.5} seuil={200} bonus={5}/>
    <h2>Eclats Sacrés</h2>
    <Rarete nom="Légendaire" base={6} seuil={12} bonus={2}/>
    <h2>Eclats Primordiaux</h2>
    <Rarete nom="Légendaire" base={1} seuil={75} bonus={1}/>
    <Rarete nom="Mythique" base={0.5} seuil={200} bonus={10}/>
  </div>
  );
}

export default App
