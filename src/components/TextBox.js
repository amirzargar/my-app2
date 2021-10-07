import React, {useState} from 'react'


export default function TextBox(props) {
   

    const RmExtraSpaces =()=>{

        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!","success");
    }
        const handleCopy=()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");
    }

    const handleClearclick = ()=>{
        
        setText(" ");
        props.showAlert("Cleared!","success");


    }
    const handleUpclick = ()=>{
        
        setText(text.toUpperCase());
        props.showAlert("Converted To uppercase!","success");


    }
    
    const handleLowclick = ()=>{
        
        setText(text.toLowerCase());
        props.showAlert("Converted To lowercase!","success");


    }
    const handleBoldclick = ()=>{
        
        setText(text.bold());


    }
    const handleOnchange = (event)=>{
       
        setText(event.target.value)

    }

    const [text, setText] = useState('');

    
    


    return (
        
        <>
       
        
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 >{ props.defValue }</h1>
        
     <div >
        <textarea className = "form-control" onChange={handleOnchange}value={text} id= "myBox" rows ="10" 
        style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}}></textarea>
        <br/>
        <button className="btn btn-primary mx-2" onClick={handleUpclick } ><strong>Convert to UpperCase</strong></button>
        <button className="btn btn-primary mx-2" onClick={handleLowclick}><strong>Convert to LowerCase</strong></button>
        <button className="btn btn-primary mx-2" onClick={handleBoldclick}><strong>B</strong></button>
        <button className="btn btn-primary mx-2" onClick={handleClearclick}><strong>Clear Text</strong></button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}><strong>Copy Text</strong></button>
        <button className="btn btn-primary mx-2" onClick={RmExtraSpaces}><strong>-Spaces</strong></button>
    </div>
    </div> 
    <div className="container my-3 " style={{color:props.mode==='dark'?'white':'#042743'}}>
        <p>
            {text.length} no. of characters
        </p>
        <p>
            {text.split(" ").length} no of words
        </p>
        <p> {.08*text.split(" ").length} time to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text in the Box above to Preview it!"}</p>
    </div> 
    </>
    )
}
