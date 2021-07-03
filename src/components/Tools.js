// import Styles
import '../css/Tools.css'

const Tools = () => {

    const tools = [
        {
            name:'email',
            type:'email',
            label:'Email'
        },
        {
            name:'password',
            type:'password',
            label:'Password'
        },
        {
            name:'username',
            type:'text',
            label:'Username'
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
                            {tool.label}
                        </li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default Tools;