// import Styles
import '../css/Dropbox.css';

// import Components
import Username from './Tools/Username'


const Dropbox = () => {



    let elementId = 0;
    let Tools = [
        <Username></Username>,

    ];
    console.log(Tools[0]);

    const drop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData("form-field");
        let nodeCopy = document.getElementById(data).cloneNode(true);
        
        // console.log(nodeCopy);
        // console.log(Username);
        
        nodeCopy.id = elementId; 
        e.target.appendChild(nodeCopy);

        elementId++;
    }

    const allowDrop = (e) => {
        e.preventDefault();
    }



    return ( 
        <div className='dropbox'>
            <h2>Drop Box</h2>
            <div className='drop-items' onDrop={drop} onDragOver={allowDrop}>

            </div>
        </div>
     );
}
 
export default Dropbox;