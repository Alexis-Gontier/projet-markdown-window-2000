import { useState } from "react";
import { marked } from "marked";




function Markdown() {
    const [input, setInput] = useState('# test');

    function gererInput(e) {
        const nouvelleValeur = e.target.value;
        setInput(nouvelleValeur);
    }

    return (
        <div id="content" className="z-10">
            <textarea
                value={input}
                onChange={gererInput}
                rows="10"
                cols="500"
                className="z-100"
            />
            <div style={{border: '1px solid #CCC', borderRadius: '3px', minHeight: "150px"}} dangerouslySetInnerHTML={{ __html: marked.parse(input) }} />
        </div>
    )
}

export default Markdown;