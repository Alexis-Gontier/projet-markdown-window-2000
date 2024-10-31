import React, { useState, useEffect } from "react";
import popAPI from "../../utils/popAPI";
import '../../styles/popup.css';

export default function PopAPI() {
    const [visible, setVisible] = useState(false);
    const { positionX, positionY, ComponentRandom } = popAPI();

    useEffect(() => {
        const showPopup = () => {
            setVisible(true);
        };

        const hidePopup = () => {
            setVisible(false);
        };
        const startPopupInterval = () => {
            const interval = setInterval(() => {
                showPopup();
                setTimeout(hidePopup, 50000); 
            }, Math.floor(Math.random() * (75000 - 45000 + 1)) + 45000); 
            return interval;
        };
        const intervalId = startPopupInterval();
        return () => clearInterval(intervalId); 
    }, []);

    return (
        <div>
            {visible && (
                <div
                    className={`pop-up ${visible ? 'visible' : ''}`}
                    style={{
                        position: 'fixed',
                        top: `${positionY}px`, 
                        left: `${positionX}px`, 
                        zIndex: 50,
                    }}>
                    <ModalAPI onClose={() => setVisible(false)}>
                        <ComponentRandom />
                    </ModalAPI>
                </div>
            )}
        </div>
    );
}

function ModalAPI({ children, onClose }) {
    return (
        <div className="relative w-96 bg-[#D7D0C8] border border-red-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#000]">
            <div className="p-px">
                <div className="w-full h-8 px-2 py-0 bg-gradient-to-r from-[#000181] to-[#1084d0] flex justify-between items-center">
                    <p className="text-white text-base">Pop UP</p>
                    <button onClick={onClose} className="text-white">x</button>
                </div>
                <div className="w-full h-full flex flex-col items-center">
                    {children}
                </div>
            </div>
        </div>
    );
}
