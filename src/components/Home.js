import React, { useState } from 'react';

const Home = (props) => {

    document.title = "TextUtils | Home";

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        if (wordCounter > 0) {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to Uppercase!", "success");
        }
        else {
            props.showAlert("Please enter some value", "warning");
        }
    }

    const handleLowerClick = () => {
        if (wordCounter > 0) {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to Lowercase!", "success");
        }
        else {
            props.showAlert("Please enter some value", "warning");
        }
    }

    const handleCopy = () => {
        if (wordCounter > 0) {
            let copyText = document.getElementById("mybox");
            // copyText.select();
            navigator.clipboard.writeText(copyText.value);
            props.showAlert("Text copied successfully", "success");
        }
        else {
            props.showAlert("Please enter some value", "warning");
        }
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ").trim());
    }

    const handleClear = () => {
        setText("");
    }

    const [text, setText] = useState("");

    // let wordCounter = text.split("/\s+/").filter((element)=>{return element.length>0}).length;
    let wordCounter = text.split(/\s+/).filter(e=>e).length;

    return (
        <>
            <div className="container">
                <h2 className='my-3'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea rows="8" id='mybox' className="form-control" onChange={handleOnChange} value={text} style={{ backgroundColor: props.mode === "dark" ? "#212529" : "white", color: props.mode === "dark" ? "white" : "black" }} ></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowerClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy to Clipboard</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear all</button>
            </div>

            <div className="container my-4">
                <h3><b>Your text summary</b></h3>
                <p>{wordCounter} words and {text.length} characters</p>
                <p>{0.008 * wordCounter} Minutes read</p>
                <h4><b>Preview</b></h4>
                <p>{wordCounter > 0 ? text : "Enter something to preview it here"}</p>
            </div>

        </>
    )
}

export default Home