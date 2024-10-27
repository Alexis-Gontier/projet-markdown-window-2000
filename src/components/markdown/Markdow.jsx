import { useState } from "react";
import { marked } from "marked";




function Markdown() {
    const [input, setInput] = useState('');

    function gererInput(e) {
        const nouvelleValeur = e.target.value;
        setInput(nouvelleValeur);
    }

    return (
        <div id="content">
            <textarea 
                value={input}
                onChange={gererInput}
                rows="10" 
                cols="500"
            />
            <div style={{border: '1px solid #CCC', borderRadius: '3px', minHeight: "150px"}} dangerouslySetInnerHTML={{ __html: marked.parse(input) }} />
        </div>
    )
}

export default Markdown;