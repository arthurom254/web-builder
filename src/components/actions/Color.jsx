import { useState } from "react";
export default function Color() {
    const [color, setColor] = useState('unset');
    const [colorbg, setColorBg] = useState('unset');

    return <>
        <div className="text-head text-light">Text Color</div>
        <div className="editor-grid row">
            <div className="editor-box mx-auto col-10" style={{ background: color }}>
                <div className="content">
                    <p className="text-dark bg-light">color:{color};</p>
                    <input type="color" name="text_color" id="text_color" onChange={(event) => (setColor(event.target.value))} className="w-100 border-0" placeholder="Click to pick color" />
                </div>

            </div>
        </div>
        <div className="text-head text-light">Background Color</div>
        <div className="editor-grid row">
            <div className="editor-box mx-auto col-10" style={{ background: colorbg }}>
                <div className="content">
                    <p className="text-dark bg-light">background-color:{colorbg};</p>
                    <input type="color" name="bg_color" id="bg_color" onChange={(event) => (setColorBg(event.target.value))} className="w-100 border-0" placeholder="Click to pick color" />
                </div>
            </div>
        </div>
    </>
}