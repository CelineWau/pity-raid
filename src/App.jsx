import './App.css'
import Eclat from './Eclat'

function App() {

  return (
   <div className='app'>
    <h1>Calculateur de clémence</h1>
    <div className='eclats'>
      <Eclat
        type="antique"
        nom= "Eclats Antiques"
        raretes={[
          { cle:"antique-epique", nom:"Epique", base:8, seuil:20, bonus:2, type:"epique"},
          { cle:"antique-legendaire", nom:"Légendaire", base:0.5, seuil:200, bonus:5, type:"legendaire"},
        ]}
      />

      <Eclat
        type="neant"
        nom= "Eclats Néants"
        raretes={[
          { cle:"neant-epique", nom:"Epique", base:8, seuil:20, bonus:2, type:"epique"},
          { cle:"neant-legendaire", nom:"Légendaire", base:0.5, seuil:200, bonus:5, type:"legendaire"},
        ]}
      />


      <Eclat
        type="sacre"
        nom= "Eclats Sacrés"
        raretes={[
          { cle:"sacre-legendaire", nom:"Légendaire", base:6, seuil:12, bonus:2, type:"legendaire"},
        ]}
      />

      <Eclat
        type="primordial"
        nom= "Eclats Primordiaux"
        raretes={[
          { cle:"primordiaux-legendaire", nom:"Légendaire", base:1, seuil:75, bonus:1, type:"legendaire"},
          { cle:"primordiaux-mythique", nom:"Mythique", base:0.5, seuil:200, bonus:10, type:"mythique"},
        ]}
      />
    </div>
  </div>
  );
}

export default App
