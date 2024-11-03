import Icon from '../Icon/Icon'
import speaker from "../../../assets/images/speaker.png"
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

export default function Interface() {
    const [keys, setKeys] = useState([]);
    const [fileName, setFileName] = useState('');

    useEffect(() => {
        const localStorageKeys = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            localStorageKeys.push(key);
        }
        setKeys(localStorageKeys);
    }, []);

    const handleNewFileClick = () => {
        if (fileName.trim() !== '') {
            localStorage.setItem(fileName, '');
            setFileName('');
        } else {
            alert('Veuillez entrer un nom de fichier.');
        }
    };

    return (
        <div className="bg-[#D7D0C8] w-[600px] h-[400px] flex flex-col border-2 border-t-[#fff] border-r-[#808080] border-b-[#808080] border-l-[#fff] shadow-[1px_1px_0px_1px_#000]">
            <div className="h-10 p-2 m-1 bg-gradient-to-r from-[#000181] to-[#1084d0] flex justify-between items-center">
                <p className="text-white">Computer</p>
                <Link to={"/"} className="group bg-[#D7D0C8] max-h-full px-2 flex justify-center items-center gap-1 border-2 border-t-[#fff] border-r-[#808080] border-b-[#808080] border-l-[#fff] shadow-[1px_1px_0px_1px_#000] focus:bg-[#c7c1ba] focus:border-t-[#808080] focus:border-r-[#fff] focus:border-b-[#fff] focus:border-l-[#808080] focus:shadow-[0px_0px_0px_0px_#000] focus:translate-x-px focus:translate-y-px">x</Link>
            </div>
            <div className="bg-white h-full ">
                <div className="flex flex-col gap-2 py-2" >
                    <div className='flex items-center gap-2 p-1'>
                    <input
                        type="text"
                        value={fileName}
                        onChange={(e) => setFileName(e.target.value)}
                        placeholder="Entrez le nom du fichier"
                        className=" h-full w-1/2 py-2 px-2 border-2 border-t-[#f2f2f2] border-r-[#808080] border-b-[#808080] border-l-[#f2f2f2]  focus:outline-none focus:ring-0 focus:shadow-none"
                    />
                    <button onClick={handleNewFileClick} className="group bg-[#D7D0C8] h-full w-1/2 py-1 px-2 flex justify-center items-center gap-1 border-2 border-t-[#f2f2f2] border-r-[#808080] border-b-[#808080] border-l-[#f2f2f2] shadow-[1px_1px_0px_1px_#000] focus:bg-[#c7c1ba] focus:border-t-[#808080] focus:border-r-[#fff] focus:border-b-[#fff] focus:border-l-[#808080] focus:shadow-[0px_0px_0px_0px_#000] focus:translate-x-px focus:translate-y-px">Nouveau fichier</button>
                    </div>
                    <div className='flex flex-wrap gap-2 p-2'>
                        {keys.map((key, index) => (
                            <Icon key={index} image={speaker} text={key} link={`/dashboard/${key}`} style={"text-black"} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
