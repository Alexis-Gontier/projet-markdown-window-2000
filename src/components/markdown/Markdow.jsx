import { useState, useEffect } from "react";
import { marked } from "marked";
import { Link, useParams } from 'react-router-dom'



function Markdown() {
    const { id } = useParams();
    const [input, setInput] = useState('');

    useEffect(() => {
        const contenuSauvegarde = localStorage.getItem(`markdown-${id}`);
        if (contenuSauvegarde) {
            setInput(contenuSauvegarde);
        } else {
            setInput('# test'); 
        }
    }, [id]);

    function gererInput(e) {
        const nouvelleValeur = e.target.value;
        setInput(nouvelleValeur);
    }

    function sauvegarderInput() {
        localStorage.setItem(`markdown-${id}`, input);
        alert("Contenu sauvegardé");
    }

    function supprimerInput() {
        localStorage.removeItem(`markdown-${id}`);
        setInput(''); 
        alert("Contenu supprimé");
    }

    function chargerFichier(e) {
        const file = e.target.files[0];
        if (file && file.name.endsWith(".md")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setInput(e.target.result);
            };
            reader.readAsText(file);    
        } else {
            alert('Mettez un fichier markdown')
        }
    }

    return (
        <div className="fixed top-0 left-0 h-screen w-full bg-[#D7D0C8]">
            <div className="flex p-1 flex-col gap-1 w-full h-full">
                <div className="w-full h-10 p-2 py-0 bg-gradient-to-r from-[#000181] to-[#1084d0] flex justify-between items-center">
                    <h2 className="text-white">
                        Bloc-note
                    </h2>
                    <Link to={"/dashboard"} className="group bg-[#D7D0C8] max-h-full px-2 flex justify-center items-center gap-1 border-2 border-t-[#fff] border-r-[#808080] border-b-[#808080] border-l-[#fff] shadow-[1px_1px_0px_1px_#000] focus:bg-[#c7c1ba] focus:border-t-[#808080] focus:border-r-[#fff] focus:border-b-[#fff] focus:border-l-[#808080] focus:shadow-[0px_0px_0px_0px_#000] focus:translate-x-px focus:translate-y-px">x</Link>
                </div>
                <div>
                <button onClick={sauvegarderInput}>Sauvegarder</button>
                <button onClick={supprimerInput}>Supprimer</button>
                <input type="file" accept=".md" onChange={chargerFichier} />
                </div>
                <div id="content" className="w-full h-full flex gap-1">
                    <textarea
                        value={input}
                        onChange={gererInput}
                        className="w-1/2 resize-none p-4"
                    />
                    <div dangerouslySetInnerHTML={{ __html: marked.parse(input) }} className="w-1/2 bg-red-500" />
                </div>
            </div>
        </div>
    )
}

export default Markdown;