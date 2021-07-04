// import from modules
import { useState, useEffect } from 'react';

// import Styles
import '../css/Dropbox.css';

// import Components
import Username from './Tools/Username'
import Password from './Tools/Password';
import Email from './Tools/Email';



const Dropbox = ({getForm}) => {

    const customTools = [
        <Email></Email>, <Username></Username>, <Password></Password>
    ];

    const [Tools, setTools] = useState([]);

    useEffect(()=>{
        getForm(Tools)
    },[getForm, Tools])

    const drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("form-field");
        let nodeCopy = document.getElementById(data);

        renderTool(nodeCopy.id);
    }

    const allowDrop = (e) => {
        e.preventDefault();
    }

    const renderTool = (id) =>{
        if(id === 'email'){
            setTools(Tools => [...Tools, customTools[0]])
        }
        else if(id === 'username'){
            setTools(Tools => [...Tools, customTools[1]])
        }
        else{
            setTools(Tools => [...Tools, customTools[2]])
        }
    }


    let id = -1;

    return ( 
        <div className='dropbox'>
            <h2>Drop Box</h2>
            
            <div className='drop-items' onDrop={drop} onDragOver={allowDrop}>
                {Tools.map((item)=>
                    
                    {   id++;
                        return(
                        <div key={id} id={`form-field-${id}`} className='form-field'>
                            {item}
                        </div>
                    )}
                )}
            </div>
        </div>
     );
}
export default Dropbox;