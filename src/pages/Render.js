// import Styles
import "../css/Render.css";
import { Table, Container } from "react-bootstrap";

// import Modules
import { Link } from "react-router-dom";
import { useState } from "react";

// import Component
import FirstName from "../components/Tools/FirstName";
import LastName from "../components/Tools/LastName";
import Email from "../components/Tools/Email";
import Username from "../components/Tools/Username";
import Contact from "../components/Tools/Contact";
import Password from "../components/Tools/Password";
import Submit from "../components/Tools/Submit";

const Render = ({ inputs }) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");


  const [details, setDetails] = useState([]);
  

  const getDetails = () => {
    setDetails([])
    for(let input of inputs){
      switch(input){
        case('fname'):
          setDetails(details=> [...details, first])
          break;
        case('lname'):
          setDetails(details => [...details, last])
          break;
        case('email'):
          setDetails(details => [...details, email])
          break;
        case('username'):
          setDetails(details => [...details, username])
          break;
        case('contact'):
          setDetails(details => [...details, contact])
          break;
        default:
          
      }
    
    }
  }

  return (
    <div className="final-form">
      <div className="form">
        <div>
          {inputs.map((input) => {
            if (input === "fname") {
              return (
                <div key={input} className="form-field">
                  <FirstName
                    getFname={(first) => setFirst(first)}
                    
                  ></FirstName>
                </div>
              );
            } else if (input === "lname") {
              return (
                <div key={input} className="form-field">
                  <LastName getLname={(last)=>setLast(last)} ></LastName>
                </div>
              );
            } else if (input === "email") {
              return (
                <div key={input} className="form-field">
                  <Email getEmail={(email)=> setEmail(email)} ></Email>
                </div>
              );
            } else if (input === "username") {
              return (
                <div key={input} className="form-field">
                  <Username getUsername={username => setUsername(username)} ></Username>
                </div>
              );
            } else if (input === "contact") {
              return (
                <div key={input} className="form-field">
                  <Contact getPhone = {(contact) => setContact(contact)} ></Contact>
                </div>
              );
            } else if (input === "password") {
              return (
                <div key={input} className="form-field">
                  <Password ></Password>
                </div>
              );
            } else if (input === "submit") {
              return (
                <div key={input} className="form-field">
                  <Submit getDetails={getDetails} ></Submit>
                </div>
              );
            }
            return null
          })}
        </div>
      </div>

      <div className="link-home">
        <Link to="/">Go back to home page</Link>
      </div>

      <Container>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {
              inputs.map((input)=>{
                if(input === 'fname'){
                  return (
                    <th key={input}>First Name</th>
                  )
                }
                else if(input === 'lname'){
                  return (
                    <th key={input}>Last Name</th>
                  )
                }
                else if(input === 'email'){
                  return (
                    <th key={input}>Email</th>
                  )
                }
                else if(input === 'username'){
                  return (
                    <th key={input}>Username</th>
                  )
                }
                else if(input === 'contact'){
                  return (
                    <th key={input}>Phone</th>
                  )
                }
                return null
              })
            }
          </tr>
        </thead>
        <tbody>
          <tr>
            {details.map((detail)=>{
              return(
                <td key={detail}>
                  {detail}
                </td>
              )
            })}
          </tr>
         
        </tbody>
      </Table>
      </Container>
    </div>
  );
};

export default Render;