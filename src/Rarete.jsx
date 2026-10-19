function Rarete({nom, base, seuil, bonus, compteur, onObtenu}) {

    const chance = compteur < seuil ? base : Math.min(100, base + (compteur - (seuil - 1)) * bonus);
    
    return (
        <div>
            <h3>{nom}</h3>
            <p>{compteur} invocations sans {nom}</p>
            <p>Chance actuelle : {chance} %</p>
            <button onClick={() => onObtenu()}>{nom} obtenu !</button>
        </div>
    );
}

export default Rarete;