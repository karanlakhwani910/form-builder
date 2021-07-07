// import from modules
import { useState, useEffect } from 'react';

// import Styles
import '../css/Dropbox.css';

// import Components
import Username from './Tools/Username'
import Password from './Tools/Password';
import Email from './Tools/Email';
import Submit from './Tools/Submit';
import FirstName from './Tools/FirstName';
import LastName from './Tools/LastName';
import Contact from './Tools/Contact';

const Dropbox = ({getInputs}) => {


    const [inputs, setInputs] = useState([]);

    useEffect(()=>{
        getInputs(inputs)
    },[ inputs, getInputs ])

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
            setInputs( inputs => [ ...inputs, 'email']  )  
            
        }
        else if(id === 'username'){
            setInputs( inputs => [ ...inputs, 'username'])    
        }
        else if(id === 'password'){
            setInputs( inputs => [ ...inputs, 'password'] )   
        }
        else if(id === 'submit'){
            setInputs( inputs => [ ...inputs, 'submit']  )  
        }
        else if(id === 'fname'){
            setInputs( inputs => [ ...inputs, 'fname'] )   
        }
        else if(id === 'lname'){
            setInputs( inputs => [ ...inputs, 'lname'])    
        }
        else if(id === 'contact'){
            setInputs( inputs => [ ...inputs, 'contact']) 
        }
    }


    return ( 
        <div className='dropbox'>
            <h2>Drop Box</h2>
            
            <div className='drop-items' onDrop={drop} onDragOver={allowDrop}>
                
                {
                    inputs.map((input)=>{
                        if (input === 'fname') {
                            return (
                                <div key={input} className='form-field'>
                                    <FirstName ></FirstName>
                                </div>
                            )
                        }
                        else if(input === 'lname'){
                            return (
                                <div key={input} className='form-field'>
                                    <LastName ></LastName>
                                </div>
                            )
                        }
                        
                        else if(input === 'email'){
                            return (
                                <div key={input} className='form-field'>
                                    <Email ></Email>
                                </div>
                            )
                        }
                        else if(input === 'username'){
                            return (
                                <div key={input} className='form-field'>
                                    <Username ></Username>
                                </div>
                            )
                        }
                        else if(input === 'contact'){
                            return (
                                <div key={input} className='form-field'>
                                    <Contact ></Contact>
                                </div>
                            )
                        }
                        else if(input === 'password'){
                            return (
                                <div key={input} className='form-field'>
                                    <Password ></Password>
                                </div>
                            )
                        }
                        else if(input === 'submit'){
                            return (
                                <div key={input} className='form-field'>
                                    <Submit ></Submit>
                                </div>
                            )
                        }
                        return null;
                    })
                }
            </div>
        </div>
     );
}
export default Dropbox;