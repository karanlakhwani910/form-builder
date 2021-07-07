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
                <div className="form-field">
                  <FirstName
                    getFname={(first) => setFirst(first)}
                    key={input}
                  ></FirstName>
                </div>
              );
            } else if (input === "lname") {
              return (
                <div className="form-field">
                  <LastName getLname={(last)=>setLast(last)} key={input}></LastName>
                </div>
              );
            } else if (input === "email") {
              return (
                <div className="form-field">
                  <Email getEmail={(email)=> setEmail(email)} key={input}></Email>
                </div>
              );
            } else if (input === "username") {
              return (
                <div className="form-field">
                  <Username getUsername={username => setUsername(username)} key={input}></Username>
                </div>
              );
            } else if (input === "contact") {
              return (
                <div className="form-field">
                  <Contact getPhone = {(contact) => setContact(contact)} key={input}></Contact>
                </div>
              );
            } else if (input === "password") {
              return (
                <div className="form-field">
                  <Password key={input}></Password>
                </div>
              );
            } else if (input === "submit") {
              return (
                <div className="form-field">
                  <Submit getDetails={getDetails} key={input}></Submit>
                </div>
              );
            }
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
                    <th>First Name</th>
                  )
                }
                else if(input === 'lname'){
                  return (
                    <th>Last Name</th>
                  )
                }
                else if(input === 'email'){
                  return (
                    <th>Email</th>
                  )
                }
                else if(input === 'username'){
                  return (
                    <th>Username</th>
                  )
                }
                else if(input === 'contact'){
                  return (
                    <th>Phone</th>
                  )
                }
              })
            }
          </tr>
        </thead>
        <tbody>
          <tr>
            {details.map((detail)=>{
              return(
                <td>
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
