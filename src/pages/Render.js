// import Styles
import "../css/Render.css";

// import Modules
import { Link } from "react-router-dom";

const Render = (props) => {
  return (
    <div className='final-form'>
      <div className="form">
        <form action="submit">{props.form}</form>
      </div>
      <div className='link-home'>
        <Link to="/">Go back to home page</Link>
      </div>
    </div>
  );
};

export default Render;
