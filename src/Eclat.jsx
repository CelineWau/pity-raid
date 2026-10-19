import { useState, useEffect } from "react";
import Rarete from "./Rarete";

function Eclat ({type, nom, raretes}) {
    const [compteurs, setCompteurs] = useState(() => {
        const initial = {};
        raretes.forEach(r => {
            const sauvegarde = localStorage.getItem(r.cle);
            initial[r.cle] = sauvegarde ? Number(sauvegarde) : 0;
        });
        return initial;
    });

    useEffect(() => {
        raretes.forEach(r => {
            localStorage.setItem(r.cle, compteurs[r.cle]);
        });
    }, [compteurs, raretes]);

    function invoquer(nombre) {
        setCompteurs(anciens => {
            const nouveaux = {};
            for (const cle in anciens) {
                nouveaux[cle] = anciens[cle] + nombre;
            }
            return nouveaux;
        });
    }

    function reinitialiser(cle) {
        setCompteurs(anciens => ({...anciens, [cle]: 0}));
    }

    return (
        <div className={`eclat eclat-${type}`}>
            <h2>{nom}</h2>
            <div className="boutons-invocation">
                <button onClick={() => invoquer(1)}>+ 1</button>
                <button onClick={() => invoquer(10)}>+ 10</button>
            </div>
            <div className="raretes">
                {raretes.map(r => (
                    <Rarete
                        key={r.cle}
                        nom={r.nom}
                        base={r.base}
                        seuil={r.seuil}
                        bonus={r.bonus}
                        type={r.type}
                        compteur={compteurs[r.cle]}
                        onObtenu={() => reinitialiser(r.cle)}
                    />
                ))}
            </div>
            
        </div>
    );
}

export default Eclat;