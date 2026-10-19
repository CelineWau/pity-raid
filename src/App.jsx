import './App.css'
import Eclat from './Eclat'

function App() {

  return (
   <div>
    <h1>Calculateur de clémence</h1>
    <Eclat
      nom= "Eclats Antiques"
      raretes={[
        { cle:"antique-epique", nom:"Epique", base:8, seuil:20, bonus:2},
        { cle:"antique-legendaire", nom:"Légendaire", base:0.5, seuil:200, bonus:5},
      ]}
    />

     <Eclat
      nom= "Eclats Néants"
      raretes={[
        { cle:"neant-epique", nom:"Epique", base:8, seuil:20, bonus:2},
        { cle:"neant-legendaire", nom:"Légendaire", base:0.5, seuil:200, bonus:5},
      ]}
    />


    <Eclat
      nom= "Eclats Sacrés"
      raretes={[
        { cle:"sacre-legendaire", nom:"Légendaire", base:6, seuil:12, bonus:2},
      ]}
    />

    <Eclat
      nom= "Eclats Primordiaux"
      raretes={[
        { cle:"primordiaux-legendaire", nom:"Légendaire", base:1, seuil:75, bonus:1},
        { cle:"primordiaux-mythique", nom:"Mythique", base:0.5, seuil:200, bonus:10},
      ]}
    />
  </div>
  );
}

export default App
