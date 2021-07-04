// import Styles
import '../css/Tools.css'


const Tools = () => {

    const tools = [
        {
            name:'email',
            type:'email',
            label:'Email',
            className: 'far fa-envelope'
        },
        {
            name:'username',
            type:'text',
            label:'Username',
            className:'far fa-user'
        },
        {
            name:'password',
            type:'password',
            label:'Password',
            className:'far fa-lock'
        }
        
    ];

    const drag = (e) => {
        e.dataTransfer.setData('form-field', e.target.id);
    }

    return ( 
        <div className='tools'>
            <h2>Tool Box</h2>
            <ul>
                {tools.map((tool)=>{
                    return(
                        <li id={tool.name} draggable='true' onDragStart={drag} key={tool.name} className='tool'>
                            <i className={tool.className}></i>&nbsp;
                            {tool.label}
                        </li>
                    )
                })}
                
            </ul>
        </div>
     );
}
 
export default Tools;