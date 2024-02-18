export default function ActionBar() {
    return (<><div className="col-3 side-bar" id="action-bar">
        <div className="text-head text-color-primary bg-dark">Pictures</div>
        <div className="editor-grid bg-dark row">
            <div className="editor-box col-4">
                <div className="content">
                    <img src="https://picsum.photos/500/500" width="100%" alt />
                </div>
                <p className="text-color-primary">Lorem</p>
            </div>
        </div>
        {/* <input type="color" id="colorPicker" /><div id="colorPreview" /> */}
        <button id="action-bar-close" onClick={()=>(document.getElementById('action-bar').style='width:0; display:none;')}><ion-icon name="caret-back-outline" /></button>
        {/* <button id="action-bar-close" data-bs-target="#action-bar" data-bs-toggle="collapse" aria-controls="action-bar" aria-expanded="false"><ion-icon name="caret-back-outline" /></button> */}
    </div></>);
}