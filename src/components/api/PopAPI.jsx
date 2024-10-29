import React, { useState, useEffect } from "react";
import popAPI from "../../utils/popAPI";
import '../../styles/popup.css';

export default function PopAPI() {
    const [visible, setVisible] = useState(false); // Le pop-up est caché par défaut
    const { positionX, positionY, ComponentRandom } = popAPI(); // Récupérer les positions

    useEffect(() => {
        // Définir un délai aléatoire entre 5 et 10 secondes
        const timeout = setTimeout(() => {
            setVisible(true); // Rendre le pop-up visible
        }, Math.floor(Math.random() * (5000)) + 5000); // 5000 ms (5s) à 10000 ms (10s)

        // Nettoyer le timeout à la désinstallation du composant
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            {visible && (
                <div
                    className={`pop-up ${visible ? 'visible' : ''}`}
                    style={{
                        position: 'fixed',
                        top: `${positionY}px`, // Utiliser les valeurs en pixels
                        left: `${positionX}px`, // Utiliser les valeurs en pixels
                        zIndex: 50,
                    }}
                >
                    <ModalAPI>
                        <ComponentRandom />
                    </ModalAPI>
                </div>
            )}
        </div>
    );
}

function ModalAPI({ children }) {
    return (
        <div className="relative w-96 bg-[#D7D0C8] border border-red-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#000]">
            <div className="p-px">
                <div className="w-full h-8 px-2 py-0 bg-gradient-to-r from-[#000181] to-[#1084d0] flex justify-between items-center">
                    <p className="text-white text-base">Pop UP</p>
                    <button onClick={() => setVisible(false)} className="text-white">x</button>
                </div>
                <div className="w-full h-full flex flex-col items-center">
                    {children}
                </div>
            </div>
        </div>
    );
}