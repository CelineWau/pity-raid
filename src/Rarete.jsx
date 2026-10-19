import { useEffect, useState } from "react";

function Rarete({cle, nom, base, seuil, bonus}) {
    const [compteur, setCompteur] = useState(() => {
        const sauvegarde = localStorage.getItem(cle);
        return sauvegarde ? Number(sauvegarde) : 0;
    });

    useEffect(() => {
        localStorage.setItem(cle, compteur);
    }, [compteur, cle]);

    const chance = compteur < seuil ? base : Math.min(100, base + (compteur - (seuil - 1)) * bonus);
    
    return (
        <div>
            <h3>{nom}</h3>
            <p>{compteur} invocations sans {nom}</p>
            <p>Chance actuelle : {chance} %</p>
            <button onClick={() => setCompteur(c => c + 1)}>+1</button>
            <button onClick={() => setCompteur(c => c + 10)}>+10</button>
            <button onClick={() => setCompteur(0)}>{nom} obtenu !</button>
        </div>
    );
}

export default Rarete;