function Rarete({nom, base, seuil, bonus, type, compteur, onObtenu}) {

    const chance = compteur < seuil ? base : Math.min(100, base + (compteur - (seuil - 1)) * bonus);
    
    return (
        <div className={`rarete rarete-${type}`}>
            <h3>{nom}</h3>
            <p>{compteur} invocations sans {nom}</p>
            <p>Chance actuelle</p>
            <p className="chance">{chance} %</p>
            <button className="bouton-obtenu" onClick={() => onObtenu()}>{nom} obtenu !</button>
        </div>
    );
}

export default Rarete;