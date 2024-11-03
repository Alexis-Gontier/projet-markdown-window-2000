import { useState, useEffect } from "react";
import popAPI from "../../utils/popAPI";
import '../../styles/popup.css';
import PropTypes from 'prop-types';

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
        <div className="relative w-96 bg-[#D7D0C8] w-[600px] flex flex-col border-2 border-t-[#fff] border-r-[#808080] border-b-[#808080] border-l-[#fff] shadow-[1px_1px_0px_1px_#000]">
            <div className="p-px">
                <div className="w-full h-10 p-2 py-0 bg-gradient-to-r from-[#000181] to-[#1084d0] flex justify-between items-center">
                    <p className="text-white text-base">Pop UP</p>
                    <button onClick={onClose} className="group bg-[#D7D0C8] max-h-full px-2 flex justify-center items-center gap-1 border-2 border-t-[#fff] border-r-[#808080] border-b-[#808080] border-l-[#fff] shadow-[1px_1px_0px_1px_#000] focus:bg-[#c7c1ba] focus:border-t-[#808080] focus:border-r-[#fff] focus:border-b-[#fff] focus:border-l-[#808080] focus:shadow-[0px_0px_0px_0px_#000] focus:translate-x-px focus:translate-y-px">x</button>
                </div>
                <div className="w-full h-full flex flex-col items-center">
                    {children}
                </div>
            </div>
        </div>
    );
}

ModalAPI.propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
};